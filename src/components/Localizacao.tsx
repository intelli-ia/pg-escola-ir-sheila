import { MapPin } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsapp } from "@/lib/site";

const mapa =
  "https://www.google.com/maps?q=Avenida+Garcia+d%27%C3%81vila+276+Dias+d%27%C3%81vila+BA+42850-000&output=embed";

function IconeWhatsApp({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

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
