export const ROUTE_PATHS = {
  HOME: '/',
  QUEM_SOMOS: '/quem-somos',
  SOLUCOES: '/solucoes',
  POS_GRADUACAO: '/pos-graduacao',
  YTO_ACADEMY: '/yto-academy',
  DATA_ANALYTICS: '/data-analytics',
  IN_COMPANY: '/in-company',
  MENTORIA_VIP: '/mentoria-vip',
  PARA_EMPRESAS: '/para-empresas',
  JORNADA: '/monte-sua-jornada',
  CONTATO: '/contato',
} as const;

export const WHATSAPP_LINK = 'https://wa.me/5511910704164?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20do%20Grupo%20Yto%20Nihon';
export const WHATSAPP_PHONE = '(11) 91070-4164';

export const LOGIN_URL = 'https://www.ytoacademy.com.br';
export const MEC_URL = 'https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTk4OA==/93916316abe23148507bd4c260e4b878/MzM1NTgx';
export const EDUZZ_URL = 'https://chk.eduzz.com/E9OOQN859B';

export const SOCIAL_MEDIA = {
  FACEBOOK: 'https://www.facebook.com/profyto',
  INSTAGRAM: 'https://www.instagram.com/ytonihon',
  LINKEDIN: 'https://www.linkedin.com/school/ytotreinamentos/?viewAsMember=true',
  YOUTUBE: 'https://www.youtube.com/ytonihontreinamentos',
} as const;

export const COMPANY_STATS = {
  STUDENTS: '+100.000',
  COMPANIES: '+200',
  COUNTRIES: '+50',
  YEARS: '26+',
  REVIEWS: '+200',
} as const;

export const COMPANY_INFO = {
  NAME: 'Grupo Yto Nihon',
  SLOGAN: 'Educação levada a sério!',
  EMAIL: 'yto@ytonihon.com.br',
  PHONE: '(11) 91070-4164',
  WHATSAPP: '5511910704164',
  ADDRESS: 'Praça Flor de Linho, 04 - Piso 02, Centro Comercial de Alphaville, Barueri/SP',
  ADDRESS_FULL: 'Praça Flor de Linho, 04 - Piso 02, Centro Comercial de Alphaville, Barueri/SP - CEP: 06453-007',
} as const;

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  name: string;
  course: string;
  text: string;
  initials: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  features: string[];
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Differential {
  icon: string;
  title: string;
  description: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface InCompanyService {
  title: string;
  description: string;
  icon: string;
}

export interface Module {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}
