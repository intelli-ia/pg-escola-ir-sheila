"use client";

import { motion } from "framer-motion";
import { Botao } from "@/components/ui/Botao";
import { Simbolo } from "@/components/ui/Marca";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="grao relative isolate flex min-h-[100svh] items-center overflow-hidden bg-petroleo pb-20 pt-32 text-white md:pb-24"
    >
      {/* Brilho de fundo */}
      <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(27,94,95,0.55),transparent)]" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(232,98,63,0.12),transparent)]" />

      {/* Composição: anéis + símbolo */}
      <div className="pointer-events-none absolute -right-24 top-1/2 -z-10 hidden h-[40rem] w-[40rem] -translate-y-1/2 lg:block xl:right-6">
        <svg viewBox="0 0 600 600" fill="none" className="h-full w-full">
          {[290, 225, 160].map((r, i) => (
            <motion.circle
              key={r}
              cx="300"
              cy="300"
              r={r}
              stroke="white"
              strokeOpacity={0.12 - i * 0.02}
              strokeWidth="1.2"
              strokeDasharray={i === 1 ? "3 9" : undefined}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.2 + i * 0.2, ease }}
              style={{ transformOrigin: "300px 300px" }}
            />
          ))}
          <motion.path
            d="M0 300h190l30-62 52 128 40-86h58l24-46 28 80 22-34H600"
            stroke="#e8623f"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
            transition={{
              duration: 4,
              delay: 0.6,
              times: [0, 0.6, 1],
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
          />
        </svg>
        <Simbolo className="absolute left-1/2 top-[18%] h-20 w-20 -translate-x-1/2 text-white/70" />
      </div>

      <div className="container-x relative">
        <div className="max-w-[44rem]">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="titulo text-[2.6rem] sm:text-[3.4rem] lg:text-[4.4rem]"
          >
            Seu futuro na área da saúde começa com uma <em className="text-menta">formação prática.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="mt-7 max-w-[34rem] text-base leading-relaxed text-white/80 md:text-lg"
          >
            Na Escola Técnica Irmã Sheila, em Dias D’Ávila, você aprende com professores da área e
            acompanhamento próximo para se preparar para os desafios da profissão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="mt-10"
          >
            <Botao href="#cursos">Encontre seu curso</Botao>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
