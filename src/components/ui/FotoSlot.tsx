import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FotoSlotProps {
  /** Caminho da imagem em /public. Sem ele, mostra o espaço reservado. */
  src?: string;
  alt?: string;
  className?: string;
  escuro?: boolean;
}

/** Espaço para imagem: recebe `src` quando a foto existir. */
export function FotoSlot({ src, alt = "", className, escuro }: FotoSlotProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[1.25rem]",
        escuro
          ? "bg-gradient-to-br from-petroleo-claro/60 via-petroleo to-petroleo-escuro ring-1 ring-inset ring-white/10"
          : "bg-gradient-to-br from-white via-menta to-menta-linha ring-1 ring-inset ring-petroleo/10",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      ) : (
        <>
          <svg
            aria-hidden="true"
            viewBox="0 0 400 300"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            className={cn("absolute inset-0 h-full w-full", escuro ? "text-white" : "text-petroleo")}
          >
            {[70, 120, 175, 235].map((r) => (
              <circle key={r} cx="320" cy="260" r={r} stroke="currentColor" strokeOpacity="0.09" />
            ))}
            <path
              d="M0 215h120l16-34 28 70 22-48h40l14-26 16 44 12-18H400"
              stroke="#e8623f"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-sm",
                escuro ? "bg-white/10 text-white/70 ring-1 ring-white/20" : "bg-white/70 text-petroleo/50 ring-1 ring-petroleo/15",
              )}
            >
              <ImageIcon className="h-6 w-6" strokeWidth={1.4} />
            </span>
          </div>
        </>
      )}
    </div>
  );
}
