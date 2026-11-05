import Image from "next/image";
import Link from "next/link";
import { caminhoDoCurso, cursos } from "@/lib/cursos";

const colagem = [
  { src: "/626776562_18324200122216130_994093021423880570_n.jpg", alt: "Alunos de jaleco em atividade prática", classe: "left-[0%] top-[2%] w-[56%] -rotate-3" },
  { src: "/657213022_18116417677632211_2727796566358346084_n.jpg", alt: "Turma reunida em celebração", classe: "right-[0%] top-[0%] w-[54%] rotate-2" },
  { src: "/624555923_18042538325718518_1323309829741122500_n.jpg", alt: "Equipe e alunos da escola em ação social", classe: "left-[20%] bottom-[0%] w-[58%] rotate-1" },
] as const;

/** Slide 3: verde institucional, pergunta direta, atalhos para os cursos e colagem de fotos inclinadas. */
export default function SlideProfissoes() {
  return (
    <div className="grao relative isolate flex items-center overflow-hidden bg-institucional bg-gradient-to-br from-institucional via-[#0f5a0a] to-profundo pb-20 pt-28 text-white lg:min-h-[40rem] lg:pb-16">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full border border-verde/30" />
      <div className="pointer-events-none absolute -left-10 top-24 -z-10 h-72 w-72 rounded-full border border-verde/20" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-verde">Cursos na área da saúde</p>
          <h2 className="titulo mt-4 text-[2.5rem] sm:text-[3.2rem] lg:text-[3.9rem]">
            Qual profissão <em className="text-verde">combina com você?</em>
          </h2>
          <ul className="mt-8 flex max-w-[40rem] flex-wrap gap-2.5">
            {cursos.map((c) => (
              <li key={c.slug}>
                <Link
                  href={caminhoDoCurso(c.slug)}
                  className="inline-flex rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-institucional"
                >
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto hidden aspect-[5/4] w-full max-w-[34rem] lg:col-span-6 lg:block lg:max-w-none">
          {colagem.map((f) => (
            <div
              key={f.src}
              className={`absolute aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white shadow-2xl ${f.classe}`}
            >
              <Image src={f.src} alt={f.alt} fill sizes="32vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
