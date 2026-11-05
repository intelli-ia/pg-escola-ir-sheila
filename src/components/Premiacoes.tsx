import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { premiacoes } from "@/lib/premiacoes";

export default function Premiacoes() {
  return (
    <section id="premiacoes" className="grao relative isolate overflow-hidden bg-institucional py-20 text-white md:py-32">
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(77,182,15,0.28),transparent)]" />

      <div className="container-x">
        <Reveal>
          <h2 className="titulo mx-auto max-w-[40rem] text-center text-[2.3rem] sm:text-[3.1rem] lg:text-[3.8rem]">
            Nossas <em className="text-verde">premiações</em>
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {premiacoes.map((p, i) => (
            <li key={p.imagem}>
              <Reveal delay={i * 0.07} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white text-tinta">
                  <div className="relative aspect-[4/3] bg-verde-claro">
                    <Image
                      src={p.imagem}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: p.posicao }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <span className="titulo text-[1.5rem] text-verde-texto">{p.ano}</span>
                    <h3 className="titulo text-[1.35rem] leading-[1.15] text-institucional">{p.titulo}</h3>
                    <p className="text-sm leading-relaxed text-tinta/75">{p.emissor}</p>
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
