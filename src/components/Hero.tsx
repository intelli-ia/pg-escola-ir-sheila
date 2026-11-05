"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Botao } from "@/components/ui/Botao";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import SlideMatriculas from "@/components/hero/SlideMatriculas";
import SlideProfissoes from "@/components/hero/SlideProfissoes";
import { caminhoOnda } from "@/lib/ondas";

const ease = [0.16, 1, 0.3, 1] as const;

/** Tinta clara de marcador: lê bem sobre o verde e sobre a foto. */
const tinta = "#FFF3B0";

/** Post-its sobre a foto: posição em % do quadro da imagem; a escrita varia como na referência. */
const notas = [
  {
    texto: "Professores do mercado de trabalho",
    linhas: ["Professores", "do mercado", "de trabalho"],
    posicao: { right: "12%", top: "-12%" },
    giro: 4,
    seta: "baixo-esquerda",
  },
] as const;

type Seta = "baixo" | "baixo-direita" | "baixo-esquerda";

const setas: Record<Seta, { corpo: string; ponta: string; lugar: string }> = {
  baixo: { corpo: "M30 3 C 17 14, 43 27, 28 50", ponta: "M18 41 L28 53 L39 40", lugar: "left-1/2 top-[96%] -translate-x-1/2" },
  "baixo-direita": { corpo: "M5 7 C 21 3, 45 19, 49 50", ponta: "M38 42 L49 54 L57 39", lugar: "left-[62%] top-[96%]" },
  "baixo-esquerda": { corpo: "M55 7 C 39 3, 15 19, 11 50", ponta: "M22 42 L11 54 L3 39", lugar: "right-[58%] top-[104%]" },
};

/** Filtro que "treme" o traço, como tinta feita à mão. Declarado uma vez e reutilizado. */
function FiltroRabisco() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        <filter id="rabisco" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="ruido" />
          <feDisplacementMap in="SourceGraphic" in2="ruido" scale="2.6" />
        </filter>
      </defs>
    </svg>
  );
}

/** Seta rabiscada: dois traços sobrepostos, de espessuras e curvas ligeiramente diferentes. */
function SetaManual({ tipo }: { tipo: Seta }) {
  const { corpo, ponta, lugar } = setas[tipo];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 60"
      fill="none"
      className={`absolute h-14 w-14 ${lugar}`}
      style={{ color: tinta, filter: "url(#rabisco)" }}
    >
      <path d={corpo} stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d={corpo} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" transform="translate(1.2 0.8)" />
      <path d={ponta} stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={ponta} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" transform="translate(-0.8 1)" />
    </svg>
  );
}

/** Círculo desenhado à mão em duas voltas que não se fecham direito, passando por fora do post-it. */
function CirculoManual() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      fill="none"
      className="pointer-events-none absolute -inset-[22%] h-[144%] w-[144%] -rotate-6"
      style={{ color: tinta, filter: "url(#rabisco)" }}
    >
      <path
        d="M104 10 C 162 4, 198 58, 192 112 C 186 170, 142 198, 92 194 C 38 190, 6 150, 10 98 C 14 46, 58 12, 118 14 C 152 16, 178 34, 186 58"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path
        d="M96 18 C 150 12, 190 52, 186 108 C 182 160, 138 190, 94 186 C 46 182, 16 146, 20 100 C 24 54, 62 22, 112 22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

/** Doodles soltos, desenhados com a mesma tinta de marcador e o tremor do filtro. */
const doodles = {
  raios: { vb: "0 0 40 40", d: "M20 4 L20 15 M6 10 L14 17 M34 10 L26 17", fill: false },
  estrela: { vb: "0 0 40 40", d: "M20 4 L24 16 L36 17 L26 25 L30 37 L20 30 L10 37 L14 25 L4 17 L16 16 Z", fill: false },
  coracao: { vb: "0 0 40 40", d: "M20 34 C 6 24, 4 12, 12 9 C 17 7, 20 11, 20 14 C 20 11, 23 7, 28 9 C 36 12, 34 24, 20 34 Z", fill: false },
  espiral: { vb: "0 0 40 40", d: "M20 20 C 20 17, 24 17, 24 21 C 24 27, 15 27, 15 20 C 15 12, 28 11, 30 22 C 32 33, 14 36, 9 24 C 5 12, 18 4, 30 8", fill: false },
  pulso: { vb: "0 0 80 30", d: "M2 16 H22 L28 6 L36 26 L43 12 L48 16 H78", fill: false },
  onda: { vb: "0 0 60 24", d: "M2 12 C 8 2, 14 22, 20 12 S 32 2, 38 12 S 50 22, 58 12", fill: false },
} as const;

