import { MapPin } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { IconeWhatsApp } from "@/components/ui/Icones";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsapp } from "@/lib/site";

const mapa =
  "https://www.google.com/maps?q=Avenida+Garcia+d%27%C3%81vila+276+Dias+d%27%C3%81vila+BA+42850-000&output=embed";

export default function Localizacao() {
  return (
    <section id="localizacao" className="pb-20 md:pb-32">
      <div className="container-x">
        <Reveal>
          <div className="grao relative isolate grid gap-8 overflow-hidden rounded-[2rem] bg-profundo p-7 text-white md:p-10 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(77,182,15,0.22),transparent)]" />

            <div className="flex flex-col justify-between gap-8">
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-verde-claro text-institucional">
                  <MapPin className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h2 className="titulo text-[1.9rem] md:text-[2.4rem]">Localização e contato</h2>
                  <p className="mt-2 max-w-md text-white/75">{site.endereco}</p>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Falar no WhatsApp: ${site.telefone}`}
                    className="mt-4 inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-[#25D366]"
                  >
                    <IconeWhatsApp className="h-5 w-5 text-[#25D366]" />
                    {site.telefone}
                  </a>
                </div>
              </div>
              <Botao href={whatsapp} className="w-full sm:w-fit">
                Faça sua Matrícula
              </Botao>
            </div>

            <div className="relative min-h-[20rem] overflow-hidden rounded-[1.5rem] border border-verde/60 lg:min-h-[22rem]">
              <iframe
                title="Mapa — Escola Técnica Irmã Sheila, Dias D’Ávila"
                src={mapa}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 [filter:saturate(0.6)_contrast(1.03)]"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(6,30,12,0.25)]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
