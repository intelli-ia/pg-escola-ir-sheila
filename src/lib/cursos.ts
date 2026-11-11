import {
  Apple,
  FlaskConical,
  HardHat,
  HeartPulse,
  Pill,
  ScanLine,
  Scissors,
  type LucideIcon,
} from "lucide-react";

export interface Curso {
  /** Segmento da URL (/cursos/[slug]) e nome do arquivo em public/cursos. */
  slug: string;
  nome: string;
  /** Título do card da home com quebra de linha forçada, quando necessário. */
  tituloCard?: readonly string[];
  tipo: "Curso técnico" | "Especialização" | "Qualificação profissional";
  icone: LucideIcon;
  /** Frase curta para o topo da página. */
  resumo: string;
  /** Parágrafos da seção "Sobre o curso". */
  sobre: readonly string[];
  duracao: string;
  /** Carga horária total, quando informada pela escola. */
  cargaHoraria?: string;
  /** Dias e horários das aulas. */
  horarios: string;
  /** Média salarial da profissão (valor de referência; revisar com a escola). */
  salario: string;
  modalidade: string;
  /** Quem pode ingressar. */
  ingresso: string;
}

const ingressoTecnico =
  "A partir do 2º ano do ensino médio ou após sua conclusão, com idade mínima de 16 anos e meio.";
const modalidadeTecnico = "Presencial, concomitante ou subsequente ao ensino médio";
const cargaTecnico = "1.800 horas";
const idadeMinima = "Idade mínima de 16 anos e meio.";
const horarioSabado = "Aos sábados, das 8h30 às 12h30.";

