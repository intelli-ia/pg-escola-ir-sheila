/**
 * Últimas notícias / galeria. CONTEÚDO PROVISÓRIO: trocar por textos, categorias e fotos reais.
 * Cada notícia vira a página /noticias/[slug]: texto (parágrafos) e, abaixo, a galeria.
 */
export interface Noticia {
  slug: string;
  titulo: string;
  categoria: string;
  /** Imagem do card e da capa. */
  imagem: string;
  /** Um item por parágrafo. */
  texto: readonly string[];
  galeria: readonly string[];
}

export const noticias: readonly Noticia[] = [
  {
    slug: "aulas-praticas-no-laboratorio",
    titulo: "Aulas práticas no laboratório",
    categoria: "Dia a dia",
    imagem: "/622568906_17934545535160388_7548346971281516296_n.jpg",
    texto: [
      "Na Escola Técnica Irmã Sheila, a prática faz parte da rotina de quem estuda. Nas aulas em laboratório, os alunos aplicam o que aprenderam em sala, com a orientação de professores da área.",
      "Texto provisório: substituir pela descrição real da atividade, com data, turma e o que foi trabalhado.",
    ],
    galeria: [
      "/622568906_17934545535160388_7548346971281516296_n.jpg",
      "/fotos/diferencial-1.webp",
      "/fotos/diferencial-2.webp",
      "/fotos/estrutura-sala-de-aula.webp",
      "/fotos/diferencial-3.webp",
      "/fotos/estrutura-informatica.webp",
    ],
  },
  {
    slug: "formatura-nova-turma",
    titulo: "Formatura: mais uma turma pronta para o mercado",
    categoria: "Formatura",
    imagem: "/624555923_18042538325718518_1323309829741122500_n.jpg",
    texto: [
      "Mais uma turma concluiu sua formação e está pronta para começar a atuar na área da saúde. Um momento de celebração para alunos, familiares e professores.",
      "Texto provisório: substituir pelo relato real da cerimônia, com curso, turma e data.",
    ],
    galeria: [
      "/624555923_18042538325718518_1323309829741122500_n.jpg",
      "/fotos/estrutura-fachada.webp",
      "/fotos/diferencial-4.webp",
      "/fotos/escolha.webp",
      "/fotos/estrutura-biblioteca.webp",
      "/fotos/diferencial-1.webp",
    ],
  },
  {
    slug: "matriculas-abertas",
    titulo: "Matrículas abertas para novas turmas",
    categoria: "Avisos",
    imagem: "/625345176_18116013463614259_369542514488060929_n.jpg",
    texto: [
      "Estão abertas as matrículas para novas turmas. Fale com nossa equipe pelo WhatsApp e conheça os cursos, horários e requisitos de ingresso.",
      "Texto provisório: substituir pelas informações reais da campanha.",
    ],
    galeria: [
      "/625345176_18116013463614259_369542514488060929_n.jpg",
      "/fotos/estrutura-sala-de-aula.webp",
      "/fotos/estrutura-fachada.webp",
      "/fotos/diferencial-2.webp",
    ],
  },
];

export const noticiaPorSlug = (slug: string) => noticias.find((n) => n.slug === slug);
export const caminhoDaNoticia = (slug: string) => `/noticias/${slug}`;
