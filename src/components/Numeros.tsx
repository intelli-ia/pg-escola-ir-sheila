"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const mapa =
  "https://www.google.com/maps?q=Escola+T%C3%A9cnica+Irm%C3%A3+Sheila+Dias+d%27%C3%81vila+BA&output=embed";

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
    <section id="numeros" className="fundo-claro relative overflow-hidden py-20 md:py-32">
      <div className="container-x grid gap-5 lg:grid-cols-12 lg:gap-6">
        {/* Painel 1 — 5 mil */}
        <Reveal className="lg:col-span-7">
          <PainelGlow className="min-h-[22rem] bg-gradient-to-br from-petroleo-claro via-petroleo to-petroleo-escuro text-white shadow-[0_40px_80px_-40px_rgba(6,42,45,0.9)] md:min-h-[26rem]">
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
              <h2 className="titulo">
                <span className="flex items-baseline gap-3 md:gap-5">
                  <AnimatedNumber
                    value={5}
                    className="bg-gradient-to-b from-white via-white to-menta bg-clip-text text-[8rem] leading-[0.82] text-transparent md:text-[12rem]"
                  />
                  <em className="text-[3rem] text-coral md:text-[5.5rem]">mil</em>
                </span>
                <span className="mt-6 block max-w-[20rem] text-[1.4rem] leading-snug text-white/85 md:mt-8 md:max-w-[28rem] md:text-[2rem]">
                  alunos formados desde 1996.
                </span>
              </h2>

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
                  stroke="#e8623f"
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

        {/* Mapa lateral — ocupa as duas linhas */}
        <Reveal delay={0.15} className="lg:col-span-5 lg:row-span-2">
          <div className="relative h-full min-h-[26rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-0 hidden translate-x-3 translate-y-3 rounded-[2.2rem] border border-coral/40 lg:block"
            />
            <div className="relative h-full min-h-[26rem] overflow-hidden rounded-[2rem] border border-petroleo/10 bg-gradient-to-br from-white to-menta p-2 shadow-[0_40px_80px_-40px_rgba(11,59,63,0.6)]">
              <div className="relative h-full min-h-[24.5rem] overflow-hidden rounded-[1.5rem]">
                <iframe
                  title="Mapa — Escola Técnica Irmã Sheila, Dias D’Ávila"
                  src={mapa}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 [filter:saturate(0.5)_contrast(1.03)_hue-rotate(-8deg)]"
                />
                {/* Véu de marca + vinheta */}
                <div className="pointer-events-none absolute inset-0 bg-petroleo/[0.07] mix-blend-multiply" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_70px_rgba(6,42,45,0.28)]" />

                {/* Selo de localização */}
                <span className="pointer-events-none absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-petroleo text-menta shadow-lg">
                  <span className="absolute inset-0 animate-ping rounded-2xl bg-coral/40 [animation-duration:2.6s]" />
                  <MapPin className="relative h-5 w-5" strokeWidth={1.7} />
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Painel 2 — 7 cursos */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <PainelGlow className="min-h-[19rem] bg-gradient-to-br from-[#f0794f] via-coral to-[#c4431f] text-white shadow-[0_40px_80px_-40px_rgba(204,74,40,0.85)] md:min-h-[21rem]">
            <Aneis className="-bottom-32 -left-24 h-[26rem] w-[26rem] text-white" />

            <div className="flex h-full flex-col justify-between p-8 md:flex-row md:items-end md:p-12">
              <p className="titulo">
                <span className="flex items-baseline gap-3 md:gap-5">
                  <AnimatedNumber
                    value={7}
                    className="text-[8rem] leading-[0.82] text-white md:text-[12rem]"
                  />
                  <em className="text-[3rem] text-petroleo-escuro md:text-[5.5rem]">cursos</em>
                </span>
              </p>
              <p className="titulo mt-6 max-w-[17rem] text-[1.4rem] leading-snug text-white md:mt-0 md:max-w-[15rem] md:pb-3 md:text-[1.75rem]">
                para dar o próximo passo na sua carreira.
              </p>
            </div>
          </PainelGlow>
        </Reveal>
      </div>
    </section>
  );
}
