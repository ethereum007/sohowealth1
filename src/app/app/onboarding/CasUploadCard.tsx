"use client";

// "Upload your CAS" — parses a CAMS/KFintech Consolidated Account Statement
// and prefills the assets section, so users never type their portfolio.

import { useRef, useState } from "react";
import { FileUp, Loader2, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface ParsedCasAsset {
  asset_class: "equity" | "debt";
  description: string;
  current_value: number;
  notes: string | null;
}

interface Props {
  onParsed: (assets: ParsedCasAsset[], meta: { as_on: string | null; total: number }) => void;
}

export default function CasUploadCard({ onParsed }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [needsPassword, setNeedsPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<{ count: number; total: number } | null>(null);

  async function parse(selected: File, pwd: string) {
    setBusy(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", selected);
      if (pwd) fd.append("password", pwd);
      const res = await fetch("/api/cas/parse", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) {
        if (data.needs_password) setNeedsPassword(true);
        throw new Error(data.error || "Could not parse the statement.");
      }
      if (!data.count) {
        throw new Error("No holdings found — is this a CAMS/KFintech CAS PDF? (Get one from camsonline.com → Statements → CAS)");
      }
      setDone({ count: data.count, total: data.total_market_value });
      onParsed(data.assets, { as_on: data.as_on, total: data.total_market_value });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not parse the statement.");
    } finally {
      setBusy(false);
    }
  }

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setDone(null);
    setError("");
    setNeedsPassword(false);
    if (f) void parse(f, password);
  }

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-emerald-100/60 border border-emerald-200 rounded-xl p-5">
      <div className="flex items-start gap-3">
        <FileUp className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
        <div className="flex-1">
          <h2 className="font-serif text-lg text-emerald-900">Auto-fill from your CAS statement</h2>
          <p className="text-sm text-emerald-800 mt-1">
            Upload your CAMS / KFintech Consolidated Account Statement (PDF) and we&apos;ll fill in your
            mutual fund holdings automatically. Parsed in memory — the file is never stored.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <input ref={fileRef} type="file" accept="application/pdf" className="hidden" onChange={onPick} />
            <Button
              type="button"
              size="sm"
              disabled={busy}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => fileRef.current?.click()}
            >
              {busy ? <><Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> Parsing…</> : <><FileUp className="w-4 h-4 mr-1.5" /> Upload CAS PDF</>}
            </Button>

            {needsPassword && file && (
              <form
                className="flex items-center gap-2"
                onSubmit={(e) => { e.preventDefault(); if (file) void parse(file, password); }}
              >
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="PDF password (usually PAN)"
                    className="pl-8 h-9 w-56 bg-white"
                  />
                </div>
                <Button type="submit" size="sm" variant="outline" disabled={busy || !password}>Unlock</Button>
              </form>
            )}
          </div>

          {done && (
            <p className="flex items-center gap-1.5 text-sm text-emerald-800 font-medium mt-2">
              <CheckCircle2 className="w-4 h-4" />
              Added {done.count} holdings worth ₹{done.total.toLocaleString("en-IN")} to your assets below.
            </p>
          )}
          {error && <p className="text-sm text-red-700 mt-2">{error}</p>}

          <p className="text-[11px] text-emerald-700/70 mt-2">
            Get your CAS: camsonline.com → Statements → View More → CAS, or via the myCAMS app.
          </p>
        </div>
      </div>
    </section>
  );
}
