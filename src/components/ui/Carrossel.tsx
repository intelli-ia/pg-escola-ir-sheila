"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Trilho horizontal de uma linha, com encaixe e botões de navegação. Cada filho deve ser um <li>.
 * Sangra até a borda direita da tela; o início alinha ao container. Deve ficar fora do container-x.
 */
export function Carrossel({ children, rotulo }: { children: ReactNode; rotulo: string }) {
  const trilho = useRef<HTMLUListElement>(null);
  const [noInicio, setNoInicio] = useState(true);
  const [noFim, setNoFim] = useState(false);

  const atualizar = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    setNoInicio(el.scrollLeft <= 4);
    setNoFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, [atualizar]);

  function mover(direcao: 1 | -1) {
    const el = trilho.current;
    if (!el) return;
    const card = el.querySelector("li");
    const passo = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: direcao * passo, behavior: "smooth" });
  }

  const botao =
    "flex h-12 w-12 items-center justify-center rounded-full border border-institucional/25 bg-white text-institucional transition-colors duration-300 hover:bg-institucional hover:text-white disabled:pointer-events-none disabled:opacity-35";

  return (
    <>
      {/* O padding vertical evita cortar o hover dos cards */}
      <ul
        ref={trilho}
        onScroll={atualizar}
        aria-label={rotulo}
        className="mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-3 pl-4 pr-[var(--pad)] scroll-pl-4 [--pad:1.5rem] [--conteudo:calc(min(100vw,80rem)_-_2*var(--pad))] [-ms-overflow-style:none] [scrollbar-width:none] md:mt-12 md:[--pad:2.5rem] lg:[--pad:3.5rem] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      <div className="container-x mt-8 flex items-center justify-center gap-3">
        <button type="button" onClick={() => mover(-1)} disabled={noInicio} aria-label="Anteriores" className={botao}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => mover(1)} disabled={noFim} aria-label="Próximos" className={botao}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
