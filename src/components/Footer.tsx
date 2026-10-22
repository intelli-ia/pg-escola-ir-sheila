import { Marca } from "@/components/ui/Marca";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-petroleo-escuro text-white">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <Marca />
        <p className="text-sm text-white/55">
          © {new Date().getFullYear()} {site.nome}
        </p>
      </div>
    </footer>
  );
}
