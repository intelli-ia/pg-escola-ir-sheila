import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variante = "coral" | "menta" | "contorno" | "contorno-escuro";

interface BotaoProps {
  href: string;
  children: React.ReactNode;
  variante?: Variante;
  tamanho?: "sm" | "md";
  className?: string;
  externo?: boolean;
}

const variantes: Record<Variante, string> = {
  coral:
    "bg-coral text-white hover:bg-coral-escuro shadow-[0_10px_30px_-10px_rgba(232,98,63,0.7),inset_0_1px_0_rgba(255,255,255,0.28)]",
  menta: "bg-menta text-petroleo hover:bg-white",
  contorno: "border border-white/35 text-white hover:border-white/70 hover:bg-white/10",
  "contorno-escuro": "border border-petroleo/25 text-petroleo hover:border-petroleo/60 hover:bg-petroleo/[0.05]",
};

/** CTA da marca: pílula com seta que desliza no hover. */
export function Botao({
  href,
  children,
  variante = "coral",
  tamanho = "md",
  className,
  externo,
}: BotaoProps) {
  const ancora = href.startsWith("#");
  const ehExterno = externo ?? !ancora;
  const Comp = ancora ? "a" : Link;
  return (
    <Comp
      href={href}
      target={ehExterno ? "_blank" : undefined}
      rel={ehExterno ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5",
        tamanho === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-[0.9375rem] md:px-9 md:py-4 md:text-base",
        variantes[variante],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        className={cn(
          "shrink-0 transition-transform duration-300 group-hover:translate-x-1",
          tamanho === "sm" ? "h-3.5 w-3.5" : "h-4 w-4",
        )}
      />
    </Comp>
  );
}
