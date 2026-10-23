import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { depoimentos } from "@/lib/depoimentos";

function Cartao({ nome, texto }: (typeof depoimentos)[number]) {
  return (
    <figure className="cartao flex h-full w-[19rem] shrink-0 flex-col gap-5 p-7 sm:w-[24rem] md:p-8">
      <Quote className="h-9 w-9 shrink-0 text-coral/70" strokeWidth={1.3} />
      <blockquote className="space-y-3 text-[0.95rem] leading-relaxed text-tinta/85">
        {texto.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </blockquote>
      <figcaption className="mt-auto border-t border-petroleo/10 pt-5 font-semibold text-petroleo">
        {nome}
      </figcaption>
    </figure>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="fundo-claro relative py-20 md:py-32">
      <div className="container-x">
        <Reveal>
          <h2 className="titulo text-[2.3rem] text-petroleo sm:text-[3.1rem] lg:text-[3.8rem]">
            Depoimentos
          </h2>
        </Reveal>
      </div>

      <div
        className="depoimentos-faixa mt-12 overflow-hidden motion-reduce:overflow-x-auto md:mt-16"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
        }}
      >
        <div className="depoimentos-trilho flex w-max items-stretch gap-6 px-3 py-2">
          {[0, 1].map((copia) =>
            depoimentos.map((d) => (
              <div
                key={`${copia}-${d.nome}`}
                aria-hidden={copia === 1 ? true : undefined}
                className="flex"
              >
                <Cartao {...d} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
