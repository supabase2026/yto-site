import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Users, Clock, CheckCircle2, MessageCircle, ChevronDown, ExternalLink, BookOpen, Video, Star } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK, MEC_URL } from '@/lib/index';
import { IMAGES } from '@/assets/images';

const courseInfo = [
  { icon: Clock, label: 'Duração', value: '09 meses' },
  { icon: BookOpen, label: 'Formato', value: 'Gravado + Ao vivo' },
  { icon: GraduationCap, label: 'Diploma', value: 'MEC Reconhecido' },
  { icon: Award, label: 'Certificação', value: 'Internacional' },
];

interface Discipline {
  title: string;
  contents: string[];
}

const disciplines: Discipline[] = [
  {
    title: 'AWS para Gestão de Dados',
    contents: [
      'Fundamentos de cloud computing com AWS',
      'Armazenamento e gerenciamento de dados na nuvem (S3, RDS, Redshift)',
      'Processamento de dados com AWS Glue e Lambda',
      'Segurança, permissões e boas práticas em ambientes cloud',
    ],
  },
  {
    title: 'Databricks + IA Generativa',
    contents: [
      'Introdução ao Databricks e Apache Spark',
      'Processamento distribuído de grandes volumes de dados',
      'Aplicações de IA Generativa no contexto de dados',
      'Integração com LLMs e pipelines de dados inteligentes',
    ],
  },
  {
    title: 'Data Visualization com Python',
    contents: [
      'Visualização de dados com Matplotlib, Seaborn e Plotly',
      'Criação de dashboards interativos com Dash e Streamlit',
      'Storytelling com dados: como comunicar insights visualmente',
      'Boas práticas de design para visualizações de dados',
    ],
  },
  {
    title: 'Empreendedorismo',
    contents: [
      'Mindset empreendedor aplicado à área de dados',
      'Criação de produtos e serviços baseados em dados',
      'Validação de hipóteses e modelo de negócios data-driven',
      'Cases reais de empreendedores em tecnologia e dados',
    ],
  },
  {
    title: 'Engenharia de Dados na Prática',
    contents: [
      'Arquitetura de pipelines de dados modernos',
      'ETL/ELT: extração, transformação e carga de dados',
      'Ferramentas de orquestração: Airflow e dbt',
      'Boas práticas de engenharia: versionamento, testes e documentação',
    ],
  },
  {
    title: 'Gestão de Projetos em Dados',
    contents: [
      'Metodologias ágeis aplicadas a projetos de dados (Scrum, Kanban)',
      'Definição de escopo, prazos e entregas em projetos de dados',
      'Comunicação com stakeholders e gestão de expectativas',
      'Ferramentas de gestão: MS Project, Jira e Trello',
    ],
  },
  {
    title: 'Governança de Dados',
    contents: [
      'Fundamentos de governança e qualidade de dados',
      'LGPD: conformidade, boas práticas e proteção de dados pessoais',
      'Catálogo de dados, linhagem e metadados',
      'Estruturação de políticas e processos de dados corporativos',
    ],
  },
  {
    title: 'Modelagem de Dados Avançada com SQL Server',
    contents: [
      'Modelagem relacional avançada: normalização e desnormalização',
      'Modelagem dimensional para Data Warehouse (Kimball)',
      'Stored procedures, triggers e funções no SQL Server',
      'Otimização de queries e performance em grandes bases de dados',
    ],
  },
];

const differentials = [
  {
    icon: Award,
    title: 'Diploma MEC Reconhecido',
    description: 'Certificação oficial reconhecida pelo Ministério da Educação, com validade em todo território nacional.',
  },
  {
    icon: Video,
    title: 'Aulas Gravadas + Ao Vivo',
    description: 'Combine flexibilidade de conteúdo gravado com interação em encontros ao vivo com professores especialistas.',
  },
  {
    icon: Users,
    title: 'Professores do Mercado',
    description: 'Corpo docente formado por consultores e profissionais atuantes em grandes empresas brasileiras e internacionais.',
  },
  {
    icon: Star,
    title: 'Mais de 200 Avaliações ⭐ 5 estrelas',
    description: 'Reconhecimento real de alunos que transformaram suas carreiras com o programa.',
  },
];

