import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { caminhoDaNoticia, noticias } from "@/lib/noticias";

export default function Noticias() {
  return (
    <section id="noticias" className="relative bg-white py-20 md:py-32">
      <div className="container-x">
        <Reveal>
          <h2 className="titulo mx-auto max-w-[40rem] text-center text-[2.3rem] text-institucional sm:text-[3.1rem] lg:text-[3.8rem]">
            Últimas <em className="text-verde-texto">notícias</em>
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {noticias.map((n, i) => {
            const conteudo = (
              <>
                <Image
                  src={n.imagem}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-profundo via-profundo/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-institucional">
                    {n.categoria}
                  </span>
                  <h3 className="titulo text-[1.5rem] leading-[1.15] text-white">{n.titulo}</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    Ver mais <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </>
            );
            return (
              <li key={n.slug}>
                <Reveal delay={i * 0.07}>
                  <Link
                    href={caminhoDaNoticia(n.slug)}
                    className="group relative isolate block aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-profundo"
                  >
                    {conteudo}
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
