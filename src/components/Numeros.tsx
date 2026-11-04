"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Painel com brilho que acompanha o cursor. */
function PainelGlow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function aoMover(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={aoMover}
      className={cn(
        "grao group relative isolate overflow-hidden rounded-[2rem] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(24rem circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.16), transparent 62%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/** Anéis concêntricos decorativos. */
function Aneis({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      fill="none"
      className={cn("pointer-events-none absolute", className)}
    >
      {[60, 110, 165, 225, 290].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeOpacity="0.14" />
      ))}
    </svg>
  );
}

export default function Numeros() {
  return (
    <section id="numeros" className="relative overflow-hidden rounded-[2.5rem] bg-verde-forte py-20 md:rounded-[3.5rem] md:py-32">
      <div className="container-x relative">
        <Reveal>
          <h2 className="titulo mx-auto mb-14 max-w-[72rem] text-center text-[3rem] font-bold text-white sm:text-[4.2rem] md:mb-20 lg:text-[5.5rem]">
            Uma tradição em formar <em className="font-bold text-white">profissionais da saúde.</em>
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {/* Painel 1 — 5 mil */}
        <Reveal className="h-full">
          <PainelGlow className="h-full min-h-[24rem] bg-gradient-to-br from-institucional via-profundo to-profundo text-white shadow-[0_40px_80px_-40px_rgba(6,30,12,0.9)] md:min-h-[28rem]">
            <Aneis className="-right-24 -top-24 h-[26rem] w-[26rem] text-white" />

            {/* Ano em contorno, ao fundo */}
            <span
              aria-hidden="true"
              className="titulo pointer-events-none absolute -bottom-6 right-6 select-none text-[6rem] italic leading-none text-transparent md:text-[9rem]"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.13)" }}
            >
              1996
            </span>

            <div className="flex h-full flex-col justify-between p-8 md:p-12">
              <p className="titulo">
                <span className="flex items-baseline gap-3 md:gap-5">
                  <AnimatedNumber
                    value={5}
                    prefix="+"
                    className="bg-gradient-to-b from-white via-white to-verde-claro bg-clip-text text-[8rem] leading-[0.82] text-transparent md:text-[12rem]"
                  />
                  <em className="text-[3rem] text-verde md:text-[5.5rem]">mil</em>
                </span>
                <span className="mt-6 block max-w-[20rem] text-[1.4rem] leading-snug text-white/85 md:mt-8 md:max-w-[28rem] md:text-[2rem]">
                  alunos formados desde 1996.
                </span>
              </p>

              {/* Pulso que se desenha ao rolar */}
              <svg
                aria-hidden="true"
                viewBox="0 0 600 60"
                fill="none"
                preserveAspectRatio="none"
                className="mt-8 h-10 w-full md:h-12"
              >
                <motion.path
                  d="M0 30h190l16-24 26 48 22-34 14 10h30l14-20 18 36 12-16H600"
                  stroke="#4DB60F"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </PainelGlow>
        </Reveal>

        {/* Painel 2 — 7 cursos */}
        <Reveal delay={0.1} className="h-full">
          <PainelGlow className="h-full min-h-[24rem] bg-gradient-to-br from-[#f2352f] via-vermelho to-[#b30a06] text-white shadow-[0_40px_80px_-40px_rgba(227,14,9,0.7)] md:min-h-[28rem]">
            <Aneis className="-bottom-32 -left-24 h-[26rem] w-[26rem] text-white" />

            <div className="flex h-full flex-col justify-between gap-8 p-8 md:p-12">
              <p className="titulo">
                <span className="flex items-baseline gap-3 md:gap-5">
                  <AnimatedNumber
                    value={7}
                    className="text-[8rem] leading-[0.82] text-white md:text-[12rem]"
                  />
                  <em className="text-[3rem] text-white/80 md:text-[5.5rem]">cursos</em>
                </span>
              </p>
              <p className="titulo max-w-[20rem] text-[1.4rem] leading-snug text-white md:max-w-[24rem] md:text-[2rem]">
                para dar o próximo passo na sua carreira.
              </p>
            </div>
          </PainelGlow>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