const targetAudience = [
  { title: 'Profissionais de TI', description: 'Desenvolvedores e analistas que desejam especialização em dados.' },
  { title: 'Gestores e Executivos', description: 'Líderes que querem tomar decisões estratégicas baseadas em dados.' },
  { title: 'Analistas de Negócios', description: 'Profissionais que trabalham com análise e buscam aprofundamento.' },
  { title: 'Empreendedores', description: 'Empresários que desejam implementar cultura data-driven.' },
];

function DisciplineAccordion({ discipline, index }: { discipline: Discipline; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="rounded-xl overflow-hidden"
      style={{
        border: '1px solid oklch(0.24 0.034 250 / 0.50)',
        background: open ? 'oklch(0.13 0.028 250 / 0.80)' : 'oklch(0.11 0.025 250 / 0.70)',
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-all"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{
              background: 'oklch(0.56 0.23 250 / 0.18)',
              color: 'oklch(0.72 0.20 250)',
              border: '1px solid oklch(0.56 0.23 250 / 0.30)',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm font-semibold" style={{ color: 'oklch(0.90 0.006 250)' }}>
            {discipline.title}
          </span>
        </div>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', color: 'oklch(0.56 0.23 250)' }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="h-px mb-4" style={{ background: 'oklch(0.24 0.034 250 / 0.40)' }} />
              <ul className="space-y-2">
                {discipline.contents.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.65 0.18 160)' }} />
                    <span className="text-sm" style={{ color: 'oklch(0.72 0.008 250)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PosGraduacao() {
  return (
    <Layout>
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--brand-navy)', minHeight: '80vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.PO_S_GRADUAC_A_O_EM_GESTA_O_ESTRATE_GICA_DE_DADOS_48}
            alt="Pós-graduação em gestão estratégica de dados reconhecida pelo MEC com foco em análise de dados e inteligência artificial"
            className="w-full h-full object-cover"
            style={{ opacity: 0.15, filter: 'blur(2px) brightness(0.7)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, oklch(0.09 0.030 250 / 0.82), var(--brand-navy) 85%)' }} />
        </div>

        <div className="orb orb-blue" style={{ width: '700px', height: '600px', top: '-30%', left: '-10%', opacity: 0.35 }} />
        <div className="orb orb-cyan" style={{ width: '400px', height: '400px', bottom: '-10%', right: '-5%', opacity: 0.22 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-25" />

        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="pill-badge-green pill-badge mb-8 inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> Reconhecido pelo MEC
            </span>

            <h1 className="hero-headline mb-4">
  <span style={{ color: 'oklch(0.93 0.006 250)' }}>
    Pós-Graduação em Gestão Estratégica de Dados
  </span>
</h1>

<h2 className="text-gradient text-2xl md:text-3xl font-semibold mb-6">
  Reconhecida pelo MEC e focada no mercado de dados
</h2>

            <p className="hero-sub mx-auto mb-10 max-w-3xl">
              Pós-graduação em dados reconhecida pelo MEC, com foco em análise de dados, engenharia de dados,
              inteligência artificial e gestão estratégica. Desenvolva habilidades práticas e prepare-se para atuar
              com dados em empresas, projetos e decisões estratégicas em apenas 9 meses.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {courseInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 0.15 + index * 0.08 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl"
                  style={{
                    background: 'oklch(0.14 0.028 250 / 0.85)',
                    border: '1px solid oklch(0.30 0.045 250 / 0.45)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <info.icon className="w-4 h-4" style={{ color: 'oklch(0.72 0.20 250)' }} />
                  <div className="text-left">
                    <div className="text-xs" style={{ color: 'oklch(0.52 0.010 250)' }}>{info.label}</div>
                    <div className="text-sm font-semibold" style={{ color: 'oklch(0.88 0.006 250)' }}>{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-3.5">
                <MessageCircle className="w-5 h-5" /> Quero saber mais
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3.5">
                Matricule-se agora
              </a>
            </div>

            <div className="mt-6">
              <a
                href={MEC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs transition-colors"
                style={{ color: 'oklch(0.60 0.10 160)' }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verificar reconhecimento no e-MEC
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Por que escolher</span>
            <h2 className="section-headline mb-4">
              Diferenciais da Pós-Graduação em Gestão Estratégica de Dados
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Conheça os diferenciais da pós-graduação em dados do Grupo Yto Nihon, desenvolvida para formar
              profissionais preparados para atuar com análise, engenharia e estratégia de dados no mercado atual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 text-center"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.24 0.034 250 / 0.50)' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                >
                  <item.icon className="w-7 h-7" style={{ color: 'oklch(0.72 0.20 250)' }} />
                </div>
                <h3 className="text-base font-bold mb-3" style={{ color: 'oklch(0.90 0.006 250)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.60 0.010 250)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Grade Curricular</span>
            <h2 className="section-headline mb-4">
              Grade curricular da Pós-Graduação em Dados
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              A pós-graduação em gestão estratégica de dados oferece uma grade completa com disciplinas voltadas
              para análise de dados, engenharia de dados, cloud computing, inteligência artificial e governança de dados.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-3">
            {disciplines.map((discipline, i) => (
              <DisciplineAccordion key={discipline.title} discipline={discipline} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mt-8 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: 'oklch(0.56 0.23 250 / 0.07)',
              border: '1px solid oklch(0.56 0.23 250 / 0.22)',
              boxShadow: '0 4px 24px oklch(0.04 0.010 250 / 0.30)',
            }}
          >
            <div>
              <p className="text-base font-semibold mb-1" style={{ color: 'oklch(0.92 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                Quer ver a grade completa da pós-graduação em dados?
              </p>
              <p className="text-sm" style={{ color: 'oklch(0.58 0.012 250)' }}>
                Fale com nossa equipe e receba o conteúdo detalhado da pós-graduação em gestão estratégica de dados diretamente no seu WhatsApp.
              </p>
            </div>

            <a
              href="https://wa.me/5511910704164?text=Ol%C3%A1!%20Gostaria%20de%20receber%20a%20grade%20curricular%20completa%20da%20P%C3%B3s-Gradua%C3%A7%C3%A3o%20em%20Gest%C3%A3o%20Estrat%C3%A9gica%20de%20Dados."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold flex-shrink-0 transition-all duration-200 hover:scale-105"
              style={{
                background: '#25D366',
                color: 'white',
                boxShadow: '0 6px 20px rgba(37,211,102,0.30)',
                whiteSpace: 'nowrap',
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar grade completa
            </a>
          </motion.div>

          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-3.5">
                <MessageCircle className="w-5 h-5" /> Falar com especialista
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5">
                Matricule-se agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Público-Alvo</span>
            <h2 className="section-headline mb-4">
              Para quem é a pós-graduação em dados
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl p-6 text-center"
                style={{ background: 'oklch(0.13 0.028 250 / 0.70)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
              >
                <CheckCircle2 className="w-10 h-10 mx-auto mb-4" style={{ color: 'oklch(0.65 0.18 160)' }} />
                <h3 className="text-base font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)' }}>
                  {audience.title}
                </h3>
                <p className="text-sm" style={{ color: 'oklch(0.58 0.010 250)' }}>
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-24 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, oklch(0.14 0.040 250) 0%, oklch(0.10 0.028 250) 100%)' }}
      >
        <div className="orb orb-blue" style={{ width: '600px', height: '500px', top: '-40%', left: '50%', transform: 'translateX(-50%)', opacity: 0.25 }} />
        <div className="container-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'oklch(0.93 0.006 250)', fontFamily: 'var(--font-heading)' }}
            >
              Comece sua pós-graduação em dados agora
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'oklch(0.62 0.010 250)' }}>
              Garanta sua vaga na pós-graduação em gestão estratégica de dados e desenvolva habilidades essenciais
              para atuar com dados, tecnologia e inteligência de negócios em empresas e projetos reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-10 py-4">
                <MessageCircle className="w-5 h-5" /> Quero saber mais
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
                Matricule-se agora
              </a>
            </div>
            <div className="mt-6">
              <a
                href={MEC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs"
                style={{ color: 'oklch(0.55 0.010 250)' }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Consultar credenciamento no e-MEC
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
