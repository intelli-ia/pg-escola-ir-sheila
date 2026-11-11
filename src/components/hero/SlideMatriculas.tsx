import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { site, whatsapp } from "@/lib/site";

/** Slide 2: fundo escuro, selo vermelho de destaque e foto em moldura arredondada com cartão de número. */
export default function SlideMatriculas() {
  return (
    <div className="grao relative isolate flex items-center overflow-hidden bg-profundo pb-16 pt-24 text-white max-sm:h-svh max-sm:min-h-[34rem] sm:pb-20 sm:pt-28 lg:h-[40rem] lg:pb-16">
      <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[44rem] w-[44rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(77,182,15,0.35),transparent)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(20,107,13,0.7),transparent)]" />

      <div className="container-x grid items-center gap-6 sm:gap-10 lg:grid-cols-12">
        <div className="text-center lg:col-span-6 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-vermelho px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            Matrículas abertas
          </span>
          <h2 className="titulo mt-4 text-[2.35rem] sm:mt-6 sm:text-[3.8rem] lg:text-[4.2rem]">
            Sua vaga na saúde <em className="text-verde">está esperando.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[32rem] text-[0.9rem] leading-relaxed text-white/80 sm:mt-6 sm:text-base md:text-lg lg:mx-0">
            Cursos técnicos, qualificação e especialização em {site.cidade}, com turmas durante a semana ou aos sábados.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-9 lg:justify-start">
            <Botao href={whatsapp} variante="branco" className="max-sm:px-5 max-sm:py-3 max-sm:text-sm">
              Faça sua Matrícula
            </Botao>
            <Botao href="#cursos" variante="contorno" externo={false} className="max-sm:px-5 max-sm:py-3 max-sm:text-sm">
              Ver os cursos
            </Botao>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:max-w-none lg:pl-10">
          <div className="relative aspect-[2/1] overflow-hidden sm:aspect-[16/11] rounded-[2rem] ring-1 ring-white/20 lg:rotate-[1.5deg]">
            <Image
              src="/fotos/escola/turmas/turma-jaleco-touca-proximo.jpg"
              alt="Turma da Escola Técnica Irmã Sheila de jaleco e touca"
              fill
              sizes="(min-width: 1024px) 46vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-profundo/50 to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-xl bg-white px-3.5 py-2 text-institucional sm:rounded-2xl sm:px-5 sm:py-3 shadow-xl sm:left-0 lg:-left-2">
            <p className="titulo text-[1.4rem] leading-none sm:text-[2rem]">+5 mil</p>
            <p className="mt-1 text-[0.65rem] font-semibold text-tinta/70 sm:text-xs">alunos formados desde 1996</p>
          </div>
        </div>
      </div>
    </div>
  );
}
