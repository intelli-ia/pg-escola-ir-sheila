import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { caminhoDoCurso, cursos } from "@/lib/cursos";

export default function OutrosCursos({ atual }: { atual: string }) {
  const outros = cursos.filter((c) => c.slug !== atual);
  return (
    <section id="outros-cursos" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <h2 className="titulo max-w-[40rem] text-[2.1rem] text-institucional sm:text-[2.8rem] lg:text-[3.2rem]">
            Conheça também <em className="text-verde-texto">outros cursos.</em>
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outros.map((c, i) => (
            <li key={c.slug}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <Link
                  href={caminhoDoCurso(c.slug)}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-verde-linha bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-verde"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-verde-claro text-institucional">
                    <c.icone className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="flex-1 font-semibold leading-snug text-institucional">{c.nome}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-verde-texto transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
