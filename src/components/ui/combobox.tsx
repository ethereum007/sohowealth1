"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Plus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export type ComboboxOption = {
  value: string;
  label: string;
  group?: string;
  hint?: string;
};

interface Props {
  /** Static options list (used when loadOptions is not provided) */
  options?: ComboboxOption[];
  /** Async options provider — debounced 250ms; client-side filtering disabled. */
  loadOptions?: (query: string) => Promise<ComboboxOption[]>;
  /** Min chars before triggering loadOptions (default 2) */
  minChars?: number;
  value?: string;
  onChange: (val: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  /** Allow values outside the option list (free text) — default true */
  allowCustom?: boolean;
  className?: string;
  triggerClassName?: string;
  disabled?: boolean;
}

/**
 * A searchable dropdown:
 *  - type to filter (case-insensitive substring match across label + value)
 *  - groups options by `group` field
 *  - if `allowCustom` (default), the typed text becomes a "Use 'xyz'" option
 *  - selecting clears the input + closes
 */
export function Combobox({
  options: staticOptions = [],
  loadOptions,
  minChars = 2,
  value, onChange,
  placeholder = "Select…",
  searchPlaceholder = "Search…",
  emptyMessage = "No matches.",
  allowCustom = true,
  className,
  triggerClassName,
  disabled,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [asyncOptions, setAsyncOptions] = React.useState<ComboboxOption[]>([]);
  const [loading, setLoading] = React.useState(false);
  const isAsync = !!loadOptions;
  const reqIdRef = React.useRef(0);

  // Debounced async loader
  React.useEffect(() => {
    if (!isAsync || !open) return;
    const trimmed = query.trim();
    if (trimmed.length < minChars) {
      setAsyncOptions([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const id = ++reqIdRef.current;
    const t = setTimeout(async () => {
      try {
        const items = await loadOptions!(trimmed);
        if (id === reqIdRef.current) setAsyncOptions(items);
      } catch {
        if (id === reqIdRef.current) setAsyncOptions([]);
      } finally {
        if (id === reqIdRef.current) setLoading(false);
      }
    }, 250);
    return () => clearTimeout(t);
  }, [query, isAsync, open, minChars, loadOptions]);

  const options = isAsync ? asyncOptions : staticOptions;

  // Group options (only meaningful for static; async API can still set `group` per item)
  const groups = React.useMemo(() => {
    const map = new Map<string, ComboboxOption[]>();
    for (const o of options) {
      const k = o.group ?? "";
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(o);
    }
    return Array.from(map.entries());
  }, [options]);

  const display = React.useMemo(() => {
    const found = staticOptions.find(o => o.value === value)
              ?? asyncOptions.find(o => o.value === value);
    return found?.label ?? value ?? "";
  }, [staticOptions, asyncOptions, value]);

  const trimmedQuery = query.trim();
  const showCustom = allowCustom
    && trimmedQuery.length > 0
    && !options.some(o => o.label.toLowerCase() === trimmedQuery.toLowerCase());

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between font-normal h-10",
            !display && "text-slate-400",
            triggerClassName,
          )}
        >
          <span className="truncate">{display || placeholder}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0 w-[--radix-popover-trigger-width] min-w-[260px]", className)} align="start">
        <Command shouldFilter={!isAsync}>
          <div className="relative">
            <CommandInput
              placeholder={searchPlaceholder}
              value={query}
              onValueChange={setQuery}
            />
            {loading && <Loader2 className="absolute right-3 top-3.5 h-4 w-4 animate-spin opacity-50" />}
          </div>
          <CommandList className="max-h-72">
            <CommandEmpty>
              {isAsync && trimmedQuery.length < minChars
                ? `Type ${minChars}+ characters…`
                : loading ? "Searching…" : emptyMessage}
            </CommandEmpty>
            {showCustom && (
              <CommandGroup heading="Use as typed">
                <CommandItem
                  value={`__custom__::${trimmedQuery}`}
                  onSelect={() => {
                    onChange(trimmedQuery);
                    setQuery("");
                    setOpen(false);
                  }}
                >
                  <Plus className="mr-2 h-4 w-4 opacity-60" />
                  Use &quot;{trimmedQuery}&quot;
                </CommandItem>
              </CommandGroup>
            )}
            {groups.map(([groupName, opts]) => (
              <CommandGroup key={groupName || "default"} heading={groupName || undefined}>
                {opts.map(o => (
                  <CommandItem
                    key={o.value}
                    value={o.label + " " + o.value}
                    onSelect={() => {
                      onChange(o.value);
                      setQuery("");
                      setOpen(false);
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === o.value ? "opacity-100" : "opacity-0")} />
                    <div className="flex flex-col">
                      <span>{o.label}</span>
                      {o.hint && <span className="text-xs text-slate-500">{o.hint}</span>}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
