import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { Reveal } from "@/components/ui/Reveal";
import { whatsapp } from "@/lib/site";

export default function CtaMatricula() {
  return (
    <section
      id="matricula"
      className="grao relative isolate overflow-hidden bg-[#239C0B] bg-[radial-gradient(40rem_24rem_at_50%_0%,rgba(98,199,33,0.7),transparent_70%),linear-gradient(180deg,#239C0B_0%,#146B0D_100%)] py-20 text-center text-white md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full border border-white/15" />
      <div className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full border border-white/15" />

      <div className="container-x">
        <Reveal>
          <Image
            src="/logo.webp"
            alt="Logo da Escola Técnica Irmã Sheila"
            width={88}
            height={88}
            className="mx-auto mb-6 h-[5.5rem] w-[5.5rem] rounded-full object-cover ring-4 ring-white/30"
          />
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Matrículas abertas</p>
          <h2 className="titulo mx-auto mt-4 max-w-[46rem] text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem]">
            Sua carreira na saúde <em className="text-profundo">começa com uma conversa.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[34rem] text-base leading-relaxed text-white/85 md:text-lg">
            Fale com nossa equipe pelo WhatsApp, conheça os cursos, os horários e os requisitos, e garanta sua vaga.
          </p>
          <div className="mt-10 flex justify-center">
            <Botao href={whatsapp} variante="branco">
              Faça sua Matrícula
            </Botao>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
