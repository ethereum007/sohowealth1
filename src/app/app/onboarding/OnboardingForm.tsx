"use client";

import { useState, useTransition } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { Plus, Trash2, ChevronRight, Loader2, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Combobox } from "@/components/ui/combobox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { savePlan, type PlanInput } from "../actions";
import { useRouter } from "next/navigation";
import { insurerOptions } from "@/lib/wealth/data/insurers";
import { cityOptions } from "@/lib/wealth/data/cities";
import { GOAL_TEMPLATES, templateToGoal } from "@/lib/wealth/data/goal-templates";
import { STARTER_PACKS } from "@/lib/wealth/data/quick-templates";

const card = "bg-white rounded-xl border border-slate-200 shadow-sm p-6";
const sectionTitle = "font-serif text-xl text-slate-900";
const sectionSub = "text-sm text-slate-500 mt-1";

export default function OnboardingForm({ initial }: { initial: PlanInput }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<PlanInput>({ defaultValues: initial });
  const { register, control, handleSubmit, getValues, setValue, reset, formState: { errors } } = form;

  // Watch monthly expenses for smart defaults (emergency / retirement goal PVs)
  const watchedExpenses = useWatch({ control, name: "expenses" });
  const monthlyExpensesTotal = (watchedExpenses ?? []).reduce(
    (s, e: any) => s + (Number(e?.monthly_amount) || 0), 0,
  );

  const family    = useFieldArray({ control, name: "family" });
  const income    = useFieldArray({ control, name: "income" });
  const expenses  = useFieldArray({ control, name: "expenses" });
  const assets    = useFieldArray({ control, name: "assets" });
  const liabilities = useFieldArray({ control, name: "liabilities" });
  const goals     = useFieldArray({ control, name: "goals" });
  const insurance = useFieldArray({ control, name: "insurance" });

  async function onSubmit(values: PlanInput) {
    setSubmitting(true);
    const result = await savePlan(values);
    setSubmitting(false);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success("Plan saved.");
    start(() => router.push("/app"));
  }

  // ---------- Quick-actions ----------
  function loadStarterPack(packKey: string) {
    const pack = STARTER_PACKS.find(p => p.key === packKey);
    if (!pack) return;
    const cur = getValues();
    reset({
      ...cur,
      income:      [...cur.income, ...pack.rows.income],
      expenses:    [...cur.expenses, ...pack.rows.expenses],
      assets:      [...cur.assets, ...pack.rows.assets],
      liabilities: [...cur.liabilities, ...pack.rows.liabilities],
      insurance:   [...cur.insurance, ...pack.rows.insurance],
    });
    toast.success(`Loaded "${pack.label}". Edit the values to match your reality.`);
  }

  function addGoalFromTemplate(templateKey: string) {
    const t = GOAL_TEMPLATES.find(x => x.key === templateKey);
    if (!t) return;
    goals.append(templateToGoal(t, monthlyExpensesTotal));
    if (t.auto && monthlyExpensesTotal === 0) {
      toast.info("Tip: fill in monthly expenses first — auto-calc uses them.");
    }
  }

  const isMostlyEmpty =
    family.fields.length === 0 &&
    income.fields.length === 0 &&
    expenses.fields.length === 0 &&
    assets.fields.length === 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

      {/* ---------- Starter pack banner (only when form is mostly empty) ---------- */}
      {isMostlyEmpty && (
        <section className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Wand2 className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
            <div className="flex-1">
              <h2 className="font-serif text-lg text-amber-900">Skip the blank-page problem</h2>
              <p className="text-sm text-amber-800 mt-1">
                Load a typical starter pack — then just edit the numbers to match your reality. (Won&apos;t replace anything you&apos;ve already entered.)
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {STARTER_PACKS.map(p => (
                  <Button key={p.key} type="button" size="sm" variant="outline"
                    className="bg-white hover:bg-amber-50 border-amber-300"
                    onClick={() => loadStarterPack(p.key)}>
                    <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
                    {p.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- Profile ---------- */}
      <section className={card}>
        <h2 className={sectionTitle}>Your profile</h2>
        <p className={sectionSub}>Basic info — drives the age & retirement calculations.</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-5">
          <Field label="Full name *">
            <Input {...register("profile.full_name", { required: true })} placeholder="Your full name" />
          </Field>
          <Field label="Phone (optional)">
            <Input {...register("profile.phone")} placeholder="+91 ..." />
          </Field>
          <Field label="Date of birth *">
            <Input type="date" {...register("profile.date_of_birth", { required: true })} />
          </Field>
          <Field label="Retirement age">
            <Input type="number" min={40} max={80} {...register("profile.retirement_age")} />
          </Field>
          <Field label="City">
            <Controller
              control={control}
              name="profile.city"
              render={({ field }) => (
                <Combobox
                  options={cityOptions()}
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  placeholder="Select your city"
                  searchPlaceholder="Search 100+ cities…"
                />
              )}
            />
          </Field>
          <Field label="Occupation">
            <Input {...register("profile.occupation")} placeholder="IT Professional" />
          </Field>
        </div>
      </section>

      {/* ---------- Family ---------- */}
      <CollectionCard
        title="Family"
        subtitle="Spouse, children, dependents — used to size goals & insurance."
        addLabel="Add family member"
        onAdd={() => family.append({ name: "", relationship: "spouse", date_of_birth: "", notes: "" })}
      >
        {family.fields.length === 0 && <Empty hint="Add your spouse and children, if any." />}
        {family.fields.map((f, i) => (
          <RowGrid key={f.id} cols="1fr 160px 160px 40px" onRemove={() => family.remove(i)}>
            <Input placeholder="Name" {...register(`family.${i}.name`, { required: true })} />
            <SelectField
              control={control}
              name={`family.${i}.relationship`}
              options={[["self","Self"],["spouse","Spouse"],["son","Son"],["daughter","Daughter"],["parent","Parent"],["sibling","Sibling"],["other","Other"]]}
            />
            <Input type="date" {...register(`family.${i}.date_of_birth`)} />
          </RowGrid>
        ))}
      </CollectionCard>

      {/* ---------- Income ---------- */}
      <CollectionCard
        title="Monthly income"
        subtitle="All recurring income (after tax)."
        addLabel="Add income source"
        onAdd={() => income.append({ source: "salary", label: "", monthly_amount: 0 })}
      >
        {income.fields.length === 0 && <Empty hint="Add salary, business income, rentals — anything monthly." />}
        {income.fields.map((f, i) => (
          <RowGrid key={f.id} cols="180px 1fr 200px 40px" onRemove={() => income.remove(i)}>
            <SelectField
              control={control}
              name={`income.${i}.source`}
              options={[["salary","Salary"],["bonus","Bonus"],["rental","Rental"],["business","Business"],["other","Other"]]}
            />
            <Input placeholder="Label (optional)" {...register(`income.${i}.label`)} />
            <NumberInput {...register(`income.${i}.monthly_amount`)} placeholder="Monthly ₹" />
          </RowGrid>
        ))}
      </CollectionCard>

      {/* ---------- Expenses ---------- */}
      <CollectionCard
        title="Monthly expenses"
        subtitle="Average monthly outflows by category."
        addLabel="Add expense"
        onAdd={() => expenses.append({ category: "household", label: "", monthly_amount: 0 })}
      >
        {expenses.fields.length === 0 && <Empty hint="Add household, lifestyle, insurance, etc." />}
        {expenses.fields.map((f, i) => (
          <RowGrid key={f.id} cols="180px 1fr 200px 40px" onRemove={() => expenses.remove(i)}>
            <SelectField
              control={control}
              name={`expenses.${i}.category`}
              options={[["household","Household"],["lifestyle","Lifestyle"],["dependents","Dependents"],["insurance","Insurance"],["investments","Investments"],["other","Other"]]}
            />
            <Input placeholder="Label (optional)" {...register(`expenses.${i}.label`)} />
            <NumberInput {...register(`expenses.${i}.monthly_amount`)} placeholder="Monthly ₹" />
          </RowGrid>
        ))}
      </CollectionCard>

      {/* ---------- Assets ---------- */}
      <CollectionCard
        title="Assets"
        subtitle="Everything you own — across asset classes."
        addLabel="Add asset"
        onAdd={() => assets.append({ asset_class: "equity", description: "", current_value: 0, notes: "" })}
      >
        {assets.fields.length === 0 && <Empty hint="Cash, FDs, mutual funds, stocks, gold, property, etc." />}
        {assets.fields.map((f, i) => (
          <AssetRow
            key={f.id}
            index={i}
            control={control}
            register={register}
            onRemove={() => assets.remove(i)}
          />
        ))}
      </CollectionCard>

      {/* ---------- Liabilities ---------- */}
      <CollectionCard
        title="Liabilities"
        subtitle="Outstanding loans — home, car, personal, credit card."
        addLabel="Add liability"
        onAdd={() => liabilities.append({ loan_type: "home", outstanding_amount: 0, emi_monthly: 0, interest_rate: 0, notes: "" })}
      >
        {liabilities.fields.length === 0 && <Empty hint="Skip if you have no loans." />}
        {liabilities.fields.map((f, i) => (
          <RowGrid key={f.id} cols="160px 1fr 1fr 1fr 40px" onRemove={() => liabilities.remove(i)}>
            <SelectField
              control={control}
              name={`liabilities.${i}.loan_type`}
              options={[["home","Home"],["car","Car"],["personal","Personal"],["credit_card","Credit Card"],["other","Other"]]}
            />
            <NumberInput {...register(`liabilities.${i}.outstanding_amount`)} placeholder="Outstanding ₹" />
            <NumberInput {...register(`liabilities.${i}.emi_monthly`)} placeholder="EMI/mo ₹" />
            <NumberInput step="0.1" {...register(`liabilities.${i}.interest_rate`)} placeholder="Interest %" />
          </RowGrid>
        ))}
      </CollectionCard>

      {/* ---------- Goals ---------- */}
      <CollectionCard
        title="Financial goals"
        subtitle="What you're saving for. Present value = today's cost; we inflate to your target year."
        addLabel="Add blank goal"
        onAdd={() => goals.append({ goal_name: "", goal_type: "education", target_year: new Date().getFullYear() + 5, present_value: 0, inflation_rate: 7, earmarked_assets: 0, priority: "medium" })}
        extraAction={
          <GoalTemplatePicker onPick={addGoalFromTemplate} monthlyExpenses={monthlyExpensesTotal} />
        }
      >
        {goals.fields.length === 0 && <Empty hint="Examples: kids' education, house, retirement, vacation." />}
        {goals.fields.map((f, i) => (
          <div key={f.id} className="border border-slate-200 rounded-lg p-4 grid sm:grid-cols-12 gap-3 relative">
            <div className="sm:col-span-4">
              <Label className="text-xs text-slate-500">Goal name</Label>
              <Input className="mt-1" placeholder="e.g. Daughter's UG" {...register(`goals.${i}.goal_name`, { required: true })} />
            </div>
            <div className="sm:col-span-3">
              <Label className="text-xs text-slate-500">Type</Label>
              <SelectField
                control={control}
                name={`goals.${i}.goal_type`}
                options={[["emergency","Emergency"],["education","Education"],["marriage","Marriage"],["house","House"],["car","Car"],["vacation","Vacation"],["retirement","Retirement"],["other","Other"]]}
              />
            </div>
            <div className="sm:col-span-2">
              <Label className="text-xs text-slate-500">Target year</Label>
              <NumberInput className="mt-1" {...register(`goals.${i}.target_year`)} />
            </div>
            <div className="sm:col-span-3">
              <Label className="text-xs text-slate-500">Priority</Label>
              <SelectField
                control={control}
                name={`goals.${i}.priority`}
                options={[["high","High"],["medium","Medium"],["low","Low"]]}
              />
            </div>
            <div className="sm:col-span-4">
              <Label className="text-xs text-slate-500">Present value (today's cost) ₹</Label>
              <NumberInput className="mt-1" {...register(`goals.${i}.present_value`)} />
            </div>
            <div className="sm:col-span-4">
              <Label className="text-xs text-slate-500">Already earmarked ₹</Label>
              <NumberInput className="mt-1" {...register(`goals.${i}.earmarked_assets`)} />
            </div>
            <div className="sm:col-span-4">
              <Label className="text-xs text-slate-500">Inflation %</Label>
              <NumberInput className="mt-1" step="0.1" {...register(`goals.${i}.inflation_rate`)} />
            </div>
            <button type="button" onClick={() => goals.remove(i)} className="absolute top-2 right-2 text-slate-400 hover:text-red-600">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </CollectionCard>

      {/* ---------- Insurance ---------- */}
      <CollectionCard
        title="Insurance policies"
        subtitle="Existing cover. We compare against your HLV-based requirement."
        addLabel="Add policy"
        onAdd={() => insurance.append({ policy_type: "term_life", provider: "", cover_amount: 0, annual_premium: 0, notes: "" })}
      >
        {insurance.fields.length === 0 && <Empty hint="Add term life, health, motor — anything you currently hold." />}
        {insurance.fields.map((f, i) => (
          <InsuranceRow
            key={f.id}
            index={i}
            control={control}
            register={register}
            onRemove={() => insurance.remove(i)}
          />
        ))}
      </CollectionCard>

      {/* ---------- Submit bar ---------- */}
      <div className="sticky bottom-0 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 bg-white border-t border-slate-200 shadow-[0_-8px_20px_-12px_rgba(0,0,0,0.1)] flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500 hidden sm:block">
          {Object.keys(errors).length > 0 ? "⚠️  Some required fields are missing." : "Your data is encrypted at rest. Only you can read it."}
        </p>
        <div className="flex gap-2 ml-auto">
          <Button type="button" variant="outline" onClick={() => router.push("/app")}>Cancel</Button>
          <Button type="submit" disabled={submitting || pending} className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            {(submitting || pending) ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving</> : <>Save & view dashboard <ChevronRight className="w-4 h-4 ml-1" /></>}
          </Button>
        </div>
      </div>
    </form>
  );
}

// ---------- helpers ----------
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-xs text-slate-500">{label}</Label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Empty({ hint }: { hint: string }) {
  return <p className="text-sm text-slate-400 italic">{hint}</p>;
}

function CollectionCard({
  title, subtitle, addLabel, onAdd, children, extraAction,
}: { title: string; subtitle: string; addLabel: string; onAdd: () => void; children: React.ReactNode; extraAction?: React.ReactNode }) {
  return (
    <section className={card}>
      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
        <div>
          <h2 className={sectionTitle}>{title}</h2>
          <p className={sectionSub}>{subtitle}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {extraAction}
          <Button type="button" size="sm" variant="outline" onClick={onAdd}>
            <Plus className="w-4 h-4 mr-1" />{addLabel}
          </Button>
        </div>
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

// ---------- Async fund loader ----------
async function loadFundOptions(query: string, type: "equity_mf" | "debt_mf" | "any") {
  try {
    const res = await fetch(`/api/search/funds?q=${encodeURIComponent(query)}&type=${type}&limit=15`);
    if (!res.ok) return [];
    const json = await res.json();
    return (json.items ?? []) as { value: string; label: string; hint?: string }[];
  } catch {
    return [];
  }
}

// ---------- Asset row — Combobox for funds when class = equity/debt ----------
function AssetRow({
  index, control, register, onRemove,
}: { index: number; control: any; register: any; onRemove: () => void }) {
  const assetClass = useWatch({ control, name: `assets.${index}.asset_class` });
  const isMf = assetClass === "equity" || assetClass === "debt";
  const fundType = assetClass === "equity" ? "equity_mf" : assetClass === "debt" ? "debt_mf" : "any";

  return (
    <RowGrid cols="170px 1fr 200px 40px" onRemove={onRemove}>
      <SelectField
        control={control}
        name={`assets.${index}.asset_class`}
        options={[["liquid","Liquid (Cash, Savings)"],["debt","Debt (FD, Bonds, Debt MF)"],["equity","Equity (Stocks, Equity MF)"],["gold","Gold"],["real_estate","Real Estate"],["personal","Personal (Vehicle etc.)"]]}
      />
      {isMf ? (
        <Controller
          control={control}
          name={`assets.${index}.description`}
          render={({ field }) => (
            <Combobox
              loadOptions={(q) => loadFundOptions(q, fundType as any)}
              value={field.value ?? ""}
              onChange={field.onChange}
              placeholder={assetClass === "equity" ? "Search 7,000+ equity MFs (or type a stock)" : "Search debt MFs (or type your FD/bond)"}
              searchPlaceholder="e.g. axis bluechip, kotak flexi…"
            />
          )}
        />
      ) : (
        <Input placeholder="Description (e.g. SBI savings, ICICI FD)" {...register(`assets.${index}.description`)} />
      )}
      <NumberInput {...register(`assets.${index}.current_value`)} placeholder="Current value ₹" />
    </RowGrid>
  );
}

// ---------- Insurance row with provider Combobox filtered by policy_type ----------
function InsuranceRow({
  index, control, register, onRemove,
}: { index: number; control: any; register: any; onRemove: () => void }) {
  const policyType = useWatch({ control, name: `insurance.${index}.policy_type` });
  return (
    <RowGrid cols="180px 1fr 1fr 1fr 40px" onRemove={onRemove}>
      <SelectField
        control={control}
        name={`insurance.${index}.policy_type`}
        options={[["term_life","Term Life"],["health","Health"],["motor","Motor"],["critical_illness","Critical Illness"],["personal_accident","Personal Accident"]]}
      />
      <Controller
        control={control}
        name={`insurance.${index}.provider`}
        render={({ field }) => (
          <Combobox
            options={insurerOptions(policyType)}
            value={field.value ?? ""}
            onChange={field.onChange}
            placeholder="Insurance provider"
            searchPlaceholder="Search insurers…"
          />
        )}
      />
      <NumberInput {...register(`insurance.${index}.cover_amount`)} placeholder="Cover ₹" />
      <NumberInput {...register(`insurance.${index}.annual_premium`)} placeholder="Premium/yr ₹" />
    </RowGrid>
  );
}

// ---------- Goal template picker (Popover with grouped templates) ----------
function GoalTemplatePicker({
  onPick, monthlyExpenses,
}: { onPick: (key: string) => void; monthlyExpenses: number }) {
  const [open, setOpen] = useState(false);
  const groups = ["Self", "Family", "Lifestyle"] as const;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button type="button" size="sm" variant="outline" className="bg-amber-50 border-amber-300 hover:bg-amber-100 text-amber-900">
          <Sparkles className="w-4 h-4 mr-1.5 text-amber-600" /> Pick from template
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[480px] max-w-[92vw] p-0" align="end">
        <div className="p-3 border-b border-slate-200 bg-slate-50">
          <p className="text-sm font-semibold text-slate-900">Quick-add a common goal</p>
          <p className="text-xs text-slate-500 mt-0.5">
            Pre-filled with sensible defaults. You can edit any value after.
            {monthlyExpenses > 0 && (
              <> Auto-calc uses ₹{Math.round(monthlyExpenses).toLocaleString("en-IN")}/mo expenses.</>
            )}
          </p>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {groups.map(g => (
            <div key={g} className="mb-2">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold px-2 mt-2 mb-1">{g}</p>
              {GOAL_TEMPLATES.filter(t => t.group === g).map(t => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => { onPick(t.key); setOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-amber-50 transition-colors"
                >
                  <p className="text-sm font-medium text-slate-900">{t.label}</p>
                  {t.hint && <p className="text-xs text-slate-500 mt-0.5">{t.hint}</p>}
                </button>
              ))}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function RowGrid({ cols, onRemove, children }: { cols: string; onRemove: () => void; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 items-center" style={{ gridTemplateColumns: cols }}>
      {children}
      <button type="button" onClick={onRemove} className="text-slate-400 hover:text-red-600 justify-self-center" aria-label="Remove">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}

function NumberInput(props: React.ComponentProps<typeof Input>) {
  return <Input type="number" inputMode="decimal" {...props} />;
}

function SelectField({
  control, name, options,
}: { control: any; name: string; options: [string, string][] }) {
  return (
    <Controller
      control={control}
      name={name as any}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            {options.map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}
          </SelectContent>
        </Select>
      )}
    />
  );
}
