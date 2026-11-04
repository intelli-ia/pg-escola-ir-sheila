import Link from "next/link";
import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { caminhoDoCurso, cursos } from "@/lib/cursos";
import { imagemDoCurso } from "@/lib/imagens";
import { cn } from "@/lib/utils";

/** Até 4 colunas no desktop e 2 no tablet; a última fileira incompleta fica centralizada. */
const inicioDesktop = { 1: "lg:col-start-4", 2: "lg:col-start-3", 3: "lg:col-start-2" } as const;

function posicaoUltimaFileira(i: number) {
  const total = cursos.length;
  const ultimaPar = total % 2 === 1 && i === total - 1 ? "sm:col-start-2 lg:col-start-auto" : "";
  const resto = (total % 4) as 0 | 1 | 2 | 3;
  const primeiroDaUltima = resto !== 0 && i === total - resto ? inicioDesktop[resto] : "";
  return cn(ultimaPar, primeiroDaUltima);
}

export default function Cursos() {
  return (
    <section
      id="cursos"
      className="relative py-20 md:py-32"
    >

      <div className="container-x relative">
        <Reveal>
          <h2 className="titulo mx-auto max-w-[40rem] text-center text-[2.4rem] text-institucional sm:text-[3.2rem] lg:text-[3.8rem]">
            Encontre o curso para o seu <em className="text-verde-texto">próximo passo.</em>
          </h2>
        </Reveal>

        <ul className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-4 md:mt-16 lg:grid-cols-8">
          {cursos.map((curso, i) => (
            <li key={curso.slug} className={cn("sm:col-span-2", posicaoUltimaFileira(i))}>
              <Reveal delay={(i % 4) * 0.07} className="h-full">
                <article className="group relative isolate flex h-full min-h-[27rem] flex-col overflow-hidden rounded-[1.75rem] text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
                  {/* Imagem: ocupa o card até o início do título */}
                  <div className="relative min-h-[14rem] flex-1 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                      <FotoSlot
                        escuro
                        src={imagemDoCurso(curso.slug)}
                        alt={curso.nome}
                        className="h-full w-full rounded-none ring-0"
                      />
                    </div>
                  </div>

                  {/* Base verde com título e botão */}
                  <div className="relative z-10 -mt-7 flex flex-col items-start gap-5 rounded-t-[1.75rem] bg-institucional p-6 pt-7">
                    <h3 className="titulo text-[1.5rem] leading-[1.15]">
                      {curso.tituloCard ? (
                        <>
                          <span className="sr-only">{curso.nome}</span>
                          <span aria-hidden="true">
                            {curso.tituloCard.map((linha, n) => (
                              <span key={linha}>
                                {n > 0 && <br />}
                                {linha}
                              </span>
                            ))}
                          </span>
                        </>
                      ) : (
                        curso.nome
                      )}
                    </h3>
                    <Link
                      href={caminhoDoCurso(curso.slug)}
                      className="inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-institucional transition-colors duration-300 hover:bg-verde-claro"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
