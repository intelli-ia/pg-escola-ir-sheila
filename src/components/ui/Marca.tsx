import { cn } from "@/lib/utils";

/** Símbolo: cruz da saúde cuja haste horizontal é um pulso. */
export function Simbolo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("h-10 w-10", className)} fill="none">
      <rect x="1.5" y="1.5" width="45" height="45" rx="14" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <path d="M24 9v9.5M24 29.5V39" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d="M8.5 24h9l3-5.5 4.5 11 3-5.5h11.5"
        stroke="#e8623f"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Logo completo: símbolo + nome. Herda a cor do texto. */
export function Marca({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.webp" alt="Logo Escola Técnica Irmã Sheila" className="h-11 w-11 shrink-0 rounded-full object-cover" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.28em] opacity-70">Escola Técnica</span>
        <span className="titulo mt-1 text-[1.45rem] font-medium tracking-tight">Irmã Sheila</span>
      </span>
    </span>
  );
}
