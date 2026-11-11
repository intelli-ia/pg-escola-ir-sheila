/**
 * Últimas notícias / galeria. Cada notícia vira a página /noticias/[slug]: texto (parágrafos) e, abaixo, a galeria.
 * Títulos vieram do cliente; os textos são genéricos, sem datas, nomes ou detalhes, e podem ser substituídos pelos reais.
 * As galerias foram montadas pela proximidade e pelo conteúdo das fotos: conferir com a escola.
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

const f = (caminho: string) => `/fotos/escola/${caminho}.jpg`;

export const noticias: readonly Noticia[] = [
  {
    slug: "primeiro-desfile-civico-7-de-setembro",
    titulo: "Primeiro desfile cívico de 7 de Setembro da instituição",
    categoria: "Desfile cívico",
    imagem: f("eventos/desfile-civico-7-de-setembro-faixa-cursos"),
    texto: [
      "O desfile cívico de 7 de Setembro é um dos momentos em que a cidade se reúne para celebrar a Independência e valorizar as instituições que fazem parte da sua história. Nesta edição, a Escola Técnica Irmã Sheila marcou presença pela primeira vez, levando às ruas alunos e professores de jaleco, com a faixa que apresenta os cursos oferecidos pela instituição.",
      "Participar de um evento como esse vai além do desfile em si. É uma oportunidade para os alunos vivenciarem o espírito de coletividade, representarem a escola perante a comunidade e mostrarem, de forma orgulhosa, a profissão que escolheram seguir. Para quem está em formação, vestir o jaleco em um espaço público reforça o compromisso com o cuidado e com a responsabilidade social da área da saúde.",
      "A presença da escola no desfile também aproxima a instituição das famílias e dos moradores de Dias d’Ávila, divulgando a formação técnica na área da saúde e o papel dos profissionais que a escola ajuda a formar.",
    ],
    galeria: [
      f("eventos/desfile-civico-7-de-setembro-faixa-cursos"),
      f("eventos/desfile-civico-7-de-setembro-visao-geral"),
      f("eventos/desfile-civico-alunas-uniforme-verde-agua"),
    ],
  },
  {
    slug: "simulado-de-emergencia",
    titulo: "Simulado de Emergência",
    categoria: "Aula prática",
    imagem: f("aulas-praticas/simulado-emergencia-sala-vermelha"),
    texto: [
      "O simulado de emergência é uma das atividades mais importantes da formação na área da saúde. Nele, os alunos são colocados diante de situações que reproduzem, de forma controlada, o que podem encontrar na rotina profissional: o atendimento rápido, a organização da equipe e a tomada de decisão em momentos de pressão.",
      "Durante a atividade, cada aluno assume uma função e trabalha em conjunto com os colegas, praticando a comunicação, a divisão de tarefas e os cuidados necessários com o paciente. O ambiente simulado permite errar, corrigir e aprender com segurança, algo fundamental antes de atuar em situações reais.",
      "Atividades como essa fazem parte da proposta da Escola Técnica Irmã Sheila de aproximar o aluno da prática desde cedo. Com a orientação dos professores, os estudantes desenvolvem confiança, agilidade e responsabilidade, competências essenciais para quem vai trabalhar cuidando de pessoas.",
    ],
    galeria: [
      f("aulas-praticas/simulado-emergencia-sala-vermelha"),
      f("aulas-praticas/pratica-transporte-maca-resgate"),
    ],
  },
  {
    slug: "visita-tecnica-munean",
    titulo: "Visita técnica ao MuNEAN, Museu Nacional de Enfermagem",
    categoria: "Visita técnica",
    imagem: f("visitas-tecnicas/munean-turma-hall-entrada"),
    texto: [
      "A visita técnica é uma forma de complementar o que os alunos aprendem em sala de aula, levando-os a conhecer de perto espaços ligados à história e à prática da profissão. Nesta atividade, a turma visitou o MuNEAN, o Museu Nacional de Enfermagem, instituição dedicada a preservar e contar a trajetória da enfermagem no Brasil.",
      "Conhecer essa história ajuda os estudantes a entenderem de onde vem a profissão que escolheram, como ela evoluiu ao longo do tempo e quais valores a sustentam, como o cuidado, a ética e o respeito pelas pessoas. É também uma oportunidade de se inspirar em quem construiu a enfermagem que existe hoje.",
      "Na Escola Técnica Irmã Sheila, as visitas técnicas fazem parte de uma formação que une teoria, prática e vivência. Experiências como essa ampliam o olhar dos alunos sobre a profissão e fortalecem o orgulho de fazer parte dela.",
    ],
    galeria: [f("visitas-tecnicas/munean-turma-hall-entrada")],
  },
  {
    slug: "visita-tecnica-laboratorio-de-anatomia-unime",
    titulo: "Visita técnica ao Laboratório de Anatomia da Faculdade Unime, em Lauro de Freitas",
    categoria: "Visita técnica",
    imagem: f("visitas-tecnicas/unime-laboratorio-anatomia-turma"),
    texto: [
      "Estudar o corpo humano exige, além dos livros e das aulas expositivas, o contato com estruturas e peças reais. Por isso, os alunos realizaram uma visita técnica ao Laboratório de Anatomia da Faculdade Unime, em Lauro de Freitas, um ambiente preparado para o estudo detalhado da anatomia.",
      "Durante a visita, os estudantes puderam observar de perto estruturas do corpo humano, relacionando o conteúdo estudado em sala com o que veem na prática. Esse tipo de experiência ajuda a fixar o conhecimento, a compreender a localização e a função de cada órgão e a ter mais segurança nos procedimentos que realizarão na profissão.",
      "A atividade integra o conjunto de ações da Escola Técnica Irmã Sheila para aproximar o aluno de ambientes de ensino e de prática da área da saúde, ampliando as referências e despertando o interesse pela continuidade dos estudos.",
    ],
    galeria: [
      f("visitas-tecnicas/unime-laboratorio-anatomia-turma"),
      f("visitas-tecnicas/laboratorio-anatomia-turma-modelo-coracao"),
    ],
  },
  {
    slug: "cerimonia-do-jaleco",
    titulo: "Cerimônia do Jaleco: o início da sua vida profissional",
    categoria: "Cerimônia",
    imagem: f("eventos/cerimonia-do-jaleco-palco-turma"),
    texto: [
      "Vestir o jaleco pela primeira vez é um dos momentos mais marcantes da formação. Na Cerimônia do Jaleco da Escola Técnica Irmã Sheila, os alunos celebram essa conquista e assumem, diante de professores, familiares e amigos, o compromisso com o cuidado, a ética e a responsabilidade que a profissão exige.",
      "O jaleco simboliza a passagem da teoria para a prática: é a partir dele que os alunos passam a aplicar o que aprenderam nas aulas práticas e a desenvolver segurança para a rotina na área da saúde. Por isso, a cerimônia é vivida com emoção por quem está começando uma nova etapa.",
      "Mais do que uma tradição, o evento reúne a comunidade escolar para reconhecer o esforço dos estudantes e acolhê-los na caminhada profissional. É um momento de gratidão às famílias que apoiam, aos professores que orientam e aos próprios alunos, que escolheram dedicar a vida ao cuidado de pessoas.",
    ],
    galeria: [
      f("eventos/cerimonia-do-jaleco-palco-turma"),
      f("eventos/cerimonia-do-jaleco-palco-vista-ampla"),
      "/fotos/escola/cerimonia-do-jaleco-2024-2.jpg",
    ],
  },
  {
    slug: "formatura-nova-turma",
    titulo: "Formatura: mais uma turma pronta para o mercado",
    categoria: "Formatura",
    imagem: f("eventos/formatura-lancamento-de-capelos"),
    texto: [
      "A formatura é o encerramento de um ciclo de dedicação, estudo e superação. Mais uma turma da Escola Técnica Irmã Sheila concluiu sua formação e está pronta para começar a atuar na área da saúde, levando para o mercado de trabalho o conhecimento e a experiência prática adquiridos ao longo do curso.",
      "Para os formandos, a cerimônia é a oportunidade de celebrar a conquista ao lado de quem esteve presente em cada etapa: familiares, amigos, colegas e professores. Os capelos lançados ao alto e os sorrisos nas fotos mostram o orgulho de quem chegou até aqui.",
      "A escola deseja sucesso a todos os formandos e reforça o compromisso de seguir formando profissionais preparados, éticos e atentos ao cuidado com as pessoas. A formação não termina na cerimônia: continua em cada atendimento e em cada nova oportunidade de aprender.",
    ],
    galeria: [
      f("eventos/formatura-lancamento-de-capelos"),
      f("eventos/formatura-formando-beca-faixa-verde"),
    ],
  },
];

export const noticiaPorSlug = (slug: string) => noticias.find((n) => n.slug === slug);
export const caminhoDaNoticia = (slug: string) => `/noticias/${slug}`;
