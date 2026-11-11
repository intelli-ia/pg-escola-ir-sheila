/** Dados e copy da Escola Técnica Irmã Sheila. */

export const site = {
  nome: "Escola Técnica Irmã Sheila",
  cidade: "Dias D’Ávila",
  // DDI + DDD + número, só dígitos: (71) 3190-0118.
  whatsappNumero: "557131900118",
  endereco: "Avenida Garcia d’Ávila, 276 - Jardim Alvorada, Dias d’Ávila - BA, 42850-000",
  telefone: "(71) 3190-0118",
} as const;

/** Redes sociais. */
export const redes = {
  instagram: "https://www.instagram.com/irmasheila_diasdavila/",
} as const;

const wa = (texto: string) =>
  `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(texto)}`;

export const whatsapp = wa("Olá! Vim do site e gostaria de fazer minha matrícula");

export const whatsappCurso = (curso: string) =>
  wa(`Olá, vim pelo site da Escola Técnica Irmã Sheila e gostaria de saber mais sobre o curso: ${curso}.`);

export const navegacao = [
  { href: "/#cursos", rotulo: "Cursos" },
  { href: "/#diferenciais", rotulo: "Diferenciais" },
  { href: "/#historia", rotulo: "História" },
  { href: "/#localizacao", rotulo: "Localização e Contato" },
] as const;

/** Menu do celular (hambúrguer): lista completa das seções da home. O menu do desktop usa só `navegacao`. */
export const navegacaoMobile = [
  { href: "/#cursos", rotulo: "Cursos" },
  { href: "/#diferenciais", rotulo: "Diferenciais" },
  { href: "/#historia", rotulo: "Nossa história" },
  { href: "/#estrutura", rotulo: "Estrutura da escola" },
  { href: "/#premiacoes", rotulo: "Premiações" },
  { href: "/#noticias", rotulo: "Notícias" },
  { href: "/#localizacao", rotulo: "Localização e contato" },
] as const;

export const escolhas = [
  { titulo: "Aprender fazendo:", texto: "aulas práticas que aproximam você da rotina da profissão." },
  { titulo: "Ter com quem contar:", texto: "professores da área e orientação ao longo da sua formação." },
  { titulo: "Encontrar seu horário:", texto: "opções de turmas durante a semana ou aos sábados, conforme o curso." },
  { titulo: "Estudar perto de você:", texto: "formação na área da saúde em Dias D’Ávila." },
] as const;

export const diferenciais = [
  {
    titulo: "Prática que aproxima você da profissão",
    texto:
      "Aulas práticas e experiências orientadas ajudam você a aplicar o conhecimento e desenvolver segurança para a rotina profissional.",
  },
  {
    titulo: "Aprenda com quem conhece a área",
    texto:
      "Professores da área da saúde conectam os conteúdos aos desafios e às responsabilidades que você encontrará na profissão.",
  },
  {
    titulo: "Acompanhamento para seguir em frente",
    texto:
      "Conte com orientação ao longo da formação, apoio nas dificuldades e uma equipe que acompanha seu desenvolvimento.",
  },
  {
    titulo: "Prepare-se para cuidar de pessoas",
    texto:
      "Uma formação que valoriza a técnica, a ética e o respeito para que você aprenda a cuidar com competência e atenção.",
  },
] as const;

export const duracoes = [
  "Enfermagem, Radiologia e Análises Clínicas: 25 meses durante a semana ou 29 meses aos sábados.",
  "Nutrição e Dietética: 20 meses.",
  "Saúde do Trabalhador: 8 meses.",
  "Atendente de Farmácia: 3 meses.",
  "Instrumentação Cirúrgica: 5 meses.",
] as const;

export const faqs: { q: string; a?: string; lista?: readonly string[] }[] = [
  {
    q: "Posso fazer um curso técnico enquanto estudo no ensino médio?",
    a: "Sim. Para Enfermagem, Radiologia, Análises Clínicas e Nutrição e Dietética, o ingresso é a partir do 2º ano do ensino médio ou após sua conclusão, com idade mínima de 16 anos e meio. Atendente de Farmácia e Instrumentação Cirúrgica também pedem idade mínima de 16 anos e meio, e a Especialização em Saúde do Trabalhador exige o Curso Técnico em Enfermagem concluído.",
  },
  {
    q: "Quais são os dias e horários das aulas?",
    a: "A escola funciona das 8h às 20h. Enfermagem tem turmas de segunda a quinta pela manhã, à tarde ou à noite, além de sábados. Radiologia e Análises Clínicas têm turmas à noite, de segunda a quinta, e aos sábados. Nutrição e Dietética, Atendente de Farmácia e Instrumentação Cirúrgica são aos sábados, e a Especialização em Saúde do Trabalhador tem aulas às terças, quintas e sábados.",
  },
  {
    q: "Os cursos são presenciais?",
    a: "A maioria é presencial. A Especialização em Saúde do Trabalhador é semipresencial, com um encontro presencial aos sábados por mês.",
  },
  {
    q: "Qual é a duração de cada curso?",
    lista: duracoes,
  },
  {
    q: "Como faço minha matrícula?",
    a: "Entre em contato pelo WhatsApp. Nossa equipe orientará você sobre os requisitos do curso escolhido e os próximos passos para a matrícula.",
  },
];