function Doodle({ tipo, className }: { tipo: keyof typeof doodles; className?: string }) {
  const { vb, d } = doodles[tipo];
  return (
    <svg
      aria-hidden="true"
      viewBox={vb}
      fill="none"
      className={className}
      style={{ color: tinta, filter: "url(#rabisco)" }}
    >
      <path d={d} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Onde antes ficavam as outras anotações: doodles espalhados para preencher. */
const rabiscosSoltos = [
  { tipo: "estrela", classe: "left-[4%] top-[-17%] h-9 w-9 -rotate-12" },
  { tipo: "coracao", classe: "left-[13%] top-[-9%] h-11 w-11 rotate-6" },
  { tipo: "pulso", classe: "left-[21%] top-[-2%] h-8 w-20 -rotate-3" },
  { tipo: "raios", classe: "left-[9%] top-[-24%] h-9 w-9 -rotate-6" },
  { tipo: "espiral", classe: "left-[37%] top-[-21%] h-12 w-12 rotate-12" },
  { tipo: "onda", classe: "left-[44%] top-[-9%] h-7 w-16 rotate-3" },
  { tipo: "estrela", classe: "left-[54%] top-[-27%] h-7 w-7 rotate-12" },
  { tipo: "raios", classe: "left-[50%] top-[-16%] h-8 w-8 rotate-6" },
] as const;

function PostIt({ nota }: { nota: (typeof notas)[number] }) {
  return (
    <div className="absolute" style={{ ...nota.posicao, rotate: `${nota.giro}deg` }}>
      <CirculoManual />
      <div className="relative z-10 flex flex-col items-center px-3 py-2">
        <p
          className="manuscrito text-center text-[1.2rem] font-bold leading-[1.05] drop-shadow-[0_2px_6px_rgba(6,30,12,0.4)] xl:text-[1.6rem]"
          style={{ color: tinta }}
        >
          {nota.linhas.map((linha, i) => (
            <span key={linha}>
              {i > 0 && <br />}
              {linha}
            </span>
          ))}
        </p>
      </div>
      <SetaManual tipo={nota.seta} />
    </div>
  );
}

const ondas = [
  { y: 70, amplitude: 34, periodo: 360, duracao: 16, opacidade: 0.5, cor: "#4DB60F", espessura: 2.5 },
  { y: 78, amplitude: 22, periodo: 240, duracao: 11, opacidade: 0.35, cor: "#ffffff", espessura: 1.5 },
  { y: 62, amplitude: 46, periodo: 480, duracao: 22, opacidade: 0.22, cor: "#4DB60F", espessura: 1.5 },
  { y: 86, amplitude: 14, periodo: 180, duracao: 8, opacidade: 0.2, cor: "#ffffff", espessura: 1 },
];

function SlideFormacao() {
  return (
    <div className="grao relative isolate flex items-center overflow-hidden bg-[#239C0B] bg-[radial-gradient(40rem_32rem_at_78%_30%,rgba(98,199,33,0.75),transparent_70%),linear-gradient(225deg,#4DB60F_0%,#239C0B_45%,#146B0D_100%)] pb-16 pt-28 text-white lg:min-h-[40rem]">
      {/* Ondas no canto inferior esquerdo: textura e movimento */}
      <svg
        aria-hidden="true"
        viewBox="0 0 960 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-28 w-full max-w-[60rem] md:h-40 lg:h-48"
        style={{ maskImage: "linear-gradient(to right, #000 35%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, #000 35%, transparent 100%)" }}
        fill="none"
      >
        {ondas.map((o, i) => (
          <g
            key={i}
            className="onda"
            style={{ "--deslocamento": `${o.periodo}px`, "--duracao": `${o.duracao}s` } as React.CSSProperties}
          >
            <path
              d={caminhoOnda(o.y, o.amplitude, o.periodo, 960)}
              stroke={o.cor}
              strokeOpacity={o.opacidade}
              strokeWidth={o.espessura}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}
      </svg>

      {/* Desktop: recorte dos alunos ancorado embaixo, à direita */}
      <div
        className="absolute bottom-0 right-0 -z-10 hidden aspect-[4/3] w-[40%] max-w-[44rem] lg:block"
      >
        <Image
          src="/fotos/hero-estudantes.png"
          alt="Alunos da Escola Técnica Irmã Sheila de jaleco e touca"
          fill
          priority
          sizes="40vw"
          className="object-contain object-bottom"
        />
        <FiltroRabisco />
        {notas.map((n) => (
          <PostIt key={n.texto} nota={n} />
        ))}
        {rabiscosSoltos.map((r, i) => (
          <Doodle key={i} tipo={r.tipo} className={`absolute ${r.classe}`} />
        ))}
      </div>

      <div className="container-x relative">
        <div className="max-w-[44rem] lg:max-w-[48%]">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="titulo text-[2.6rem] sm:text-[3.4rem] lg:text-[3.9rem]"
          >
            Seu futuro na área da saúde começa com uma <em className="text-profundo">formação prática.</em>
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
            <Botao href="#cursos" variante="branco">
              Encontre seu curso
            </Botao>
          </motion.div>
        </div>

        {/* Mobile: recorte abaixo do texto, encostado na borda inferior */}
        <div className="relative -mb-16 mx-auto mt-10 aspect-[4/3] w-[92%] max-w-[32rem] lg:hidden">
          <Image
            src="/fotos/hero-estudantes.png"
            alt="Alunos da Escola Técnica Irmã Sheila de jaleco e touca"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}

const slides = [
  { rotulo: "Formação prática", Slide: SlideFormacao },
  { rotulo: "Matrículas abertas", Slide: SlideMatriculas },
  { rotulo: "Escolha sua profissão", Slide: SlideProfissoes },
];

const INTERVALO = 8000;

/** Hero em carrossel: três composições (copy, cores e elementos visuais diferentes) em rotação. */
export default function Hero() {
  const [atual, setAtualBruto] = useState(0);
  const [anterior, setAnterior] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [reduzido, setReduzido] = useState(false);

  const setAtual = (fn: number | ((a: number) => number)) => {
    setAtualBruto((a) => {
      const novo = typeof fn === "function" ? fn(a) : fn;
      if (novo !== a) setAnterior(a);
      return novo;
    });
  };

  useEffect(() => {
    setReduzido(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (pausado || reduzido) return;
    const t = window.setTimeout(() => setAtual((a) => (a + 1) % slides.length), INTERVALO);
    return () => window.clearTimeout(t);
  }, [atual, pausado, reduzido]);

  const ir = (delta: number) => setAtual((a) => (a + delta + slides.length) % slides.length);

  const seta =
    "absolute top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/15 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-institucional lg:flex";

  return (
    <section
      id="hero"
      aria-roledescription="carrossel"
      aria-label="Destaques da escola"
      className="relative text-white"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
    >
      {/* "Empurrar": o slide novo entra empurrando o atual; quem não participa do movimento muda de lugar sem animar */}
      <div className="grid overflow-hidden">
        {slides.map(({ rotulo, Slide }, i) => {
          const posicao = (i - atual + slides.length) % slides.length;
          const x = posicao === 0 ? 0 : posicao === slides.length - 1 ? -100 : 100;
          const anima = i === atual || i === anterior;
          return (
            <div
              key={rotulo}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${slides.length}: ${rotulo}`}
              aria-hidden={i !== atual}
              inert={i !== atual}
              style={{ transform: `translateX(${x}%)` }}
              className={`col-start-1 row-start-1 ${
                anima ? "transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none" : ""
              }`}
            >
              <Slide />
            </div>
          );
        })}
      </div>

      <button type="button" onClick={() => ir(-1)} aria-label="Slide anterior" className={`${seta} left-4 xl:left-8`}>
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => ir(1)} aria-label="Próximo slide" className={`${seta} right-4 xl:right-8`}>
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-2.5">
        {slides.map(({ rotulo }, i) => (
          <button
            key={rotulo}
            type="button"
            onClick={() => setAtual(i)}
            aria-label={`Ir para o slide ${i + 1}: ${rotulo}`}
            aria-current={i === atual}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === atual ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
