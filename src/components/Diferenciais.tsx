import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { diferenciais } from "@/lib/site";

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="fundo-claro relative py-20 md:py-32">
      <div className="container-x">
        <Reveal>
          <h2 className="titulo mx-auto max-w-[44rem] text-center text-[2.3rem] text-institucional sm:text-[3.1rem] lg:text-[3.8rem]">
            Aprenda na prática <em className="text-verde-texto">o que sua profissão vai exigir.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:gap-8">
          {diferenciais.map((item, i) => (
            <Reveal key={item.titulo} delay={(i % 2) * 0.1}>
              <article className="cartao h-full p-3">
                <div className="relative">
                  <FotoSlot src={`/fotos/diferencial-${i + 1}.webp`} alt={item.titulo} className="aspect-[16/9] w-full rounded-[1.4rem]" />
                  <span className="titulo absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-profundo text-lg text-verde-claro shadow-lg">
                    {i + 1}.
                  </span>
                </div>
                <div className="px-4 pb-5 pt-6 md:px-6 md:pb-6">
                  <h3 className="titulo text-[1.55rem] text-institucional md:text-[1.8rem]">{item.titulo}</h3>
                  <p className="mt-3 text-base leading-relaxed text-tinta/75 md:text-[1.0625rem]">{item.texto}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