/** Conteúdo provisório: textos de "sobre" e "resumo" devem ser revisados pela escola. */
export const cursos: readonly Curso[] = [
  {
    slug: "enfermagem",
    nome: "Técnico em Enfermagem",
    tipo: "Curso técnico",
    icone: HeartPulse,
    resumo: "Prepare-se para atuar no cuidado direto ao paciente, com técnica, ética e atenção.",
    sobre: [
      "O técnico em enfermagem é um dos profissionais mais presentes no dia a dia da saúde. Ele atua ao lado de enfermeiros e médicos no cuidado direto de pessoas em hospitais, clínicas, unidades básicas de saúde, laboratórios, empresas e atendimento domiciliar.",
      "Entre as atividades da profissão estão aferir sinais vitais, administrar medicamentos conforme prescrição, realizar curativos, auxiliar na higiene e no conforto do paciente, registrar a evolução do quadro e apoiar procedimentos da equipe. Tudo isso exige técnica, atenção aos detalhes e responsabilidade.",
      "Ao longo do curso, você estuda temas como anatomia e fisiologia, biossegurança, fundamentos de enfermagem, farmacologia, saúde coletiva, urgência e emergência e cuidado nas diferentes fases da vida, do recém-nascido ao idoso.",
      "Na Escola Técnica Irmã Sheila, a teoria caminha junto com a prática, para que você ganhe segurança antes de entrar no mercado. A formação também valoriza ética, empatia e comunicação, qualidades essenciais para quem cuida de pessoas.",
      "Ao concluir, você poderá atuar em diversas áreas, como centro cirúrgico, UTI, pronto-socorro, saúde da família e home care, com amplas possibilidades de crescimento na carreira.",
    ],
    duracao: "25 meses durante a semana ou 29 meses aos sábados",
    cargaHoraria: cargaTecnico,
    horarios:
      "Segunda a quinta: matutino (8h30 às 11h), vespertino (13h30 às 16h) ou noturno (18h às 20h). Aos sábados, das 8h30 às 12h30.",
    salario: "R$ 2.500 a R$ 3.500",
    modalidade: modalidadeTecnico,
    ingresso: ingressoTecnico,
  },
  {
    slug: "radiologia",
    nome: "Técnico em Radiologia",
    tituloCard: ["Técnico em", "Radiologia"],
    tipo: "Curso técnico",
    icone: ScanLine,
    resumo: "Aprenda a realizar exames de imagem com precisão e responsabilidade.",
    sobre: [
      "O técnico em radiologia é o profissional responsável por realizar exames de imagem que ajudam o médico a diagnosticar e acompanhar doenças. Ele atua em hospitais, clínicas de diagnóstico, centros de imagem, consultórios e também na área industrial.",
      "No dia a dia, posiciona o paciente, opera equipamentos de raios X, tomografia computadorizada, mamografia e ressonância magnética, ajusta os parâmetros do exame e garante imagens de qualidade. Cada etapa pede precisão e cuidado, tanto com o paciente quanto com a própria segurança.",
      "Durante a formação, você estuda anatomia e fisiologia, técnicas radiológicas, física das radiações, proteção radiológica, biossegurança, processamento de imagens e noções de atendimento ao paciente.",
      "A proteção radiológica tem lugar de destaque: você aprende a trabalhar dentro das normas de segurança, reduzindo riscos para pacientes, para a equipe e para si mesmo.",
      "É uma área em constante evolução tecnológica, com boas oportunidades de atuação e de especialização em diferentes modalidades de diagnóstico por imagem.",
    ],
    duracao: "25 meses durante a semana ou 29 meses aos sábados",
    cargaHoraria: cargaTecnico,
    horarios: "Segunda a quinta, no período noturno (18h às 20h). Aos sábados, das 8h30 às 12h30.",
    salario: "R$ 3.000 a R$ 4.500",
    modalidade: modalidadeTecnico,
    ingresso: ingressoTecnico,
  },
  {
    slug: "analises-clinicas",
    nome: "Técnico em Análises Clínicas",
    tipo: "Curso técnico",
    icone: FlaskConical,
    resumo: "Entre no universo dos laboratórios e contribua para diagnósticos confiáveis.",
    sobre: [
      "O técnico em análises clínicas trabalha nos bastidores do diagnóstico. É a partir das amostras que ele coleta, prepara e analisa que médicos conseguem identificar doenças, acompanhar tratamentos e tomar decisões importantes sobre a saúde dos pacientes.",
      "Suas atividades incluem coletar sangue e outros materiais biológicos, preparar amostras, operar equipamentos laboratoriais, realizar exames e organizar os resultados. A atuação é em laboratórios de análises, hospitais, bancos de sangue, clínicas e centros de pesquisa.",
      "No curso, você estuda hematologia, bioquímica, microbiologia, parasitologia, imunologia, uroanálise, biossegurança e controle de qualidade, além de noções de anatomia e fisiologia humana.",
      "Como o trabalho exige exatidão, a formação enfatiza boas práticas de laboratório, o manuseio seguro de materiais e a atenção aos detalhes, para que cada resultado seja confiável.",
      "É uma carreira para quem gosta de ciência, rotina organizada e quer contribuir diretamente para o cuidado com a saúde, com espaço para especialização em diversas áreas do laboratório.",
    ],
    duracao: "25 meses durante a semana ou 29 meses aos sábados",
    cargaHoraria: cargaTecnico,
    horarios: "Segunda a quinta, no período noturno (18h às 20h). Aos sábados, das 8h30 às 12h30.",
    salario: "R$ 2.200 a R$ 3.200",
    modalidade: modalidadeTecnico,
    ingresso: ingressoTecnico,
  },
  {
    slug: "nutricao-dietetica",
    nome: "Técnico em Nutrição e Dietética",
    tipo: "Curso técnico",
    icone: Apple,
    resumo: "Aprenda a apoiar a alimentação saudável e o cuidado nutricional de pessoas e coletividades.",
    sobre: [
      "O técnico em nutrição e dietética atua no apoio à alimentação saudável de pessoas e grupos. Trabalha ao lado de nutricionistas em hospitais, clínicas, escolas, creches, empresas, restaurantes industriais e serviços de alimentação coletiva.",
      "Entre suas atividades estão auxiliar no planejamento de cardápios, acompanhar o preparo e a distribuição das refeições, controlar estoques, verificar a qualidade dos alimentos e orientar boas práticas de higiene e manipulação.",
      "Ao longo do curso, você estuda nutrição básica, técnica dietética, alimentação nas diferentes fases da vida, dietoterapia, microbiologia dos alimentos, segurança alimentar, administração de serviços de alimentação e educação nutricional.",
      "A formação mostra como a alimentação influencia a prevenção e o tratamento de doenças, e prepara você para atuar com cuidado e responsabilidade na rotina de quem se alimenta.",
      "É uma boa escolha para quem se interessa por saúde e alimentação e busca uma profissão com atuação em setores variados.",
    ],
    duracao: "20 meses",
    cargaHoraria: cargaTecnico,
    horarios: horarioSabado,
    salario: "R$ 2.000 a R$ 3.000",
    modalidade: modalidadeTecnico,
    ingresso: ingressoTecnico,
  },
  {
    slug: "saude-do-trabalhador",
    nome: "Especialização em Saúde do Trabalhador",
    tituloCard: ["Especialização", "em Saúde do", "Trabalhador"],
    tipo: "Especialização",
    icone: HardHat,
    resumo: "Aprofunde seus conhecimentos na prevenção de riscos e no cuidado com a saúde de quem trabalha.",
    sobre: [
      "A especialização em saúde do trabalhador é voltada a técnicos em enfermagem que querem atuar na prevenção de acidentes e doenças relacionadas ao trabalho, um campo cada vez mais valorizado pelas empresas e pelos serviços de saúde.",
      "O profissional especializado ajuda a identificar riscos no ambiente de trabalho, apoia programas de prevenção e de promoção da saúde, acompanha casos de afastamento e contribui para condições de trabalho mais seguras e saudáveis.",
      "O conteúdo aborda temas como legislação e normas de saúde e segurança, ergonomia, riscos ocupacionais, doenças relacionadas ao trabalho, vigilância em saúde do trabalhador e programas de prevenção em empresas.",
      "O curso é semipresencial, com um encontro presencial por mês, aos sábados, o que facilita conciliar os estudos com o trabalho e a vida pessoal.",
      "Ao concluir, você amplia sua atuação em empresas, ambulatórios e serviços de saúde ocupacional, fortalecendo seu currículo e suas oportunidades.",
    ],
    duracao: "8 meses, entre teoria e prática",
    cargaHoraria: "300 horas",
    horarios:
      "Terças e quintas, das 18h30 às 20h, e aos sábados, das 8h30 às 10h30. Um encontro presencial por mês, aos sábados, conforme o calendário disciplinar.",
    salario: "R$ 2.500 a R$ 3.800",
    modalidade: "Semipresencial, com um encontro presencial por mês, aos sábados",
    ingresso: "Ter concluído o Curso Técnico em Enfermagem, ao qual a especialização se vincula.",
  },
  {
    slug: "atendente-de-farmacia",
    nome: "Qualificação Profissional em Atendente de Farmácia",
    tipo: "Qualificação profissional",
    icone: Pill,
    resumo: "Uma qualificação rápida para atuar no atendimento em farmácias e drogarias.",
    sobre: [
      "O atendente de farmácia é o primeiro contato do cliente com a drogaria. É ele quem recebe, escuta, orienta e ajuda a encontrar o produto certo, sempre com cuidado, cordialidade e respeito às regras do setor.",
      "Suas atividades incluem atendimento ao público, organização e reposição de produtos nas prateleiras, controle de validade, apoio no caixa e no estoque, além do cumprimento das normas sanitárias que garantem a segurança de quem compra.",
      "No curso, você conhece noções de farmacologia básica, tipos de medicamentos e produtos de saúde e higiene, boas práticas de atendimento, organização de estoque, vendas e ética profissional.",
      "É uma qualificação de curta duração, pensada para quem quer entrar rápido no mercado de trabalho, em farmácias, drogarias e redes do setor.",
      "Também é um excelente primeiro passo para quem deseja seguir na área da saúde e, mais adiante, buscar novas formações.",
    ],
    duracao: "3 meses",
    cargaHoraria: "42 horas",
    horarios: horarioSabado,
    salario: "R$ 1.800 a R$ 2.400",
    modalidade: "Presencial",
    ingresso: idadeMinima,
  },
  {
    slug: "instrumentacao-cirurgica",
    nome: "Especialização em Instrumentação Cirúrgica",
    tipo: "Especialização",
    icone: Scissors,
    resumo: "Especialize-se para atuar ao lado da equipe cirúrgica dentro do centro cirúrgico.",
    sobre: [
      "O instrumentador cirúrgico faz parte da equipe do centro cirúrgico e tem papel essencial durante as cirurgias. Ele organiza, prepara e entrega ao cirurgião os instrumentos certos no momento certo, contribuindo para a agilidade e a segurança do procedimento.",
      "Suas responsabilidades incluem montar a mesa cirúrgica, conferir materiais e instrumentais, manter a técnica asséptica, contar compressas e instrumentos e acompanhar cada etapa do procedimento, sempre atento ao paciente e à equipe.",
      "A especialização aborda temas como anatomia aplicada à cirurgia, tempos cirúrgicos, técnicas assépticas, esterilização e processamento de materiais, instrumental cirúrgico, biossegurança e rotina do centro cirúrgico.",
      "A formação valoriza organização, concentração e trabalho em equipe, qualidades indispensáveis em um ambiente em que cada detalhe faz diferença.",
      "Ao concluir, você poderá atuar em hospitais, centros cirúrgicos e clínicas, em diversas especialidades, com possibilidade de se tornar referência na rotina cirúrgica.",
    ],
    duracao: "5 meses",
    horarios: horarioSabado,
    salario: "R$ 2.500 a R$ 3.800",
    modalidade: "Presencial",
    ingresso: idadeMinima,
  },
];

export const cursoPorSlug = (slug: string) => cursos.find((c) => c.slug === slug);
export const caminhoDoCurso = (slug: string) => `/cursos/${slug}`;
