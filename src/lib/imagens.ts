import { existsSync } from "node:fs";
import { join } from "node:path";

/** Imagem do curso em public/cursos (jpg, jpeg, png ou webp), se existir. Uso exclusivo em Server Components. */
export function imagemDoCurso(slug: string) {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (existsSync(join(process.cwd(), "public", "cursos", `${slug}.${ext}`))) return `/cursos/${slug}.${ext}`;
  }
  return undefined;
}
