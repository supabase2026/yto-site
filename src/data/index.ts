import { ROUTE_PATHS } from '@/lib/index';
import type {
  NavItem,
  Testimonial,
  Solution,
  Tool,
  Differential,
  CompanyValue,
  InCompanyService,
  Module,
  Benefit,
} from '@/lib/index';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', path: ROUTE_PATHS.HOME },
  { label: 'Quem Somos', path: ROUTE_PATHS.QUEM_SOMOS },
  { label: 'Para Empresas', path: ROUTE_PATHS.PARA_EMPRESAS },
  { label: 'Soluções', path: ROUTE_PATHS.SOLUCOES },
  { label: 'Pós-Graduação', path: ROUTE_PATHS.POS_GRADUACAO },
  { label: 'Yto Academy', path: ROUTE_PATHS.YTO_ACADEMY },
  { label: 'Data Analytics', path: ROUTE_PATHS.DATA_ANALYTICS },
  { label: 'In Company', path: ROUTE_PATHS.IN_COMPANY },
  { label: 'Mentoria VIP', path: ROUTE_PATHS.MENTORIA_VIP },
  { label: 'Monte sua Jornada', path: ROUTE_PATHS.JORNADA },
  { label: 'Contato', path: ROUTE_PATHS.CONTATO },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Stephanie Modesto',
    course: 'Formação em Data Analytics',
    text: 'Consegui migrar de área graças ao curso. O conteúdo prático e os professores experientes fizeram toda a diferença na minha carreira.',
    initials: 'SM',
  },
  {
    name: 'Helga Santos',
    course: 'Power BI',
    text: 'Os exercícios práticos me permitiram aplicar o conhecimento no dia a dia do trabalho. Recomendo para quem quer resultados reais.',
    initials: 'HS',
  },
  {
    name: 'Andreza Lima',
    course: 'Power BI',
    text: 'Expandir meus conhecimentos em ferramentas de front end foi essencial. O curso superou minhas expectativas em todos os aspectos.',
    initials: 'AL',
  },
  {
    name: 'Elvis Rodrigues',
    course: 'Power BI',
    text: 'Excelente didática do professor Dan. Aprendi muito e já estou aplicando no meu trabalho. Vale cada minuto investido.',
    initials: 'ER',
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'pos-graduacao',
    title: 'Pós-Graduação em Gestão Estratégica de Dados',
    description: 'Diploma reconhecido pelo MEC. Torne-se um especialista em gestão de dados com certificação internacional.',
    icon: 'GraduationCap',
    path: ROUTE_PATHS.POS_GRADUACAO,
    features: [
      'Diploma MEC reconhecido',
      'Certificados internacionais',
      'Aulas ao vivo na Yto Academy',
      'Professores do mercado',
    ],
  },
  {
    id: 'yto-academy',
    title: 'Yto Academy',
    description: 'Plataforma de aprendizagem contínua com acesso a diversos cursos de tecnologia e dados.',
    icon: 'BookOpen',
    path: ROUTE_PATHS.YTO_ACADEMY,
    features: [
      'Acesso contínuo',
      'Variedade de cursos',
      'Certificados de conclusão',
      'Suporte especializado',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Formação em Data Analytics',
    description: '294 horas de formação prática em análise de dados. 16 certificados internacionais.',
    icon: 'BarChart3',
    path: ROUTE_PATHS.DATA_ANALYTICS,
    features: [
      '294 horas de conteúdo',
      '16 certificados internacionais',
      'Aulas ao vivo + gravadas',
      'Foco em empregabilidade',
    ],
  },
  {
    id: 'in-company',
    title: 'Treinamentos In Company',
    description: 'Soluções corporativas personalizadas para capacitar sua equipe em dados e tecnologia.',
    icon: 'Building2',
    path: ROUTE_PATHS.IN_COMPANY,
    features: [
      'Treinamentos personalizados',
      'Consultoria especializada',
      'Resultados mensuráveis',
      'Suporte contínuo',
    ],
  },
];

export const TOOLS: Tool[] = [
  { name: 'Excel Essentials', icon: 'FileSpreadsheet' },
  { name: 'Excel Expert', icon: 'FileSpreadsheet' },
  { name: 'Power BI', icon: 'BarChart3' },
  { name: 'SQL Server', icon: 'Database' },
  { name: 'Python', icon: 'Code2' },
  { name: 'Linguagem R', icon: 'Code2' },
  { name: 'Business Intelligence', icon: 'TrendingUp' },
  { name: 'Microsoft Project', icon: 'Gantt' },
  { name: 'PowerPoint', icon: 'Presentation' },
  { name: 'VBA', icon: 'Code' },
  { name: 'Inteligência Artificial', icon: 'Brain' },
  { name: 'Data Analytics', icon: 'LineChart' },
];

export const DIFFERENTIALS: Differential[] = [
  {
    icon: 'Target',
    title: 'Ensino Prático',
    description: 'Metodologia focada em aplicação real. Aprenda fazendo, com projetos e cases do mercado.',
  },
  {
    icon: 'Users',
    title: 'Professores do Mercado',
    description: 'Consultores e especialistas atuantes em empresas nacionais e internacionais.',
  },
  {
    icon: 'Briefcase',
    title: 'Foco em Empregabilidade',
    description: 'Conteúdo alinhado com as demandas do mercado de trabalho em dados e tecnologia.',
  },
  {
    icon: 'RefreshCw',
    title: 'Conteúdo Atualizado',
    description: 'Material constantemente revisado para acompanhar as tendências e inovações do setor.',
  },
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    title: 'Missão',
    description: 'Transformar vidas através da educação em dados e tecnologia, capacitando profissionais para o mercado global.',
  },
  {
    title: 'Visão',
    description: 'Ser a referência em educação de dados no Brasil, reconhecida pela excelência e impacto na carreira dos alunos.',
  },
  {
    title: 'Valores',
    description: 'Excelência educacional, compromisso com resultados, inovação constante, ética e transparência.',
  },
];

