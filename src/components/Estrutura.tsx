import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";

const quadros = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:col-span-2",
];

const alts = ["Sala de aula", "Laboratório de informática", "Biblioteca", "Fachada da escola"];

export default function Estrutura() {
  return (
    <section id="estrutura" className="relative pb-12 pt-20 md:pb-16 md:pt-32">
      <div className="container-x">
        <Reveal>
          <h2 className="titulo text-[2.3rem] text-petroleo sm:text-[3.1rem] lg:text-[3.8rem]">
            Estrutura da <em className="text-coral">escola</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-4 md:grid-rows-[repeat(2,minmax(0,15rem))]">
          {quadros.map((classe, i) => (
            <Reveal key={i} delay={i * 0.07} className={classe}>
              <div className="cartao h-full p-2">
                <FotoSlot src={`/fotos/espaco-${i + 1}.webp`} alt={alts[i]} className="aspect-[4/3] h-full w-full rounded-[1.35rem] md:aspect-auto" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
