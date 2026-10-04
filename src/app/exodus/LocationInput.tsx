"use client";

import { useEffect, useId, useRef, useState } from "react";

type GeoResult = {
  id: number;
  name: string;
  country?: string;
  admin1?: string;
};

type LocationInputProps = {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function formatPlace(place: GeoResult) {
  return [place.name, place.admin1, place.country].filter(Boolean).join(", ");
}

export default function LocationInput({
  id,
  name,
  value,
  onChange,
  placeholder = "London, United Kingdom",
}: LocationInputProps) {
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GeoResult[]>([]);
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    const query = value.trim();
    if (query.length < 2) {
      setResults([]);
      setLoading(false);
      setHighlight(-1);
      return;
    }

    const timer = window.setTimeout(async () => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setLoading(true);

      try {
        const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
        url.searchParams.set("name", query);
        url.searchParams.set("count", "8");
        url.searchParams.set("language", "en");
        url.searchParams.set("format", "json");

        const res = await fetch(url.toString(), { signal: controller.signal });
        if (!res.ok) throw new Error("Location lookup failed");
        const data = (await res.json()) as { results?: GeoResult[] };
        setResults(data.results ?? []);
        setHighlight(-1);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setResults([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 280);

    return () => {
      window.clearTimeout(timer);
      abortRef.current?.abort();
    };
  }, [value]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setHighlight(-1);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const showCustomOption =
    value.trim().length >= 2 &&
    !results.some(
      (place) => formatPlace(place).toLowerCase() === value.trim().toLowerCase()
    );

  const options = [
    ...results.map((place) => ({
      key: String(place.id),
      label: formatPlace(place),
      kind: "result" as const,
    })),
    ...(showCustomOption
      ? [
          {
            key: "custom",
            label: value.trim(),
            kind: "custom" as const,
          },
        ]
      : []),
  ];

  const selectOption = (label: string) => {
    onChange(label);
    setOpen(false);
    setHighlight(-1);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      setOpen(true);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!options.length) return;
      setHighlight((prev) => (prev + 1) % options.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!options.length) return;
      setHighlight((prev) => (prev <= 0 ? options.length - 1 : prev - 1));
      return;
    }

    if (event.key === "Enter" && open && highlight >= 0 && options[highlight]) {
      event.preventDefault();
      selectOption(options[highlight].label);
      return;
    }

    if (event.key === "Escape") {
      setOpen(false);
      setHighlight(-1);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          highlight >= 0 ? `${listboxId}-option-${highlight}` : undefined
        }
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/40 border border-border/60 focus:border-classic-blue/70 focus:ring-2 focus:ring-classic-blue/20 outline-none text-foreground transition-all duration-200 placeholder:text-foreground/50"
      />

      {open && value.trim().length >= 2 ? (
        <div
          id={listboxId}
          role="listbox"
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-border/60 bg-white/95 dark:bg-black/90 shadow-xl backdrop-blur-md"
        >
          {loading && !results.length ? (
            <p className="px-4 py-3 text-sm text-foreground-tertiary">
              Searching locations…
            </p>
          ) : null}

          {!loading && !options.length ? (
            <p className="px-4 py-3 text-sm text-foreground-tertiary">
              No matches. Keep typing to use your own location.
            </p>
          ) : null}

          {options.map((option, index) => (
            <button
              key={option.key}
              id={`${listboxId}-option-${index}`}
              type="button"
              role="option"
              aria-selected={highlight === index}
              className={`flex w-full items-start gap-2 px-4 py-3 text-left text-sm transition-colors ${
                highlight === index
                  ? "bg-classic-blue/15 text-foreground"
                  : "text-foreground-secondary hover:bg-classic-blue/10"
              }`}
              onMouseEnter={() => setHighlight(index)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => selectOption(option.label)}
            >
              <span className="min-w-0 flex-1 leading-snug">{option.label}</span>
              {option.kind === "custom" ? (
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-foreground-tertiary">
                  Use this
                </span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
