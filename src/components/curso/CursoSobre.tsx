import { CalendarDays, Clock, GraduationCap, MapPin, TrendingUp } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { Reveal } from "@/components/ui/Reveal";
import type { Curso } from "@/lib/cursos";
import { whatsappCurso } from "@/lib/site";

export default function CursoSobre({ curso }: { curso: Curso }) {
  const ficha = [
    {
      icone: Clock,
      rotulo: "Duração",
      valor: curso.cargaHoraria ? `${curso.duracao}. Carga horária de ${curso.cargaHoraria}.` : curso.duracao,
    },
    { icone: CalendarDays, rotulo: "Dias e horários", valor: curso.horarios },
    { icone: MapPin, rotulo: "Modalidade", valor: curso.modalidade },
    { icone: GraduationCap, rotulo: "Quem pode ingressar", valor: curso.ingresso },
  ];

  return (
    <section id="sobre" className="relative pb-20 md:pb-32">
      <div className="container-x">
        {/* Ficha do curso, sobreposta ao hero */}
        <ul className="relative z-10 -mt-16 grid gap-5 md:-mt-20 md:grid-cols-2 lg:grid-cols-4">
          {ficha.map((item, i) => (
            <li key={item.rotulo}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="cartao h-full p-6 [background:#fff] md:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-verde-claro text-institucional">
                    <item.icone className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-verde-texto">{item.rotulo}</p>
                  <p className="mt-1.5 text-base leading-relaxed text-tinta">{item.valor}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Destaque: média salarial da profissão */}
        <Reveal delay={0.1} className="mt-5">
          <div className="flex flex-col gap-4 rounded-[1.75rem] bg-institucional p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-verde">
                <TrendingUp className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-verde">Média salarial</p>
                <p className="titulo mt-1 text-[1.75rem] leading-tight sm:text-[2.25rem]">{curso.salario}</p>
              </div>
            </div>
            <p className="max-w-[24rem] text-sm leading-relaxed text-white/80">
              Valor de referência mensal para a profissão no mercado. Varia conforme região, empregador e experiência.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2 className="titulo text-[2.1rem] text-institucional sm:text-[2.8rem] lg:sticky lg:top-32 lg:text-[3.2rem]">
              Sobre o curso <em className="text-verde-texto">em detalhes.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="space-y-5 text-base leading-relaxed text-tinta/80 md:text-[1.0625rem]">
              {curso.sobre.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Botao href={whatsappCurso(curso.nome)} className="mt-8">
              Falar com a escola
            </Botao>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