export const IN_COMPANY_SERVICES: InCompanyService[] = [
  {
    title: 'Excel Corporativo',
    description: 'Do básico ao avançado, incluindo VBA e automação de processos.',
    icon: 'FileSpreadsheet',
  },
  {
    title: 'Power BI',
    description: 'Criação de dashboards e relatórios interativos para tomada de decisão.',
    icon: 'BarChart3',
  },
  {
    title: 'SQL Server',
    description: 'Consultas, manipulação e análise de dados em bancos relacionais.',
    icon: 'Database',
  },
  {
    title: 'Python para Dados',
    description: 'Análise de dados, automação e machine learning aplicados ao negócio.',
    icon: 'Code2',
  },
  {
    title: 'Microsoft Project',
    description: 'Gestão de projetos e planejamento estratégico com ferramentas profissionais.',
    icon: 'Gantt',
  },
  {
    title: 'Business Intelligence',
    description: 'Estratégias de BI e cultura data-driven para empresas.',
    icon: 'TrendingUp',
  },
];

export const POS_MODULES: Module[] = [
  {
    number: 1,
    title: 'Fundamentos de Dados',
    description: 'Conceitos essenciais de dados, bancos de dados e arquitetura de informação.',
  },
  {
    number: 2,
    title: 'Análise Estatística',
    description: 'Estatística aplicada à análise de dados e tomada de decisão.',
  },
  {
    number: 3,
    title: 'Business Intelligence',
    description: 'Estratégias de BI, KPIs e dashboards executivos.',
  },
  {
    number: 4,
    title: 'Visualização de Dados',
    description: 'Técnicas avançadas de storytelling com dados e Power BI.',
  },
  {
    number: 5,
    title: 'Big Data e Cloud',
    description: 'Arquiteturas de big data e soluções em nuvem.',
  },
  {
    number: 6,
    title: 'Machine Learning',
    description: 'Introdução a algoritmos de ML e IA aplicados a negócios.',
  },
  {
    number: 7,
    title: 'Gestão de Projetos de Dados',
    description: 'Metodologias ágeis e gestão de equipes de dados.',
  },
  {
    number: 8,
    title: 'Governança de Dados',
    description: 'LGPD, segurança e qualidade de dados corporativos.',
  },
];

export const DATA_ANALYTICS_MODULES: Module[] = [
  {
    number: 1,
    title: 'Excel Essentials',
    description: 'Fundamentos do Excel para análise de dados.',
  },
  {
    number: 2,
    title: 'Excel Expert',
    description: 'Funções avançadas, tabelas dinâmicas e Power Query.',
  },
  {
    number: 3,
    title: 'Power BI Fundamentos',
    description: 'Criação de relatórios e dashboards interativos.',
  },
  {
    number: 4,
    title: 'Power BI Avançado',
    description: 'DAX, modelagem de dados e otimização de performance.',
  },
  {
    number: 5,
    title: 'SQL Server',
    description: 'Consultas, joins, subqueries e manipulação de dados.',
  },
  {
    number: 6,
    title: 'Python para Análise de Dados',
    description: 'Pandas, NumPy e visualização com Matplotlib.',
  },
  {
    number: 7,
    title: 'Linguagem R',
    description: 'Análise estatística e visualização de dados com R.',
  },
  {
    number: 8,
    title: 'Estatística Aplicada',
    description: 'Conceitos estatísticos essenciais para análise de dados.',
  },
  {
    number: 9,
    title: 'Business Intelligence',
    description: 'Estratégias de BI e cultura data-driven.',
  },
  {
    number: 10,
    title: 'Visualização de Dados',
    description: 'Storytelling e design de dashboards eficazes.',
  },
  {
    number: 11,
    title: 'Projeto Integrador',
    description: 'Desenvolvimento de projeto completo de análise de dados.',
  },
  {
    number: 12,
    title: 'Preparação para o Mercado',
    description: 'Portfolio, LinkedIn e estratégias de carreira em dados.',
  },
];

export const FOUNDER_INFO = {
  name: 'Eduardo Yto',
  role: 'Fundador e CEO',
  bio: 'Com mais de 26 anos de experiência em educação e tecnologia, Eduardo Yto é referência em ensino de dados no Brasil. Especialista em Business Intelligence e Data Analytics, já capacitou mais de 100 mil profissionais e atende empresas em mais de 50 países.',
  experience: '26+ anos',
  specialization: 'Educação em Dados e BI',
};

export const IN_COMPANY_BENEFITS: Benefit[] = [
  {
    title: 'Aumento de Produtividade',
    description: 'Equipes capacitadas trabalham de forma mais eficiente e estratégica.',
  },
  {
    title: 'Decisões Baseadas em Dados',
    description: 'Cultura data-driven que transforma informação em vantagem competitiva.',
  },
  {
    title: 'ROI Mensurável',
    description: 'Resultados tangíveis em redução de custos e otimização de processos.',
  },
  {
    title: 'Retenção de Talentos',
    description: 'Investimento em capacitação aumenta engajamento e satisfação da equipe.',
  },
];

export const MARKET_DATA = {
  salaryRange: 'R$ 5.600 a R$ 21.900',
  source: 'Robert Half 2026',
  demand: 'Empresas ampliam contratações em tecnologia no Brasil',
  trends: ['IA', 'Análise de Dados', 'Cloud', 'Segurança'],
};