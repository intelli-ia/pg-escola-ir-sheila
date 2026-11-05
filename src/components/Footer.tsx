import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { IconeInstagram, IconeWhatsApp } from "@/components/ui/Icones";
import { Marca } from "@/components/ui/Marca";
import { caminhoDoCurso, cursos } from "@/lib/cursos";
import { redes, site, whatsapp } from "@/lib/site";

const secoes = [
  { href: "/#cursos", rotulo: "Cursos" },
  { href: "/#diferenciais", rotulo: "Diferenciais" },
  { href: "/#estrutura", rotulo: "Estrutura da escola" },
  { href: "/#depoimentos", rotulo: "Depoimentos" },
  { href: "/#noticias", rotulo: "Notícias" },
  { href: "/#localizacao", rotulo: "Localização e contato" },
  { href: "/#faq", rotulo: "Perguntas frequentes" },
] as const;

const sociais = [
  { rotulo: "Instagram", href: redes.instagram, Icone: IconeInstagram },
  { rotulo: "WhatsApp", href: whatsapp, Icone: IconeWhatsApp },
] as const;

const titulo = "text-xs font-semibold uppercase tracking-[0.18em] text-verde";
const link = "text-sm text-white/70 transition-colors duration-300 hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-profundo text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Marca />
          <p className="mt-5 max-w-[22rem] text-sm leading-relaxed text-white/65">
            Formação técnica e profissionalizante na área da saúde, em {site.cidade}.
          </p>
          <ul className="mt-6 flex items-center gap-2.5">
            {sociais.map(({ rotulo, href, Icone }) => (
              <li key={rotulo}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rotulo}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors duration-300 hover:border-white hover:bg-white hover:text-institucional"
                >
                  <Icone className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Seções do site" className="lg:col-span-2">
          <h2 className={titulo}>Navegue</h2>
          <ul className="mt-5 space-y-3">
            {secoes.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={link}>
                  {s.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Cursos" className="lg:col-span-3">
          <h2 className={titulo}>Cursos</h2>
          <ul className="mt-5 space-y-3">
            {cursos.map((c) => (
              <li key={c.slug}>
                <Link href={caminhoDoCurso(c.slug)} className={link}>
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={titulo}>Contato</h2>
          <address className="mt-5 space-y-4 text-sm not-italic text-white/70">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-verde" />
              {site.endereco}
            </p>
            <p>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-verde" />
                {site.telefone}
              </a>
            </p>
          </address>
          <Botao href={whatsapp} tamanho="sm" variante="branco" className="mt-6">
            Faça sua Matrícula
          </Botao>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </p>
          <p>
            {site.endereco.split(" - ").slice(-2).join(" - ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
