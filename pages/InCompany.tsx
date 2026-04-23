import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { IMAGES } from '@/assets/images';
import { WHATSAPP_LINK } from '@/lib/index';
import {
  FileSpreadsheet, BarChart3, Database, Code2, TrendingUp,
  CheckCircle2, Building2, Users, Target, ChevronLeft, ChevronRight,
  MessageCircle, Send, Award, Zap
} from 'lucide-react';

const services = [
  {
    icon: FileSpreadsheet,
    title: 'Excel Corporativo',
    description: 'Do básico ao avançado com VBA, automação e Power Query. Para equipes que trabalham com dados no dia a dia.',
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    description: 'Dashboards interativos, relatórios executivos e cultura data-driven para tomada de decisão estratégica.',
  },
  {
    icon: Database,
    title: 'SQL Server',
    description: 'Consultas, manipulação e análise de dados em bancos relacionais. Aplicado ao contexto da sua empresa.',
  },
  {
    icon: Code2,
    title: 'Python para Dados',
    description: 'Análise de dados, automação de processos e machine learning aplicados ao negócio.',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    description: 'Estratégias de BI, cultura data-driven e governança de dados corporativos.',
  },
  {
    icon: Target,
    title: 'Microsoft Project',
    description: 'Gestão de projetos, planejamento estratégico e controle de cronogramas com ferramentas profissionais.',
  },
];

const processSteps = [
  { number: '01', title: 'Diagnóstico', description: 'Analisamos as necessidades, nível da equipe e objetivos específicos da sua empresa.' },
  { number: '02', title: 'Proposta', description: 'Desenvolvemos uma solução personalizada com cronograma e metodologia adequados.' },
  { number: '03', title: 'Execução', description: 'Treinamento prático com professores especialistas, presencial ou online.' },
  { number: '04', title: 'Resultado', description: 'Mensuração de resultados e acompanhamento contínuo para garantir o ROI.' },
];

const clientCompanies = [
  'Grupo HDI', 'Europ Assistance', 'Zara', 'Arkema',
  'Martin Brower', 'McDonald\'s', 'Votorantim Cimentos', 'Aché',
  'Supera RX', 'Souza Cruz', 'Reckitt', 'MPD Engenharia',
  'Grupo Gaia', 'EspaçoLaser', 'Samech', 'Bradesco Seguros',
];

const benefits = [
  { icon: Zap, title: 'Aumento de Produtividade', description: 'Equipes capacitadas trabalham de forma mais eficiente e estratégica.' },
  { icon: BarChart3, title: 'Decisões Baseadas em Dados', description: 'Cultura data-driven que transforma informação em vantagem competitiva.' },
  { icon: Award, title: 'ROI Mensurável', description: 'Resultados tangíveis em redução de custos e otimização de processos.' },
  { icon: Users, title: 'Retenção de Talentos', description: 'Investimento em capacitação aumenta engajamento e satisfação da equipe.' },
];

