import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { site, whatsapp } from "@/lib/site";

/** Slide 2: fundo escuro, selo vermelho de destaque e foto em moldura arredondada com cartão de número. */
export default function SlideMatriculas() {
  return (
    <div className="grao relative isolate flex items-center overflow-hidden bg-profundo pb-20 pt-28 text-white lg:min-h-[40rem] lg:pb-16">
      <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[44rem] w-[44rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(77,182,15,0.35),transparent)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(20,107,13,0.7),transparent)]" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-vermelho px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            Matrículas abertas
          </span>
          <h2 className="titulo mt-6 text-[2.5rem] sm:text-[3.2rem] lg:text-[3.9rem]">
            Sua vaga na saúde <em className="text-verde">está esperando.</em>
          </h2>
          <p className="mt-6 max-w-[32rem] text-base leading-relaxed text-white/80 md:text-lg">
            Cursos técnicos, qualificação e especialização em {site.cidade}, com turmas durante a semana ou aos sábados.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Botao href={whatsapp} variante="branco">
              Faça sua Matrícula
            </Botao>
            <Botao href="#cursos" variante="contorno" externo={false}>
              Ver os cursos
            </Botao>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:max-w-none lg:pl-10">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] ring-1 ring-white/20 lg:rotate-[1.5deg]">
            <Image
              src="/527357996_18084468049873418_873558313026449093_n.webp"
              alt="Alunos de jaleco e touca no laboratório da escola"
              fill
              sizes="(min-width: 1024px) 46vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-profundo/50 to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-3 text-institucional shadow-xl sm:left-0 lg:-left-2">
            <p className="titulo text-[2rem] leading-none">+5 mil</p>
            <p className="mt-1 text-xs font-semibold text-tinta/70">alunos formados desde 1996</p>
          </div>
        </div>
      </div>
    </div>
  );
}
