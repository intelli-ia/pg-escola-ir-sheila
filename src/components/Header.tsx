"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Botao } from "@/components/ui/Botao";
import { Marca } from "@/components/ui/Marca";
import { navegacao, whatsapp } from "@/lib/site";

export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          rolou
            ? "border-b border-menta-linha bg-menta-fundo/90 text-petroleo backdrop-blur-xl"
            : "border-b border-transparent text-white"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-8 py-3.5">
          <Link href="#hero" aria-label="Escola Técnica Irmã Sheila — início" className="shrink-0">
            <Marca />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                {item.rotulo}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-coral transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Botao href={whatsapp} tamanho="sm" className="hidden sm:inline-flex">
              Faça sua Matrícula
            </Botao>
            <button
              type="button"
              onClick={() => setMenu(true)}
              aria-label="Abrir menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-current/25 transition-colors duration-300 hover:bg-current/10 lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-petroleo-escuro text-white lg:hidden"
          >
            <div className="flex h-full flex-col px-6 py-4">
              <div className="flex items-center justify-between">
                <Marca />
                <button
                  type="button"
                  onClick={() => setMenu(false)}
                  aria-label="Fechar menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center">
                {navegacao.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenu(false)}
                      className="titulo block border-b border-white/10 py-5 text-[2.25rem]"
                    >
                      {item.rotulo}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <Botao href={whatsapp} className="w-full">
                Faça sua Matrícula
              </Botao>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