const trainingPhotos = [
  {
    src: IMAGES.SOUZA_CRUZ_IN_COMPANY_POWER_BI_36,
    alt: 'Treinamento In Company – Souza Cruz',
    company: 'Souza Cruz',
    tool: 'Power BI',
    title: 'Souza Cruz – Power BI',
    description: 'Treinamento de Power BI realizado para profissionais da Souza Cruz, com foco em análise de dados e tomada de decisão.',
  },
  {
    src: IMAGES.TURMA_FECHADA_NO_ESCRITO_RIO_DO_GRUPO_YTO_NIHON_39,
    alt: 'Turma fechada no escritório do Grupo Yto Nihon',
    company: 'Grupo Yto Nihon',
    tool: 'Excel',
    title: 'Turma Fechada – Escritório Yto Nihon',
    description: 'Turma in company realizada diretamente no escritório do Grupo Yto Nihon, com treinamento presencial intensivo e aplicado.',
  },
  {
    src: IMAGES.GRUPO_GAIA_IN_COMAPANY_EXCEL_37,
    alt: 'Treinamento In Company – Grupo Gaia',
    company: 'Grupo Gaia',
    tool: 'Excel',
    title: 'Grupo Gaia – Excel',
    description: 'Capacitação em Excel para equipes do Grupo Gaia, com ênfase em produtividade operacional e automatização de relatórios.',
  },
  {
    src: IMAGES.GRUPO_HDI_POWER_BI_46,
    alt: 'Treinamento In Company – Grupo HDI',
    company: 'Grupo HDI',
    tool: 'Power BI',
    title: 'Grupo HDI – Power BI',
    description: 'Treinamento de Power BI para o Grupo HDI, estruturando dashboards executivos para suporte à tomada de decisão estratégica.',
  },
  {
    src: IMAGES.ARKEMA_IN_COMPANY_EXCEL_43,
    alt: 'Treinamento In Company – Arkema',
    company: 'Arkema',
    tool: 'Excel',
    title: 'Arkema – Excel',
    description: 'Formação em Excel para profissionais da Arkema, com foco em automação de processos e análise de dados industriais.',
  },
  {
    src: IMAGES.RECKITT_POWER_BI_44,
    alt: 'Treinamento In Company – Reckitt',
    company: 'Reckitt',
    tool: 'Power BI',
    title: 'Reckitt – Power BI',
    description: 'Treinamento de Power BI realizado para a Reckitt, com foco na construção de relatórios estratégicos e visualização de KPIs.',
  },
  {
    src: IMAGES.MPD_ENGENHARIA_IN_COMPANY_EXCEL_45,
    alt: 'Treinamento In Company – MPD Engenharia',
    company: 'MPD Engenharia',
    tool: 'Excel',
    title: 'MPD Engenharia – Excel',
    description: 'Capacitação em Excel para a MPD Engenharia, com aplicação prática em controle de projetos, cronogramas e gestão de dados.',
  },
  {
    src: IMAGES.GRUPO_HDI_EXCEL_47,
    alt: 'Treinamento In Company – Grupo HDI Excel',
    company: 'Grupo HDI',
    tool: 'Excel',
    title: 'Grupo HDI – Excel',
    description: 'Treinamento de Excel para o time do Grupo HDI, focado em produtividade, organização de informações e análise de dados.',
  },
  {
    src: IMAGES.SAMECH_EXCEL_42,
    alt: 'Treinamento In Company – Samech',
    company: 'Samech',
    tool: 'Excel',
    title: 'Samech – Excel',
    description: 'Formação em Excel para profissionais da Samech, aplicando ferramentas de análise e controle de dados no dia a dia operacional.',
  },
  {
    src: IMAGES.ESPAC_OLASER_IN_COMPANY_EXCEL_41,
    alt: 'Treinamento In Company – EspaçoLaser',
    company: 'EspaçoLaser',
    tool: 'Excel',
    title: 'EspaçoLaser – Excel',
    description: 'Treinamento de Excel realizado para equipes da EspaçoLaser, com foco em melhoria de processos e tomada de decisão baseada em dados.',
  },
];

