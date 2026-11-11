import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/** Marcos da história, conforme o ato de criação da escola. */
const marcos = [
  { ano: "1996", texto: "Início das atividades em Mata de São João, com o curso de Auxiliar de Enfermagem." },
  { ano: "1999", texto: "Início do Técnico em Enfermagem e da Especialização em Enfermagem do Trabalho." },
  { ano: "2004", texto: "Mudança para a sede atual, em Dias d’Ávila." },
  { ano: "2007", texto: "Início dos cursos de Nutrição e Dietética e de Segurança do Trabalho." },
  { ano: "2010", texto: "Início dos cursos de Radiologia e Análises Clínicas." },
] as const;

export default function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="text-center lg:text-left">
              <Image
                src="/logo-irma-sheila.webp"
                alt="Logo da Escola Técnica Irmã Sheila"
                width={320}
                height={320}
                className="mx-auto h-[13rem] w-[13rem] rounded-full object-cover shadow-xl ring-1 ring-institucional/10 sm:h-[16rem] sm:w-[16rem] lg:mx-0 lg:h-[19rem] lg:w-[19rem]"
              />
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-verde-texto">
                Formando profissionais da saúde desde 1996
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <h2 className="titulo text-center text-[2rem] text-institucional sm:text-[2.6rem] lg:text-left lg:text-[3rem]">
              Por que o nome <em className="text-verde-texto">Irmã Sheila?</em>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-tinta/80 md:text-lg">
              <p>
                A Escola Técnica Irmã Sheila nasceu de um sonho antigo da enfermeira Mônica Passos de Góes, que atua na
                área da educação desde 1994 e sempre quis ter a sua própria escola. O sonho começou a se concretizar em
                1996, e as atividades tiveram início em 13 de novembro daquele ano, em Mata de São João, com o curso de
                Auxiliar de Enfermagem.
              </p>
              <p>
                O nome é uma homenagem à freira e enfermeira alemã Irmã Sheila que, segundo a história contada pela
                escola, atuou na Segunda Guerra Mundial cuidando de feridos e de órfãos na Crimeia e faleceu em Hamburgo,
                em 1943. Ao dar esse nome à instituição, a fundadora quis honrar uma vida dedicada ao cuidado com o
                próximo, valor que orienta a formação dos alunos até hoje.
              </p>
              <p>
                Em 2004, a escola passou a funcionar na sede atual, em Dias d’Ávila, e desde então ampliou a oferta de
                cursos. Ao longo de três décadas, formou mais de 5 mil profissionais da saúde.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Linha do tempo: vertical no mobile, horizontal no desktop */}
        <ol className="relative mt-16 grid gap-9 md:mt-24 lg:grid-cols-5 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[0.4rem] top-3 w-px bg-verde-linha lg:bottom-auto lg:left-0 lg:right-0 lg:top-[0.4rem] lg:h-px lg:w-auto"
          />
          {marcos.map((m, i) => (
            <li key={m.ano} className="relative pl-9 lg:pl-0 lg:pt-9">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.55rem] h-3.5 w-3.5 rounded-full bg-verde ring-4 ring-white lg:top-0"
              />
              <Reveal delay={i * 0.06}>
                <p className="titulo text-[2rem] leading-none text-institucional">{m.ano}</p>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-tinta/80">{m.texto}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
