import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  TrendingUp,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
  BarChart3,
  FileSpreadsheet,
  CalendarDays,
  Target,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
  ClipboardCheck,
  Sparkles,
  MapPin,
  Quote,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';

const WHATSAPP_PROPOSTA =
  'https://wa.me/5511910704164?text=Ol%C3%A1!%20Tenho%20interesse%20em%20treinamentos%20corporativos%20para%20minha%20empresa.%20Gostaria%20de%20receber%20uma%20proposta.';

const images = {
  hero: '/images/incompany/incompany-hero-yto.jpeg',
  excel01: '/images/incompany/incompany-excel-empresa-01.jpeg',
  excel02: '/images/incompany/incompany-excel-empresa-02.jpeg',
  powerbi01: '/images/incompany/incompany-powerbi-empresa-01.jpeg',
  msproject01: '/images/incompany/incompany-msproject-empresa-01.jpeg',
  turma01: '/images/incompany/incompany-turma-corporativa-01.jpeg',
  aula01: '/images/incompany/incompany-aula-presencial-01.jpeg',
  eduardo01: '/images/incompany/incompany-professor-eduardo-01.jpeg',
};
const stats = [
  { value: '+100.000', label: 'alunos impactados' },
  { value: '+200', label: 'empresas atendidas' },
  { value: '26+', label: 'anos de experiência' },
  { value: 'Brasil e exterior', label: 'alunos em diversos países' },
];

const pains = [
  'Relatórios manuais que tomam tempo da equipe',
  'Planilhas soltas, sem padrão e difíceis de auditar',
  'Dependência de uma única pessoa que “sabe mexer” no Excel',
  'Dashboards inexistentes, confusos ou pouco confiáveis',
  'Projetos atrasando por falta de controle e acompanhamento',
  'Equipe com ferramentas modernas, mas usando só o básico',
];

const trainings = [
  {
    icon: FileSpreadsheet,
    title: 'Excel para Empresas',
    desc: 'Do básico ao avançado, com fórmulas, tabelas dinâmicas, dashboards, Power Query e automação aplicada à rotina da equipe.',
    image: images.excel01,
  },
  {
    icon: BarChart3,
    title: 'Power BI para Empresas',
    desc: 'Criação de dashboards, indicadores, relatórios gerenciais e análise visual para tomada de decisão.',
    image: images.powerbi01,
  },
  {
    icon: CalendarDays,
    title: 'MS Project para Empresas',
    desc: 'Cronogramas, recursos, linha de base, acompanhamento, controle e gestão profissional de projetos.',
    image: images.msproject01,
  },
];

const companies = [
  'Grupo HDI',
  'Europ Assistance',
  "McDonald's",
  'Votorantim Cimentos',
  'Arkema',
  'Martin Brower',
  'Zara',
  'Aché',
  'Supera RX',
  'Bradesco Seguros',
  'Reckitt',
  'MPD Engenharia',
  'Grupo Gaia',
  'Souza Cruz',
  'EspaçoLaser',
  'Samech',
];

const testimonials = [
  {
    text: 'O treinamento foi conduzido de forma prática, com exemplos próximos da nossa rotina.',
    name: 'Equipe corporativa',
  },
  {
    text: 'A equipe conseguiu aplicar os recursos apresentados já no dia a dia.',
    name: 'Participante de treinamento',
  },
  {
    text: 'O conteúdo foi objetivo, claro e adaptado ao nível dos participantes.',
    name: 'Gestor de área',
  },
];

const gallery = [
  { src: images.turma01, label: 'Turma corporativa' },
  { src: images.aula01, label: 'Aula presencial' },
  { src: images.excel02, label: 'Treinamento de Excel' },
  { src: images.powerbi01, label: 'Treinamento de Power BI' },
  { src: images.msproject01, label: 'Treinamento de MS Project' },
  { src: images.eduardo01, label: 'Instrutor em ação' },
];

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos o nível da equipe, os desafios da empresa e quais resultados o treinamento precisa gerar.',
  },
  {
    num: '02',
    title: 'Proposta sob medida',
    desc: 'Definimos conteúdo, carga horária, formato, quantidade de participantes e melhor metodologia.',
  },
  {
    num: '03',
    title: 'Treinamento prático',
    desc: 'As aulas são conduzidas com exercícios, exemplos reais e aplicação direta na rotina profissional.',
  },
  {
    num: '04',
    title: 'Evolução da equipe',
    desc: 'A empresa ganha mais produtividade, padronização, autonomia e capacidade de análise.',
  },
];

