import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaMatricula from "@/components/CtaMatricula";
import CursoHero from "@/components/curso/CursoHero";
import CursoSobre from "@/components/curso/CursoSobre";
import OutrosCursos from "@/components/curso/OutrosCursos";
import Diferenciais from "@/components/Diferenciais";
import Estrutura from "@/components/Estrutura";
import Localizacao from "@/components/Localizacao";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import { cursoPorSlug, cursos } from "@/lib/cursos";
import { imagemDoCurso } from "@/lib/imagens";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const curso = cursoPorSlug(slug);
  if (!curso) return {};
  return {
    title: `${curso.nome} | ${site.nome}`,
    description: `${curso.resumo} Conheça o curso na ${site.nome}, em ${site.cidade}.`,
  };
}

export default async function CursoPage({ params }: Props) {
  const { slug } = await params;
  const curso = cursoPorSlug(slug);
  if (!curso) notFound();

  return (
    <>
      <CursoHero curso={curso} imagem={imagemDoCurso(curso.slug)} />
      <CursoSobre curso={curso} />
      <Diferenciais />
      <div className="fundo-suave">
        <Estrutura />
        <Localizacao />
      </div>
      <Depoimentos />
      <OutrosCursos atual={curso.slug} />
      <FAQ />
      <CtaMatricula />
    </>
  );
}
