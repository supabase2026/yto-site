// src/pages/ParaEmpresas.tsx

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
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';
import { IMAGES } from '@/assets/images';

const WHATSAPP_PROPOSTA =
  'https://wa.me/5511910704164?text=Ol%C3%A1!%20Tenho%20interesse%20em%20treinamentos%20corporativos%20para%20minha%20empresa.%20Gostaria%20de%20receber%20uma%20proposta.';

const stats = [
  { value: '+100.000', label: 'Profissionais capacitados' },
  { value: '+200', label: 'Empresas atendidas' },
  { value: '26+', label: 'Anos de experiência' },
  { value: 'Brasil e exterior', label: 'Alunos em diversos países' },
];

const mainTrainings = [
  {
    icon: FileSpreadsheet,
    title: 'Excel para Empresas',
    desc: 'Treinamentos práticos em Excel para equipes administrativas, financeiras, comerciais, RH e operações.',
  },
  {
    icon: BarChart3,
    title: 'Power BI para Empresas',
    desc: 'Criação de dashboards, indicadores, relatórios gerenciais e análise visual para tomada de decisão.',
  },
  {
    icon: CalendarDays,
    title: 'MS Project para Empresas',
    desc: 'Capacitação em cronogramas, recursos, linha de base, acompanhamento e controle de projetos.',
  },
];

