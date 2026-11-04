/** Onda senoidal contínua: curvas quadráticas suaves, com período e amplitude em unidades do viewBox. */
export function caminhoOnda(y: number, amplitude: number, periodo: number, largura: number) {
  const meio = periodo / 2;
  let d = `M0 ${y} Q ${meio / 2} ${y - amplitude} ${meio} ${y}`;
  for (let x = meio * 2; x <= largura + periodo * 2; x += meio) d += ` T ${x} ${y}`;
  return d;
}
