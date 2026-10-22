import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  Apple,
  FlaskConical,
  HardHat,
  HeartPulse,
  Pill,
  ScanLine,
  Scissors,
} from "lucide-react";
import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { cursos, whatsappCurso } from "@/lib/site";

/** Arquivos esperados em public/cursos/ (jpg, jpeg, png ou webp), na mesma ordem dos cursos. */
const slugs = [
  "enfermagem",
  "radiologia",
  "analises-clinicas",
  "nutricao-dietetica",
  "saude-do-trabalhador",
  "atendente-de-farmacia",
  "instrumentacao-cirurgica",
];

function imagemDoCurso(slug: string) {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (existsSync(join(process.cwd(), "public", "cursos", `${slug}.${ext}`))) return `/cursos/${slug}.${ext}`;
  }
  return undefined;
}

const icones = [HeartPulse, ScanLine, FlaskConical, Apple, HardHat, Pill, Scissors];

export default function Cursos() {
  return (
    <section
      id="cursos"
      className="grao relative overflow-hidden bg-petroleo-escuro py-20 text-white md:py-32"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(27,94,95,0.4),transparent)]" />

      <div className="container-x relative">
        <Reveal>
          <h2 className="titulo mx-auto max-w-[40rem] text-center text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem]">
            Encontre o curso para o seu <em className="text-menta">próximo passo.</em>
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-12">
          {cursos.map((curso, i) => {
            const Icone = icones[i];
            return (
              <li key={curso} className={i < 4 ? "lg:col-span-3" : i === 6 ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-4"}>
                <Reveal delay={(i % 4) * 0.07} className="h-full">
                  <article className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-coral/60 hover:bg-white/[0.07]">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-coral/0 blur-3xl transition-colors duration-500 group-hover:bg-coral/25" />
                    <div>
                      <div className="relative">
                        <FotoSlot escuro src={imagemDoCurso(slugs[i])} alt={curso} className="aspect-[16/10] w-full rounded-[1.1rem]" />
                        <span className="absolute -bottom-6 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-menta text-petroleo shadow-lg">
                          <Icone className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                      </div>
                      <h3 className="titulo mt-8 text-[1.5rem] leading-[1.15]">{curso}</h3>
                    </div>
                    <a
                      href={whatsappCurso(curso)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 group-hover:border-coral group-hover:bg-coral"
                    >
                      Saiba mais
                    </a>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
