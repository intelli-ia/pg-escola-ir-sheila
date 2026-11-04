import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { FotoSlot } from "@/components/ui/FotoSlot";
import type { Curso } from "@/lib/cursos";
import { whatsappCurso } from "@/lib/site";

export default function CursoHero({ curso, imagem }: { curso: Curso; imagem?: string }) {
  const Icone = curso.icone;
  return (
    <section
      id="hero"
      className="grao relative isolate overflow-hidden bg-profundo pb-28 pt-32 text-white md:pb-36 md:pt-40"
    >
      <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(20,107,13,0.55),transparent)]" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(77,182,15,0.12),transparent)]" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <nav aria-label="Você está em" className="flex flex-wrap items-center gap-1.5 text-sm text-white/65">
            <Link href="/" className="transition-colors hover:text-white">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#cursos" className="transition-colors hover:text-white">
              Cursos
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/90">{curso.nome}</span>
          </nav>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-verde ring-1 ring-white/15">
            <Icone className="h-4 w-4" strokeWidth={1.8} />
            {curso.tipo}
          </span>

          <h1 className="titulo mt-6 text-[2.5rem] sm:text-[3.2rem] lg:text-[4rem]">{curso.nome}</h1>

          <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-white/80 md:text-lg">{curso.resumo}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Botao href={whatsappCurso(curso.nome)}>Quero me matricular</Botao>
            <Botao href="/#cursos" variante="contorno" externo={false}>
              Ver todos os cursos
            </Botao>
          </div>
        </div>

        <div className="lg:col-span-5">
          <FotoSlot escuro src={imagem} alt={curso.nome} className="aspect-[4/3] w-full rounded-[2rem]" />
        </div>
      </div>
    </section>
  );
}
