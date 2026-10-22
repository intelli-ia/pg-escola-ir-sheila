import { Quote } from "lucide-react";
import { FotoSlot } from "@/components/ui/FotoSlot";
import { Reveal } from "@/components/ui/Reveal";

/** Espaços reservados: os depoimentos ainda não foram fornecidos. */
export default function Depoimentos() {
  return (
    <section id="depoimentos" className="fundo-claro relative py-20 md:py-32">
      <div className="container-x">
        <Reveal>
          <h2 className="titulo text-[2.3rem] text-petroleo sm:text-[3.1rem] lg:text-[3.8rem]">
            Depoimentos
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="cartao flex h-full flex-col gap-6 p-7 md:p-8">
                <Quote className="h-9 w-9 text-coral/70" strokeWidth={1.3} />
                <div className="space-y-2.5">
                  <div className="h-2.5 w-full rounded-full bg-petroleo/[0.07]" />
                  <div className="h-2.5 w-11/12 rounded-full bg-petroleo/[0.07]" />
                  <div className="h-2.5 w-4/5 rounded-full bg-petroleo/[0.07]" />
                </div>
                <div className="mt-auto flex items-center gap-4 border-t border-petroleo/10 pt-6">
                  <FotoSlot alt="" className="h-14 w-14 shrink-0 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2.5 w-2/3 rounded-full bg-petroleo/10" />
                    <div className="h-2 w-1/3 rounded-full bg-petroleo/[0.06]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