const faqs = [
  {
    question: 'Os treinamentos podem ser personalizados?',
    answer:
      'Sim. A capacitação pode ser adaptada ao nível da equipe, área de atuação, rotina da empresa e objetivos do negócio.',
  },
  {
    question: 'Vocês fazem treinamento presencial?',
    answer:
      'Sim. Atendemos no formato presencial, online ao vivo ou híbrido, conforme a necessidade da empresa.',
  },
  {
    question: 'Vocês atendem Barueri, Alphaville e região?',
    answer:
      'Sim. Atendemos empresas em Barueri, Alphaville, Osasco, São Paulo e também empresas de outras regiões no formato online ao vivo.',
  },
  {
    question: 'Os participantes recebem certificado?',
    answer:
      'Sim. Os participantes podem receber certificado conforme a carga horária e o treinamento contratado.',
  },
];

export default function ParaEmpresas() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'oklch(0.07 0.018 250)',
          paddingTop: '6rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={images.hero}
            alt="Treinamento in company realizado pelo Grupo Yto Nihon"
            className="w-full h-full object-cover"
            style={{ opacity: 0.16, filter: 'grayscale(20%) brightness(0.65)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, oklch(0.07 0.018 250) 0%, oklch(0.07 0.018 250 / 0.94) 42%, oklch(0.07 0.018 250 / 0.70) 100%)',
            }}
          />
        </div>

        <div className="bg-dot-grid absolute inset-0 opacity-20" />

        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7"
                style={{
                  background: 'oklch(0.56 0.23 250 / 0.12)',
                  border: '1px solid oklch(0.56 0.23 250 / 0.28)',
                  color: 'oklch(0.72 0.18 250)',
                }}
              >
                <Building2 className="w-3.5 h-3.5" />
                Treinamentos in company para empresas
              </span>

              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2.3rem, 4.8vw, 4rem)',
                  color: 'oklch(0.96 0.006 250)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Sua equipe mais produtiva em{' '}
                <span className="text-gradient">Excel, Power BI e MS Project</span>
              </h1>

              <p className="text-lg mb-9 max-w-2xl" style={{ color: 'oklch(0.68 0.012 250)', lineHeight: 1.75 }}>
                Treinamentos corporativos práticos, presenciais ou online ao vivo, para empresas que precisam reduzir retrabalho,
                melhorar relatórios, controlar projetos e transformar dados em decisões.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={WHATSAPP_PROPOSTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'oklch(0.56 0.23 250)',
                    color: 'white',
                    boxShadow: '0 8px 24px oklch(0.56 0.23 250 / 0.35)',
                  }}
                >
                  Solicitar proposta <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                  style={{
                    background: 'rgba(37,211,102,0.12)',
                    border: '1.5px solid rgba(37,211,102,0.35)',
                    color: '#25D366',
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {['Presencial ou online ao vivo', 'Conteúdo personalizado', 'Certificado para participantes'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 text-sm" style={{ color: 'oklch(0.62 0.012 250)' }}>
                    <CheckCircle2 className="w-4 h-4" style={{ color: 'oklch(0.62 0.18 160)' }} />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="hidden lg:block"
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  border: '1px solid oklch(0.24 0.034 250 / 0.60)',
                  boxShadow: '0 24px 80px oklch(0 0 0 / 0.45)',
                }}
              >
                <img
                  src={images.eduardo01}
                  alt="Eduardo Yto ministrando treinamento corporativo"
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'oklch(0.10 0.022 250)', borderTop: '1px solid oklch(0.16 0.026 250 / 0.50)' }}>
        <div className="container-xl py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl font-bold mb-1" style={{ color: 'oklch(0.72 0.20 250)', fontFamily: 'var(--font-heading)' }}>
                  {s.value}
                </p>
                <p className="text-sm" style={{ color: 'oklch(0.55 0.010 250)' }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DORES */}
      <section className="section-pad" style={{ background: 'oklch(0.08 0.020 250)' }}>
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="section-tag">Sinais de alerta</span>
            <h2 className="section-headline mb-4">Sua empresa precisa treinar a equipe se...</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.58 0.010 250)', lineHeight: 1.8 }}>
              Quando a operação depende de improviso, planilhas frágeis e relatórios manuais, a produtividade escorre pelos dedos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pains.map((pain, i) => (
              <motion.div
                key={pain}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl p-6"
                style={{
                  background: 'oklch(0.12 0.025 250 / 0.90)',
                  border: '1px solid oklch(0.22 0.032 250 / 0.50)',
                }}
              >
                <AlertTriangle className="w-6 h-6 mb-4" style={{ color: 'oklch(0.76 0.18 75)' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.68 0.012 250)' }}>
                  {pain}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TREINAMENTOS */}
      <section className="section-pad" style={{ background: 'oklch(0.11 0.024 250)' }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-tag">Carros-chefe</span>
            <h2 className="section-headline mb-4">Treinamentos que mais geram impacto dentro das empresas</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)', lineHeight: 1.8 }}>
              Foco nos treinamentos com maior demanda corporativa e aplicação direta no dia a dia.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-7">
            {trainings.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.90)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.55)',
                }}
              >
                <div className="h-52 overflow-hidden">
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>

                <div className="p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: 'oklch(0.56 0.23 250 / 0.12)',
                      border: '1px solid oklch(0.56 0.23 250 / 0.22)',
                    }}
                  >
                    <t.icon className="w-6 h-6" style={{ color: 'oklch(0.68 0.20 250)' }} />
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: 'oklch(0.92 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                    {t.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'oklch(0.58 0.010 250)' }}>
                    {t.desc}
                  </p>

                  <a href={WHATSAPP_PROPOSTA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'oklch(0.72 0.18 250)' }}>
                    Solicitar proposta <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="section-pad" style={{ background: 'oklch(0.08 0.020 250)' }}>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div
              className="rounded-3xl p-8"
              style={{
                background: 'oklch(0.12 0.025 250 / 0.90)',
                border: '1px solid oklch(0.24 0.034 250 / 0.50)',
              }}
            >
              <span className="section-tag">Antes</span>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'oklch(0.94 0.006 250)' }}>
                Quando a equipe trabalha no improviso
              </h2>

              {['Planilhas sem padrão', 'Relatórios manuais', 'Retrabalho constante', 'Baixa autonomia da equipe'].map((item) => (
                <p key={item} className="flex items-center gap-3 mb-4 text-sm" style={{ color: 'oklch(0.62 0.012 250)' }}>
                  <AlertTriangle className="w-4 h-4" style={{ color: 'oklch(0.76 0.18 75)' }} />
                  {item}
                </p>
              ))}
            </div>

            <div
              className="rounded-3xl p-8"
              style={{
                background: 'linear-gradient(135deg, oklch(0.13 0.040 250), oklch(0.10 0.024 250))',
                border: '1px solid oklch(0.56 0.23 250 / 0.35)',
                boxShadow: '0 18px 60px oklch(0.56 0.23 250 / 0.10)',
              }}
            >
              <span className="section-tag">Depois</span>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'oklch(0.94 0.006 250)' }}>
                Quando a equipe é treinada com método
              </h2>

              {['Processos mais organizados', 'Relatórios mais confiáveis', 'Mais produtividade', 'Decisões apoiadas por dados'].map((item) => (
                <p key={item} className="flex items-center gap-3 mb-4 text-sm" style={{ color: 'oklch(0.70 0.012 250)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'oklch(0.62 0.18 160)' }} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MS PROJECT DESTAQUE */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.022 250)' }}>
        <div className="container-xl">
          <div
            className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl overflow-hidden"
            style={{
              background: 'oklch(0.13 0.026 250 / 0.90)',
              border: '1px solid oklch(0.56 0.23 250 / 0.28)',
            }}
          >
            <div className="p-8 lg:p-12">
              <span className="section-tag">Diferencial competitivo</span>
              <h2 className="section-headline mb-5">MS Project para empresas que precisam controlar projetos de verdade</h2>
              <p className="text-base mb-6" style={{ color: 'oklch(0.62 0.012 250)', lineHeight: 1.8 }}>
                O MS Project é uma das ferramentas mais fortes para planejamento, cronograma, controle de recursos,
                linha de base e acompanhamento de projetos. É também uma das áreas onde o Grupo Yto Nihon possui forte experiência prática.
              </p>

              <div className="space-y-3 mb-8">
                {['Cronogramas profissionais', 'Controle de recursos', 'Linha de base', 'Acompanhamento de avanço físico', 'Relatórios de projeto'].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm" style={{ color: 'oklch(0.66 0.012 250)' }}>
                    <ClipboardCheck className="w-4 h-4" style={{ color: 'oklch(0.72 0.18 250)' }} />
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={WHATSAPP_PROPOSTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'oklch(0.56 0.23 250)',
                  color: 'white',
                }}
              >
                Quero treinamento de MS Project <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="h-full min-h-[420px]">
              <img src={images.msproject01} alt="Treinamento de MS Project para empresas" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-tag">Metodologia</span>
            <h2 className="section-headline mb-4">Como funciona o treinamento corporativo</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6"
                style={{
                  background: 'oklch(0.12 0.025 250 / 0.90)',
                  border: '1px solid oklch(0.22 0.032 250 / 0.50)',
                }}
              >
                <span className="text-4xl font-black block mb-4" style={{ color: 'oklch(0.56 0.23 250 / 0.25)' }}>
                  {step.num}
                </span>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'oklch(0.92 0.006 250)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.56 0.010 250)' }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRESAS */}
      <section className="section-pad" style={{ background: 'oklch(0.11 0.024 250)' }}>
        <div className="container-xl text-center">
          <span className="section-tag">Autoridade</span>
          <h2 className="section-headline mb-4">Empresas que já confiaram no Grupo Yto Nihon</h2>
          <p className="text-base max-w-2xl mx-auto mb-10" style={{ color: 'oklch(0.56 0.010 250)', lineHeight: 1.8 }}>
            Experiência em treinamentos corporativos para diferentes segmentos, áreas e níveis de maturidade.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.80)',
                  border: '1px solid oklch(0.22 0.032 250 / 0.50)',
                  color: 'oklch(0.65 0.014 250)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="section-tag">Treinamentos reais</span>
            <h2 className="section-headline mb-4">Imagens de capacitações in company</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)', lineHeight: 1.8 }}>
              Aqui entram os registros reais dos treinamentos realizados pelo Grupo Yto Nihon.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative rounded-2xl overflow-hidden group"
                style={{ border: '1px solid oklch(0.20 0.028 250 / 0.50)', aspectRatio: '4/3' }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.07 0.018 250 / 0.85) 0%, transparent 58%)' }} />
                <span className="absolute bottom-3 left-4 text-sm font-semibold" style={{ color: 'oklch(0.90 0.006 250)' }}>
                  {img.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section-pad" style={{ background: 'oklch(0.08 0.020 250)' }}>
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="section-tag">Comentários</span>
            <h2 className="section-headline mb-4">O que as empresas buscam em nossos treinamentos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.text}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-7"
                style={{
                  background: 'oklch(0.12 0.025 250 / 0.90)',
                  border: '1px solid oklch(0.22 0.032 250 / 0.50)',
                }}
              >
                <Quote className="w-7 h-7 mb-5" style={{ color: 'oklch(0.68 0.20 250)' }} />
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'oklch(0.66 0.012 250)' }}>
                  “{t.text}”
                </p>
                <p className="text-sm font-bold" style={{ color: 'oklch(0.92 0.006 250)' }}>
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.022 250)' }}>
        <div className="container-xl">
          <div className="rounded-3xl p-8 lg:p-10 text-center" style={{ background: 'oklch(0.13 0.026 250 / 0.85)', border: '1px solid oklch(0.24 0.034 250 / 0.50)' }}>
            <MapPin className="w-8 h-8 mx-auto mb-5" style={{ color: 'oklch(0.68 0.20 250)' }} />
            <h2 className="section-headline mb-4">Atendimento em Barueri, Alphaville, Osasco, São Paulo e todo Brasil</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
              Atendemos empresas presencialmente na região de Barueri e Alphaville, além de treinamentos online ao vivo para empresas de qualquer localidade.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-tag">Dúvidas frequentes</span>
            <h2 className="section-headline mb-4">Perguntas sobre treinamentos para empresas</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl p-6"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <h3 className="text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'oklch(0.92 0.006 250)' }}>
                  <HelpCircle className="w-4 h-4" style={{ color: 'oklch(0.68 0.20 250)' }} />
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.010 250)' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="section-pad"
        style={{
          background: 'oklch(0.07 0.018 250)',
          borderTop: '1px solid oklch(0.16 0.026 250 / 0.50)',
        }}
      >
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-7"
              style={{
                background: 'oklch(0.56 0.23 250 / 0.12)',
                border: '1px solid oklch(0.56 0.23 250 / 0.28)',
              }}
            >
              <Sparkles className="w-7 h-7" style={{ color: 'oklch(0.68 0.20 250)' }} />
            </div>

            <h2 className="section-headline mb-5">Vamos montar um treinamento para sua empresa?</h2>

            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'oklch(0.58 0.012 250)', lineHeight: 1.7 }}>
              Solicite uma proposta personalizada para capacitar sua equipe em Excel, Power BI, MS Project ou outras soluções corporativas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_PROPOSTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'oklch(0.56 0.23 250)',
                  color: 'white',
                  boxShadow: '0 8px 28px oklch(0.56 0.23 250 / 0.35)',
                }}
              >
                Solicitar proposta <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                style={{
                  background: 'rgba(37,211,102,0.12)',
                  border: '1.5px solid rgba(37,211,102,0.35)',
                  color: '#25D366',
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
