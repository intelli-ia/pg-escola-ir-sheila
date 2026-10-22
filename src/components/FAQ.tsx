"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section id="faq" className="fundo-menta relative py-20 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <h2 className="titulo text-[2.3rem] text-petroleo sm:text-[3.1rem] lg:sticky lg:top-32 lg:text-[3.6rem]">
            Perguntas <em className="text-coral">Frequentes:</em>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const ativo = aberto === i;
            return (
              <Reveal key={faq.q} delay={i * 0.06} y={20}>
                <div
                  className={`overflow-hidden rounded-[1.5rem] border transition-colors duration-300 ${
                    ativo ? "border-petroleo/25 bg-white" : "border-petroleo/10 bg-white/60 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setAberto(ativo ? null : i)}
                    aria-expanded={ativo}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                  >
                    <span className="text-[1rem] font-bold leading-snug text-petroleo md:text-[1.0625rem]">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        ativo ? "rotate-45 bg-coral text-white" : "bg-menta text-petroleo"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {ativo && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8">
                          <div className="mb-5 h-px w-full bg-petroleo/10" />
                          {faq.a && <p className="leading-relaxed text-tinta/80">{faq.a}</p>}
                          {faq.lista && (
                            <ul className="space-y-3">
                              {faq.lista.map((linha) => (
                                <li key={linha} className="flex gap-3 leading-relaxed text-tinta/80">
                                  <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                                  {linha}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
