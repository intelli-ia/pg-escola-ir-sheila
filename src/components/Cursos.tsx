import Link from "next/link";
import { Carrossel } from "@/components/ui/Carrossel";
import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { caminhoDoCurso, cursos } from "@/lib/cursos";
import { imagemDoCurso } from "@/lib/imagens";

export default function Cursos() {
  return (
    <section id="cursos" className="relative pb-20 pt-10 md:pb-32 md:pt-14">
      <div className="container-x relative">
        <Reveal y={10}>
          <h2 className="titulo mx-auto max-w-[40rem] text-center text-[2.4rem] text-institucional sm:text-[3.2rem] lg:text-[3.8rem]">
            Encontre o curso para o seu <em className="text-verde-texto">próximo passo.</em>
          </h2>
        </Reveal>
      </div>

      <Carrossel rotulo="Cursos">
          {cursos.map((curso) => (
            <li
              key={curso.slug}
              className="w-[calc(var(--conteudo)*0.82)] shrink-0 snap-start sm:w-[calc((var(--conteudo)-1.25rem)/2)] lg:w-[calc((var(--conteudo)-3.75rem)/4)]"
            >
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
            </li>
          ))}
      </Carrossel>
    </section>
  );
}
