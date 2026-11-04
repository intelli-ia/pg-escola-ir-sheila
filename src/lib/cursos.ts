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
  modalidade: string;
  /** Quem pode ingressar. */
  ingresso: string;
}

const ingressoTecnico =
  "A partir do 2º ano do ensino médio ou após sua conclusão, com idade mínima de 16 anos e meio.";
const consulteRequisitos = "Consulte nossa equipe para conhecer os requisitos de ingresso.";

/** Conteúdo provisório: textos de "sobre" e "resumo" devem ser revisados pela escola. */
export const cursos: readonly Curso[] = [
  {
    slug: "enfermagem",
    nome: "Técnico em Enfermagem",
    tipo: "Curso técnico",
    icone: HeartPulse,
    resumo: "Prepare-se para atuar no cuidado direto ao paciente, com técnica, ética e atenção.",
    sobre: [
      "O técnico em enfermagem atua ao lado da equipe de saúde no cuidado de pessoas em hospitais, clínicas, unidades de saúde e atendimento domiciliar.",
      "Na Escola Técnica Irmã Sheila, a formação combina teoria e aulas práticas para que você desenvolva segurança na rotina da profissão.",
    ],
    duracao: "25 meses durante a semana ou 29 meses aos sábados",
    modalidade: "Presencial",
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
      "O técnico em radiologia trabalha na realização de exames de imagem que apoiam o diagnóstico médico, em hospitais, clínicas e centros de diagnóstico.",
      "A formação une conhecimento técnico e prática para que você atue com precisão e atenção à segurança de pacientes e profissionais.",
    ],
    duracao: "25 meses durante a semana ou 29 meses aos sábados",
    modalidade: "Presencial",
    ingresso: ingressoTecnico,
  },
  {
    slug: "analises-clinicas",
    nome: "Técnico em Análises Clínicas",
    tipo: "Curso técnico",
    icone: FlaskConical,
    resumo: "Entre no universo dos laboratórios e contribua para diagnósticos confiáveis.",
    sobre: [
      "O técnico em análises clínicas atua em laboratórios, coletando e analisando amostras que ajudam a identificar e acompanhar doenças.",
      "Durante o curso, você aprende os procedimentos e os cuidados que garantem resultados confiáveis na rotina laboratorial.",
    ],
    duracao: "25 meses durante a semana ou 29 meses aos sábados",
    modalidade: "Presencial",
    ingresso: ingressoTecnico,
  },
  {
    slug: "nutricao-dietetica",
    nome: "Técnico em Nutrição e Dietética",
    tipo: "Curso técnico",
    icone: Apple,
    resumo: "Aprenda a apoiar a alimentação saudável e o cuidado nutricional de pessoas e coletividades.",
    sobre: [
      "O técnico em nutrição e dietética auxilia no planejamento e na produção de refeições, em hospitais, escolas, empresas e serviços de alimentação.",
      "A formação aproxima você da rotina da área, com foco em qualidade, higiene e cuidado com a saúde de quem se alimenta.",
    ],
    duracao: "20 meses",
    modalidade: "Presencial",
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
      "A especialização em saúde do trabalhador amplia a atuação de profissionais da saúde na prevenção de acidentes e doenças ligadas ao trabalho.",
      "O curso é semipresencial, o que facilita conciliar os estudos com a sua rotina profissional.",
    ],
    duracao: "8 meses",
    modalidade: "Semipresencial, com um encontro presencial por mês, aos sábados",
    ingresso: consulteRequisitos,
  },
  {
    slug: "atendente-de-farmacia",
    nome: "Qualificação Profissional em Atendente de Farmácia",
    tipo: "Qualificação profissional",
    icone: Pill,
    resumo: "Uma qualificação rápida para atuar no atendimento em farmácias e drogarias.",
    sobre: [
      "O atendente de farmácia recebe e orienta clientes, organiza produtos e apoia a rotina de farmácias e drogarias.",
      "Em poucos meses, você se prepara para entrar no mercado com postura profissional e conhecimento da rotina do setor.",
    ],
    duracao: "3 meses",
    modalidade: "Presencial",
    ingresso: consulteRequisitos,
  },
  {
    slug: "instrumentacao-cirurgica",
    nome: "Especialização em Instrumentação Cirúrgica",
    tipo: "Especialização",
    icone: Scissors,
    resumo: "Especialize-se para atuar ao lado da equipe cirúrgica dentro do centro cirúrgico.",
    sobre: [
      "O instrumentador cirúrgico integra a equipe do centro cirúrgico, organizando e disponibilizando os instrumentos necessários em cada procedimento.",
      "A especialização prepara você para essa rotina, com atenção à técnica, à organização e à segurança do paciente.",
    ],
    duracao: "5 meses",
    modalidade: "Presencial",
    ingresso: consulteRequisitos,
  },
];

export const cursoPorSlug = (slug: string) => cursos.find((c) => c.slug === slug);
export const caminhoDoCurso = (slug: string) => `/cursos/${slug}`;
