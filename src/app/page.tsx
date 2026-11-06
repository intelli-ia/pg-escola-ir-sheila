import Hero from "@/components/Hero";
import Numeros from "@/components/Numeros";
import Escolha from "@/components/Escolha";
import Cursos from "@/components/Cursos";
import Diferenciais from "@/components/Diferenciais";
import Historia from "@/components/Historia";
import Estrutura from "@/components/Estrutura";
import Localizacao from "@/components/Localizacao";
import Depoimentos from "@/components/Depoimentos";
import Noticias from "@/components/Noticias";
import Premiacoes from "@/components/Premiacoes";
import FAQ from "@/components/FAQ";
import CtaMatricula from "@/components/CtaMatricula";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative overflow-hidden bg-white">
        <Cursos />
        <Numeros />
      </div>
      <Escolha />
      <Diferenciais />
      <Historia />
      <div className="fundo-suave">
        <Estrutura />
        <Localizacao />
      </div>
      <Depoimentos />
      <Premiacoes />
      <Noticias />
      <FAQ />
      <CtaMatricula />
    </>
  );
}
