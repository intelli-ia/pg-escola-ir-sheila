/** Dados e copy da Escola Técnica Irmã Sheila. */

export const site = {
  nome: "Escola Técnica Irmã Sheila",
  cidade: "Dias D’Ávila",
  // DDI + DDD + número, só dígitos: (71) 3190-0118.
  whatsappNumero: "557131900118",
} as const;

const wa = (texto: string) =>
  `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(texto)}`;

export const whatsapp = wa("Olá! Vim do site e gostaria de fazer minha matrícula");

export const whatsappCurso = (curso: string) =>
  wa(`Olá, vim pelo site da Escola Técnica Irmã Sheila e gostaria de saber mais sobre o curso: ${curso}.`);

export const navegacao = [
  { href: "#cursos", rotulo: "Cursos" },
  { href: "#diferenciais", rotulo: "Diferenciais" },
  { href: "#depoimentos", rotulo: "Depoimentos" },
] as const;

export const escolhas = [
  { titulo: "Aprender fazendo:", texto: "aulas práticas que aproximam você da rotina da profissão." },
  { titulo: "Ter com quem contar:", texto: "professores da área e orientação ao longo da sua formação." },
  { titulo: "Encontrar seu horário:", texto: "opções de turmas durante a semana ou aos sábados, conforme o curso." },
  { titulo: "Estudar perto de você:", texto: "formação na área da saúde em Dias D’Ávila." },
] as const;

export const cursos = [
  "Técnico em Enfermagem",
  "Técnico em Radiologia",
  "Técnico em Análises Clínicas",
  "Técnico em Nutrição e Dietética",
  "Especialização em Saúde do Trabalhador",
  "Qualificação Profissional em Atendente de Farmácia",
  "Especialização em Instrumentação Cirúrgica",
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
    a: "Sim. Para Enfermagem, Radiologia, Análises Clínicas e Nutrição e Dietética, a escola informa ingresso a partir do 2º ano do ensino médio ou após sua conclusão, com idade mínima de 16 anos e meio.",
  },
  {
    q: "Quais são os dias e horários das aulas?",
    a: "As opções variam conforme o curso, com aulas durante a semana ou aos sábados. Consulte nossa equipe para conhecer os horários e as turmas disponíveis.",
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
