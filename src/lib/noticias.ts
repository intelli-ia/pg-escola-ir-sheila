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
    slug: "cerimonia-do-jaleco",
    titulo: "Cerimônia do Jaleco: o início da sua vida profissional",
    categoria: "Cerimônia",
    imagem: "/fotos/escola/cerimonia-do-jaleco-2024-2.jpg",
    texto: [
      "Vestir o jaleco pela primeira vez é um dos momentos mais marcantes da formação. Na Cerimônia do Jaleco da Escola Técnica Irmã Sheila, os alunos celebram essa conquista e assumem, diante de professores, familiares e amigos, o compromisso com o cuidado, a ética e a responsabilidade que a profissão exige.",
      "O jaleco simboliza a passagem da teoria para a prática: é a partir dele que os alunos passam a aplicar o que aprenderam nas aulas práticas e a desenvolver segurança para a rotina na área da saúde.",
      "Texto provisório: complementar com o relato real da cerimônia (turma 2024.2), com cursos, local, data e depoimentos.",
    ],
    galeria: [
      "/fotos/escola/cerimonia-do-jaleco-2024-2.jpg",
      "/fotos/escola/confraternizacao-turma-vestidos-verdes.jpg",
    ],
  },
  {
    slug: "formatura-nova-turma",
    titulo: "Formatura: mais uma turma pronta para o mercado",
    categoria: "Formatura",
    imagem: "/fotos/escola/acao-social-equipe-camisa-verde.jpg",
    texto: [
      "Mais uma turma concluiu sua formação e está pronta para começar a atuar na área da saúde. Um momento de celebração para alunos, familiares e professores.",
      "Texto provisório: substituir pelo relato real da cerimônia, com curso, turma e data.",
    ],
    galeria: [
      "/fotos/escola/acao-social-equipe-camisa-verde.jpg",
      "/fotos/estrutura-fachada-muro-cursos.webp",
      "/fotos/diferencial-aula-pratica-aferindo-pressao.webp",
      "/fotos/escolha-enfermeira-atendendo-paciente.webp",
      "/fotos/estrutura-biblioteca-estantes.webp",
      "/fotos/diferencial-pratica-enfermeiras-paciente.webp",
    ],
  },
  {
    slug: "matriculas-abertas",
    titulo: "Matrículas abertas para novas turmas",
    categoria: "Avisos",
    imagem: "/fotos/escola/atividades-praticas-montagem-alunos.jpg",
    texto: [
      "Estão abertas as matrículas para novas turmas. Fale com nossa equipe pelo WhatsApp e conheça os cursos, horários e requisitos de ingresso.",
      "Texto provisório: substituir pelas informações reais da campanha.",
    ],
    galeria: [
      "/fotos/escola/atividades-praticas-montagem-alunos.jpg",
      "/fotos/estrutura-sala-de-aula-carteiras.webp",
      "/fotos/estrutura-fachada-muro-cursos.webp",
      "/fotos/diferencial-acompanhamento-leitos-simulacao.webp",
    ],
  },
];

export const noticiaPorSlug = (slug: string) => noticias.find((n) => n.slug === slug);
export const caminhoDaNoticia = (slug: string) => `/noticias/${slug}`;