function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const total = trainingPhotos.length;
  const photo = trainingPhotos[current];

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Tool badge color: blue for Power BI, green for Excel
  const toolColor = photo.tool === 'Power BI'
    ? { bg: 'oklch(0.56 0.23 250 / 0.85)', text: 'oklch(0.92 0.010 250)' }
    : { bg: 'oklch(0.42 0.18 155 / 0.85)', text: 'oklch(0.92 0.010 155)' };

  return (
    <div className="relative">
      {/* Main photo + overlay */}
      <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '16/10' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={photo.src}
            alt={photo.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.70) saturate(0.90)' }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, oklch(0.05 0.020 250 / 0.95) 0%, oklch(0.05 0.020 250 / 0.40) 45%, transparent 100%)' }}
        />

        {/* Tool badge — top right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`badge-${current}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
            style={{ background: toolColor.bg, color: toolColor.text, backdropFilter: 'blur(8px)', border: '1px solid oklch(1 0 0 / 0.15)' }}
          >
            {photo.tool}
          </motion.div>
        </AnimatePresence>

        {/* Text block — bottom overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-10"
          >
            {/* Counter badge */}
            <p className="text-xs font-medium mb-2" style={{ color: 'oklch(0.68 0.14 250)' }}>
              Case {current + 1} de {total}
            </p>
            {/* Company + tool title */}
            <h3
              className="text-xl font-bold leading-tight mb-1.5"
              style={{ color: 'oklch(0.97 0.004 250)', fontFamily: 'var(--font-heading)', textShadow: '0 1px 6px oklch(0 0 0 / 0.6)' }}
            >
              {photo.title}
            </h3>
            {/* Description */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'oklch(0.82 0.006 250)', textShadow: '0 1px 4px oklch(0 0 0 / 0.5)' }}
            >
              {photo.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Arrow controls — positioned over the image */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'oklch(0.10 0.026 250 / 0.80)', border: '1px solid oklch(0.30 0.040 250 / 0.60)', backdropFilter: 'blur(12px)', color: 'oklch(0.88 0.006 250)' }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Próximo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'oklch(0.10 0.026 250 / 0.80)', border: '1px solid oklch(0.30 0.040 250 / 0.60)', backdropFilter: 'blur(12px)', color: 'oklch(0.88 0.006 250)' }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {trainingPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para foto ${i + 1}`}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              background: i === current ? 'oklch(0.65 0.20 250)' : 'oklch(0.28 0.040 250 / 0.60)',
            }}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {trainingPhotos.map((p, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="flex-shrink-0 rounded-lg overflow-hidden transition-all"
            style={{
              width: '72px',
              height: '52px',
              opacity: i === current ? 1 : 0.45,
              border: i === current ? '2px solid oklch(0.65 0.20 250)' : '2px solid transparent',
              outline: 'none',
            }}
          >
            <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function InCompany() {
  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--brand-navy)', minHeight: '80vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.SOUZA_CRUZ_IN_COMPANY_POWER_BI_36}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.15, filter: 'blur(3px) brightness(0.6)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, oklch(0.09 0.030 250 / 0.85), var(--brand-navy) 90%)' }} />
        </div>
        <div className="orb orb-blue" style={{ width: '600px', height: '550px', top: '-20%', left: '-8%', opacity: 0.30 }} />
        <div className="orb" style={{ width: '350px', height: '350px', bottom: '-10%', right: '5%', background: 'oklch(0.55 0.22 170)', opacity: 0.15, borderRadius: '50%', filter: 'blur(80px)', position: 'absolute' }} />
        <div className="bg-dot-grid absolute inset-0 opacity-25" />

        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span className="pill-badge pill-badge-green mb-8 inline-flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> Soluções Corporativas
            </span>
            <h1 className="hero-headline mb-6">
              <span style={{ color: 'oklch(0.93 0.006 250)' }}>Treinamentos</span><br />
              <span className="text-gradient">In Company</span>
            </h1>
            <p className="hero-sub mx-auto mb-10 max-w-3xl">
              Capacite sua equipe com os melhores professores de dados do Brasil. Treinamentos personalizados, presenciais ou online, para resultados reais e mensuráveis.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['+200 empresas atendidas', '26 anos de experiência', 'Presencial ou Online', 'Conteúdo personalizado'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: 'oklch(0.14 0.028 250 / 0.85)', border: '1px solid oklch(0.28 0.040 250 / 0.45)', color: 'oklch(0.78 0.010 250)' }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-3.5">
                <MessageCircle className="w-5 h-5" /> Solicitar proposta
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3.5">
                <Send className="w-5 h-5" /> Falar com especialista
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ GALERIA DE TREINAMENTOS ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Galeria</span>
            <h2 className="section-headline mb-4">Treinamentos Realizados</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Mais de 200 empresas já treinaram suas equipes com o Grupo Yto Nihon
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <PhotoCarousel />
          </div>
        </div>
      </section>

      {/* ═══ EMPRESAS ATENDIDAS ═══ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Clientes</span>
            <h2 className="section-headline mb-4">Empresas que Confiam em Nós</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Grandes marcas nacionais e internacionais já capacitaram suas equipes com o Grupo Yto Nihon
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {clientCompanies.map((company, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.24 0.034 250 / 0.50)' }}
              >
                <Building2 className="w-4 h-4 flex-shrink-0" style={{ color: 'oklch(0.56 0.20 250)' }} />
                <span className="text-sm font-medium" style={{ color: 'oklch(0.80 0.008 250)' }}>{company}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm" style={{ color: 'oklch(0.48 0.008 250)' }}>
              + dezenas de outras empresas atendidas em todo o Brasil
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CURSOS DISPONÍVEIS ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Portfólio</span>
            <h2 className="section-headline mb-4">Cursos e Ferramentas</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Treinamentos personalizados nas principais ferramentas de dados e tecnologia do mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-6 transition-all duration-200"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.56 0.23 250 / 0.40)';
                  (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.15 0.030 250 / 0.85)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.22 0.032 250 / 0.50)';
                  (e.currentTarget as HTMLDivElement).style.background = 'oklch(0.13 0.028 250 / 0.80)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                >
                  <service.icon className="w-6 h-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.010 250)' }}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESSO ═══ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Como funciona</span>
            <h2 className="section-headline mb-4">Nosso Processo</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center rounded-2xl p-6"
                style={{ background: 'oklch(0.12 0.026 250 / 0.70)', border: '1px solid oklch(0.20 0.030 250 / 0.50)' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-black"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.30)', color: 'oklch(0.72 0.20 250)', fontFamily: 'var(--font-heading)' }}
                >
                  {step.number}
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.56 0.010 250)' }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENEFÍCIOS ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Resultados</span>
            <h2 className="section-headline mb-4">Benefícios para sua Empresa</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl p-6"
                style={{ background: 'oklch(0.13 0.028 250 / 0.70)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                >
                  <b.icon className="w-6 h-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: 'oklch(0.90 0.006 250)' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.56 0.010 250)' }}>{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.13 0.040 250) 0%, oklch(0.09 0.026 250) 100%)' }}
      >
        <div className="orb orb-blue" style={{ width: '600px', height: '500px', top: '-40%', left: '50%', transform: 'translateX(-50%)', opacity: 0.20 }} />
        <div className="container-xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-16 h-16 mx-auto mb-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'oklch(0.93 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                Pronto para capacitar sua equipe?
              </h2>
              <p className="text-lg mb-8" style={{ color: 'oklch(0.60 0.010 250)' }}>
                Entre em contato com nossa equipe de especialistas e receba uma proposta personalizada para a necessidade da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-10 py-4">
                  <MessageCircle className="w-5 h-5" /> Solicitar proposta
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
                  <Send className="w-5 h-5" /> Falar com especialista
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
