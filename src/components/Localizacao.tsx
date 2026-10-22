import { MapPin } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsapp } from "@/lib/site";

export default function Localizacao() {
  return (
    <section id="localizacao" className="pb-20 md:pb-32">
      <div className="container-x">
        <Reveal>
          <div className="grao relative isolate flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-petroleo px-7 py-10 text-white md:flex-row md:items-center md:px-14 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(232,98,63,0.22),transparent)]" />
            <div className="flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-menta text-petroleo">
                <MapPin className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div>
                <h2 className="titulo text-[1.9rem] md:text-[2.4rem]">Localização e contato</h2>
                <p className="mt-1 text-white/75">{site.cidade}</p>
              </div>
            </div>
            <Botao href={whatsapp}>Faça sua Matrícula</Botao>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