const extras = [
  'SQL Server para análise de dados',
  'Inteligência Artificial aplicada ao trabalho',
  'Business Intelligence e cultura data-driven',
  'Gestão de projetos e produtividade',
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

const galleryImages = [
  { src: IMAGES.SOUZA_CRUZ_IN_COMPANY_POWER_BI_36, label: 'Power BI na Souza Cruz' },
  { src: IMAGES.BRADESCO_SEGUROS_IN_COMPANY_MS_PROJECT_38, label: 'MS Project na Bradesco Seguros' },
  { src: IMAGES.GRUPO_GAIA_IN_COMPANY_EXCEL_40, label: 'Excel no Grupo Gaia' },
  { src: IMAGES.ARKEMA_IN_COMPANY_EXCEL_43, label: 'Excel na Arkema' },
  { src: IMAGES.RECKITT_POWER_BI_44, label: 'Power BI na Reckitt' },
  { src: IMAGES.GRUPO_HDI_POWER_BI_46, label: 'Power BI no Grupo HDI' },
];

const steps = [
  {
    num: '01',
    title: 'Diagnóstico da necessidade',
    desc: 'Entendemos o nível da equipe, os desafios da empresa e os objetivos do treinamento.',
  },
  {
    num: '02',
    title: 'Proposta personalizada',
    desc: 'Montamos uma capacitação com carga horária, formato e conteúdo adequados à realidade da empresa.',
  },
  {
    num: '03',
    title: 'Treinamento prático',
    desc: 'As aulas são conduzidas com exemplos, exercícios e situações próximas da rotina dos colaboradores.',
  },
];

const faqs = [
  {
    question: 'O treinamento pode ser personalizado?',
    answer:
      'Sim. O conteúdo é adaptado ao nível da equipe, aos objetivos da empresa e às atividades realizadas no dia a dia.',
  },
  {
    question: 'O treinamento pode ser presencial?',
    answer:
      'Sim. Os treinamentos podem ser realizados presencialmente, online ao vivo ou em formato híbrido.',
  },
  {
    question: 'Vocês atendem empresas em Barueri e Alphaville?',
    answer:
      'Sim. O Grupo Yto Nihon atende empresas em Barueri, Alphaville, Osasco, São Paulo e também empresas de outras regiões no formato online ao vivo.',
  },
  {
    question: 'Os participantes recebem certificado?',
    answer:
      'Sim. Os participantes podem receber certificado conforme o treinamento contratado e a carga horária realizada.',
  },
];

export default function ParaEmpresas() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          background: 'oklch(0.08 0.018 250)',
          minHeight: '82vh',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.TURMA_FECHADA_NO_ESCRITO_RIO_DO_GRUPO_YTO_NIHON_39}
            alt="Treinamento corporativo realizado pelo Grupo Yto Nihon"
            className="w-full h-full object-cover"
            style={{ opacity: 0.14, filter: 'grayscale(30%) brightness(0.65)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, oklch(0.07 0.018 250 / 0.92), oklch(0.08 0.018 250) 88%)',
            }}
          />
        </div>

        <div className="bg-dot-grid absolute inset-0 opacity-20" />

        <div className="container-xl relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-7"
                style={{
                  background: 'oklch(0.56 0.23 250 / 0.12)',
                  border: '1px solid oklch(0.56 0.23 250 / 0.28)',
                  color: 'oklch(0.72 0.18 250)',
                }}
              >
                <Building2 className="w-3.5 h-3.5" />
                Treinamentos corporativos para empresas
              </span>

              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2.2rem, 4.4vw, 3.8rem)',
                  color: 'oklch(0.96 0.006 250)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Capacite sua equipe em{' '}
                <span className="text-gradient">Excel, Power BI e MS Project</span>
              </h1>

              <p className="text-lg mb-9 max-w-2xl" style={{ color: 'oklch(0.64 0.012 250)', lineHeight: 1.75 }}>
                Treinamentos in company, presenciais ou online ao vivo, para empresas que precisam aumentar produtividade,
                melhorar relatórios, organizar processos e transformar dados em decisões.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section style={{ background: 'oklch(0.10 0.022 250)', borderTop: '1px solid oklch(0.16 0.026 250 / 0.50)' }}>
        <div className="container-xl py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
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

          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'oklch(0.44 0.010 250)' }}>
              Empresas que já confiaram no Grupo Yto Nihon
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
        </div>
      </section>

      {/* FOCO */}
      <section className="section-pad" style={{ background: 'oklch(0.08 0.020 250)' }}>
        <div className="container-xl max-w-3xl text-center">
          <span className="section-tag">Foco da capacitação</span>
          <h2 className="section-headline mb-6">Treinamentos pensados para problemas reais da empresa</h2>
          <p className="text-base mb-4" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            Muitas equipes ainda perdem tempo com planilhas manuais, relatórios repetitivos, falta de padronização,
            retrabalho e dificuldade para acompanhar indicadores.
          </p>
          <p className="text-base" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            Por isso, nosso foco principal está em Excel, Power BI e MS Project, três frentes que geram impacto direto
            na produtividade, na gestão e na tomada de decisão.
          </p>
        </div>
      </section>

      {/* TREINAMENTOS PRINCIPAIS */}
      <section className="section-pad" style={{ background: 'oklch(0.11 0.024 250)' }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-tag">Treinamentos principais</span>
            <h2 className="section-headline mb-4">O que sua empresa pode contratar</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              Capacitações práticas, com linguagem acessível, exercícios aplicados e possibilidade de personalização.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mainTrainings.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-7"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
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
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.56 0.010 250)' }}>
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl mx-auto rounded-2xl p-6" style={{ background: 'oklch(0.09 0.020 250)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: 'oklch(0.92 0.006 250)' }}>
              Também podemos estruturar treinamentos complementares:
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {extras.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-sm" style={{ color: 'oklch(0.62 0.012 250)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'oklch(0.62 0.18 160)' }} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-tag">Metodologia</span>
            <h2 className="section-headline mb-4">Como funciona o projeto de treinamento</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl p-7"
                style={{
                  background: 'oklch(0.12 0.025 250 / 0.90)',
                  border: '1px solid oklch(0.22 0.032 250 / 0.50)',
                }}
              >
                <span
                  className="text-5xl font-black mb-4 block leading-none"
                  style={{ color: 'oklch(0.56 0.23 250 / 0.22)', fontFamily: 'var(--font-heading)' }}
                >
                  {step.num}
                </span>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'oklch(0.92 0.006 250)', fontFamily: 'var(--font-heading)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.56 0.010 250)' }}>
                  {step.desc}
                </p>

                {i < steps.length - 1 && (
                  <ChevronRight
                    className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7"
                    style={{ color: 'oklch(0.36 0.060 250 / 0.60)' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section-pad" style={{ background: 'oklch(0.08 0.020 250)' }}>
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Conteúdo aplicado',
                desc: 'O treinamento é voltado para situações reais de trabalho, não apenas para teoria de ferramenta.',
              },
              {
                icon: Users,
                title: 'Turmas para equipes',
                desc: 'Capacitamos grupos pequenos, médios ou grandes, conforme a necessidade da empresa.',
              },
              {
                icon: ShieldCheck,
                title: 'Experiência comprovada',
                desc: 'Mais de duas décadas formando profissionais e atendendo empresas de diferentes segmentos.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
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
                <item.icon className="w-7 h-7 mb-4" style={{ color: 'oklch(0.68 0.20 250)' }} />
                <h3 className="text-lg font-bold mb-3" style={{ color: 'oklch(0.92 0.006 250)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.56 0.010 250)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="section-tag">Prova social</span>
            <h2 className="section-headline mb-4">Treinamentos realizados em empresas</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              Registros reais de capacitações conduzidas pelo Grupo Yto Nihon.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative rounded-2xl overflow-hidden group"
                style={{ border: '1px solid oklch(0.20 0.028 250 / 0.50)', aspectRatio: '4/3' }}
              >
                <img
                  src={img.src}
                  alt={`Treinamento corporativo de ${img.label} realizado pelo Grupo Yto Nihon`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.07 0.018 250 / 0.82) 0%, transparent 55%)' }} />
                <span className="absolute bottom-3 left-4 text-sm font-semibold" style={{ color: 'oklch(0.90 0.006 250)' }}>
                  {img.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.022 250)' }}>
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-tag">Dúvidas frequentes</span>
            <h2 className="section-headline mb-4">Perguntas sobre treinamentos corporativos</h2>
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
          background: 'oklch(0.08 0.018 250)',
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
              <TrendingUp className="w-7 h-7" style={{ color: 'oklch(0.68 0.20 250)' }} />
            </div>

            <h2 className="section-headline mb-5">Quer capacitar sua equipe?</h2>

            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'oklch(0.56 0.012 250)', lineHeight: 1.7 }}>
              Fale com o Grupo Yto Nihon e receba uma proposta personalizada para treinamento corporativo em Excel,
              Power BI, MS Project ou outras soluções para sua empresa.
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

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {['Diagnóstico inicial', 'Presencial ou online ao vivo', 'Certificado para participantes'].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 text-sm" style={{ color: 'oklch(0.58 0.012 250)' }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'oklch(0.62 0.18 160)' }} />
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
