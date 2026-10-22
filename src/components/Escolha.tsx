import { BookOpenCheck, CalendarClock, MapPin, UsersRound } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { escolhas } from "@/lib/site";

const icones = [BookOpenCheck, UsersRound, CalendarClock, MapPin];

export default function Escolha() {
  return (
    <section id="escolha" className="fundo-menta relative overflow-hidden py-20 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="titulo text-[2.2rem] text-petroleo sm:text-[2.9rem] lg:text-[3.4rem]">
              Escolher uma profissão é importante. <em className="text-coral">Escolher onde aprender também.</em>
            </h2>
            <p className="mt-7 max-w-[32rem] text-base leading-relaxed text-tinta/80 md:text-lg">
              Seja para começar sua vida profissional, mudar de área ou se especializar, você precisa de uma
              formação que prepare você para a prática e tenha espaço na sua rotina.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="cartao p-2">
              <FotoSlot src="/fotos/escolha.webp" alt="Aula prática de enfermagem" className="aspect-[4/3] w-full rounded-[1.4rem]" />
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-lg font-bold text-petroleo md:text-xl">Na Irmã Sheila, essa escolha passa por:</p>
          </Reveal>

          <ul className="mt-6 space-y-4">
            {escolhas.map((item, i) => {
              const Icone = icones[i];
              return (
                <li key={item.titulo}>
                  <Reveal delay={i * 0.08}>
                    <div className="cartao flex items-start gap-5 p-6 md:gap-6 md:p-7">
                      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-petroleo-claro to-petroleo text-menta shadow-[0_10px_24px_-10px_rgba(11,59,63,0.8)]">
                        <Icone className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <p className="pt-1 text-base leading-relaxed text-tinta/80 md:text-[1.0625rem]">
                        <strong className="font-bold text-petroleo">{item.titulo}</strong> {item.texto}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal delay={0.1}>
            <p className="titulo mt-12 text-[1.6rem] italic text-petroleo md:text-[1.9rem]">
              Seu próximo passo começa com uma escolha bem orientada.
            </p>
            <div className="mt-8">
              <Botao href="#cursos">Conheça nossos cursos</Botao>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
