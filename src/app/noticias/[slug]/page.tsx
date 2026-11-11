import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { Reveal } from "@/components/ui/Reveal";
import { caminhoDaNoticia, noticiaPorSlug, noticias } from "@/lib/noticias";
import { site, whatsapp } from "@/lib/site";

/** Largura de cada foto da galeria conforme a quantidade (gap de 1.25rem no desktop). */
function larguraGaleria(total: number) {
  if (total === 1) return "max-w-[32rem]";
  if (total === 2) return "sm:w-[calc((100%-0.75rem)/2)] md:w-[calc((100%-1.25rem)/2)]";
  return "sm:w-[calc((100%-0.75rem)/2)] md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]";
}

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return noticias.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const noticia = noticiaPorSlug(slug);
  if (!noticia) return {};
  return {
    title: `${noticia.titulo} | ${site.nome}`,
    description: noticia.texto[0],
  };
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;
  const noticia = noticiaPorSlug(slug);
  if (!noticia) notFound();

  const outras = noticias.filter((n) => n.slug !== noticia.slug);

  return (
    <>
      <section className="grao relative isolate overflow-hidden bg-profundo pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(20,107,13,0.55),transparent)]" />
        <div className="container-x grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <nav aria-label="Você está em" className="flex flex-wrap items-center gap-1.5 text-sm text-white/65">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/#noticias" className="transition-colors hover:text-white">
                Notícias
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="line-clamp-1 text-white/90">{noticia.titulo}</span>
            </nav>

            <span className="mt-8 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-institucional">
              {noticia.categoria}
            </span>
            <h1 className="titulo mt-6 text-[2.4rem] sm:text-[3.2rem] lg:text-[3.6rem]">{noticia.titulo}</h1>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] ring-1 ring-white/15">
              <Image
                src={noticia.imagem}
                alt={noticia.titulo}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-[44rem] space-y-6 text-lg leading-relaxed text-tinta/85">
              {noticia.texto.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <h2 className="titulo mt-16 text-center text-[2rem] text-institucional md:mt-24 md:text-[2.6rem]">
            Galeria de <em className="text-verde-texto">fotos</em>
          </h2>
          {/* Galeria: 1 foto centralizada; 2 lado a lado; 3 ou mais em linhas de até 3 (a última linha fica centralizada).
              Cada foto mantém a proporção original, sem corte nem zoom. */}
          <ul className="mt-10 flex flex-wrap items-start justify-center gap-3 md:gap-5">
            {noticia.galeria.map((src, i) => (
              <li key={src + i} className={`w-full overflow-hidden rounded-[1.25rem] bg-verde-claro ${larguraGaleria(noticia.galeria.length)}`}>
                <Image
                  src={src}
                  alt={`${noticia.titulo}, foto ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="block h-auto w-full"
                />
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Botao href={whatsapp}>Quero me matricular</Botao>
          </div>
        </div>
      </article>

      {outras.length > 0 && (
        <section className="fundo-suave py-16 md:py-24">
          <div className="container-x">
            <h2 className="titulo text-center text-[2rem] text-institucional md:text-[2.6rem]">Outras notícias</h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {outras.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={caminhoDaNoticia(n.slug)}
                    className="group relative isolate block aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-profundo"
                  >
                    <Image src={n.imagem} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-profundo via-profundo/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="titulo text-[1.4rem] leading-[1.15] text-white">{n.titulo}</h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
