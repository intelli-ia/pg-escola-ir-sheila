import Hero from "@/components/Hero";
import Numeros from "@/components/Numeros";
import Escolha from "@/components/Escolha";
import Cursos from "@/components/Cursos";
import Diferenciais from "@/components/Diferenciais";
import Estrutura from "@/components/Estrutura";
import Localizacao from "@/components/Localizacao";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Numeros />
      <Escolha />
      <Cursos />
      <Diferenciais />
      <div className="fundo-menta">
        <Estrutura />
        <Localizacao />
      </div>
      <Depoimentos />
      <FAQ />
    </>
  );
}
