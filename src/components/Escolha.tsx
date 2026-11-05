import { BookOpenCheck, CalendarClock, MapPin, UsersRound } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { escolhas } from "@/lib/site";

const icones = [BookOpenCheck, UsersRound, CalendarClock, MapPin];

export default function Escolha() {
  return (
    <section id="escolha" className="fundo-suave relative overflow-hidden py-20 md:py-32">
      <div className="container-x">
        {/* 1. Abertura: a ideia em duas frases */}
        <Reveal>
          <h2 className="titulo mx-auto max-w-[56rem] text-center text-[2.3rem] text-institucional sm:text-[3.1rem] lg:text-[3.8rem]">
            Escolher uma profissão é importante.{" "}
            <em className="block text-verde-texto">Escolher onde aprender também.</em>
          </h2>
        </Reveal>

        {/* 2. Os critérios: foto de um lado, quatro pontos do outro */}
        <div className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="cartao h-full p-2">
              <FotoSlot
                src="/fotos/escolha-enfermeira-atendendo-paciente.webp"
                alt="Aula prática de enfermagem"
                className="h-full min-h-[22rem] w-full rounded-[1.4rem] lg:min-h-[32rem]"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg font-bold text-institucional md:text-xl">
                Na Irmã Sheila, essa escolha passa por:
              </p>
            </Reveal>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {escolhas.map((item, i) => {
                const Icone = icones[i];
                return (
                  <li key={item.titulo}>
                    <Reveal delay={(i % 2) * 0.08} className="h-full">
                      <div className="cartao flex h-full flex-col p-6 md:p-7">
                        <div className="flex items-center justify-between">
                          <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-institucional to-profundo text-verde-claro shadow-[0_10px_24px_-10px_rgba(11,58,20,0.8)]">
                            <Icone className="h-5 w-5" strokeWidth={1.6} />
                          </span>
                          <span aria-hidden="true" className="titulo text-[2.4rem] italic leading-none text-verde-texto/40">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="titulo mt-6 text-[1.4rem] leading-tight text-institucional md:text-[1.55rem]">
                          {item.titulo.replace(/:$/, "")}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-tinta/80">{item.texto}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 3. Fechamento com o convite */}
        <Reveal className="mt-14 md:mt-20">
          <div className="grao relative isolate flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-institucional px-7 py-9 text-white md:flex-row md:items-center md:px-12 md:py-11">
            <p className="titulo max-w-[34rem] text-[1.7rem] italic leading-tight md:text-[2.2rem]">
              Seu próximo passo começa com uma escolha bem orientada.
            </p>
            <Botao href="#cursos" variante="branco" className="shrink-0">
              Conheça nossos cursos
            </Botao>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
