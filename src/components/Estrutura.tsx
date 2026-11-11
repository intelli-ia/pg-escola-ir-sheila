import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";

const quadros = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "",
  "md:col-span-2",
  "md:col-span-2",
];

const fotos = [
  { src: "/fotos/escola/laboratorios/pratica-cuidado-paciente-simulador-leito.jpg", alt: "Laboratório de práticas com simulador de leito" },
  { src: "/fotos/estrutura-sala-de-aula-carteiras.webp", alt: "Sala de aula" },
  { src: "/fotos/estrutura-laboratorio-informatica.webp", alt: "Laboratório de informática" },
  { src: "/fotos/estrutura-biblioteca-estantes.webp", alt: "Biblioteca" },
  { src: "/fotos/escola/laboratorios/pratica-neonatal-simulador-bebe.jpg", alt: "Laboratório de práticas neonatais" },
  { src: "/fotos/estrutura-fachada-muro-cursos.webp", alt: "Fachada da escola" },
  { src: "/fotos/escola/laboratorios/laboratorio-farmacia-turma-medicamentos.jpg", alt: "Laboratório de farmácia" },
];

export default function Estrutura() {
  return (
    <section id="estrutura" className="relative pb-12 pt-20 md:pb-16 md:pt-32">
      <div className="container-x">
        <Reveal>
          <h2 className="titulo text-[2.3rem] text-institucional sm:text-[3.1rem] lg:text-[3.8rem]">
            Estrutura da <em className="text-verde-texto">escola</em>
          </h2>
          <p className="mt-6 max-w-[46rem] text-base leading-relaxed text-tinta/80 md:text-lg">
            A Escola Técnica Irmã Sheila reúne a infraestrutura necessária para uma formação técnica de qualidade:
            salas de aula, laboratório de informática, biblioteca e ambientes de prática, organizados para o
            desenvolvimento das competências exigidas em cada curso e em conformidade com as diretrizes da educação
            profissional.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(0,15rem))]">
          {quadros.map((classe, i) => (
            <Reveal key={i} delay={i * 0.07} className={classe}>
              <div className="cartao h-full p-2">
                <FotoSlot src={fotos[i].src} alt={fotos[i].alt} className="aspect-[4/3] h-full w-full rounded-[1.35rem] md:aspect-auto" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
