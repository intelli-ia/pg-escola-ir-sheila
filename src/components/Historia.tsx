import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
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
              Desde 1996, a Escola Técnica Irmã Sheila forma profissionais da saúde em {site.cidade}. Ao longo de três
              décadas, a escola construiu sua trajetória com compromisso com o ensino técnico, o cuidado com as pessoas e
              a preparação dos alunos para o mercado de trabalho.
            </p>
            <p>
              O nome da escola carrega essa história. Texto provisório: contar quem foi Irmã Sheila e por que a escola
              leva o nome dela, a ser fornecido pela direção.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
