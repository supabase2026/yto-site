import { motion } from 'framer-motion';
import {
  MessageCircle,
  CheckCircle2,
  FileSpreadsheet,
  Users,
  Building2,
  Clock,
  Target,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { WHATSAPP_LINK } from '../lib';

const WHATSAPP_EXCEL =
  'https://wa.me/5511910704164?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20treinamento%20de%20Excel%20para%20minha%20empresa.%20Gostaria%20de%20receber%20uma%20proposta.';

const stats = [
  { icon: Users, value: '+100.000', label: 'profissionais capacitados' },
  { icon: Building2, value: '+200', label: 'empresas atendidas' },
  { icon: Clock, value: '26+', label: 'anos de experiência' },
];

const topics = [
  'Fórmulas e funções essenciais para rotina corporativa',
  'Tabelas dinâmicas para análise rápida de informações',
  'Dashboards em Excel para acompanhamento de indicadores',
  'Power Query para limpeza, tratamento e transformação de dados',
  'Organização de bases, listas, relatórios e controles internos',
  'Boas práticas para reduzir erros, retrabalho e dependência manual',
];

const formats = [
  'Online ao vivo',
  'Presencial in company',
  'Turmas fechadas para empresas',
  'Conteúdo adaptado ao nível da equipe',
];

const pains = [
  'Planilhas desorganizadas e difíceis de manter',
  'Retrabalho constante em relatórios manuais',
  'Falta de padronização entre áreas e colaboradores',
  'Dependência de poucas pessoas para gerar análises',
];

const faqs = [
  {
    question: 'O treinamento de Excel pode ser personalizado para a empresa?',
    answer:
      'Sim. O conteúdo pode ser adaptado de acordo com o nível da equipe, área de atuação, objetivos internos e principais dificuldades dos colaboradores.',
  },
  {
    question: 'O treinamento pode ser presencial ou online?',
    answer:
      'Sim. O treinamento pode ser realizado online ao vivo, presencial in company ou em formato de turma fechada, conforme a necessidade da empresa.',
  },
  {
    question: 'O curso atende equipes iniciantes e avançadas?',
    answer:
      'Sim. A capacitação pode ser estruturada do Excel essencial ao avançado, incluindo análise de dados, dashboards, Power Query e automação.',
  },
  {
    question: 'A empresa recebe certificado para os participantes?',
    answer:
      'Sim. Os participantes podem receber certificado de participação conforme a carga horária e o escopo contratado.',
  },
];

export default function TreinamentoExcelEmpresas() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'oklch(0.08 0.018 250)',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        <div className="orb orb-blue" style={{ width: '620px', height: '520px', top: '-25%', right: '-10%', opacity: 0.22 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-20" />

        <div className="container-xl relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
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
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Treinamento corporativo de Excel
              </span>

              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  color: 'oklch(0.96 0.006 250)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Treinamento de Excel para empresas:{' '}
                <span className="text-gradient">capacite sua equipe para ganhar produtividade</span>
              </h1>

              <p className="text-lg mb-10 max-w-3xl" style={{ color: 'oklch(0.64 0.012 250)', lineHeight: 1.75 }}>
                Treinamentos corporativos personalizados em Excel, do básico ao avançado, com foco em análise de dados,
                produtividade, dashboards, Power Query e aplicação prática no dia a dia da empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_EXCEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'oklch(0.56 0.23 250)',
                    color: 'white',
                    boxShadow: '0 8px 28px oklch(0.56 0.23 250 / 0.35)',
                  }}
                >
                  Solicitar proposta de treinamento <ChevronRight className="w-4 h-4" />
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
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'oklch(0.10 0.022 250)', borderTop: '1px solid oklch(0.16 0.026 250 / 0.50)' }}>
        <div className="container-xl py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <item.icon className="w-6 h-6 mx-auto mb-3" style={{ color: 'oklch(0.68 0.20 250)' }} />
                <p className="text-3xl font-bold mb-1" style={{ color: 'oklch(0.72 0.20 250)', fontFamily: 'var(--font-heading)' }}>
                  {item.value}
                </p>
                <p className="text-sm" style={{ color: 'oklch(0.56 0.010 250)' }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="section-pad" style={{ background: 'oklch(0.09 0.020 250)' }}>
        <div className="container-xl max-w-4xl text-center">
          <span className="section-tag">Desafio das empresas</span>

          <h2 className="section-headline mb-6">
            Sua equipe perde tempo com planilhas?
          </h2>

          <p className="text-base mb-10 max-w-3xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)', lineHeight: 1.8 }}>
            O Excel está presente em praticamente todas as empresas, mas muitas equipes ainda utilizam a ferramenta de forma manual,
            desorganizada e pouco produtiva.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            {pains.map((pain) => (
              <div
                key={pain}
                className="flex items-start gap-3 rounded-xl p-5"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <Target className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.68 0.20 250)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.68 0.010 250)' }}>
                  {pain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">Conteúdo do treinamento</span>
            <h2 className="section-headline mb-4">O que sua equipe pode aprender</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              O programa pode ser ajustado para diferentes níveis, áreas e objetivos da empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {topics.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex items-start gap-3 rounded-xl p-5"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.62 0.18 160)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.70 0.010 250)' }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATOS */}
      <section className="section-pad" style={{ background: 'oklch(0.11 0.024 250)' }}>
        <div className="container-xl max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">Formatos</span>
            <h2 className="section-headline mb-4">Formatos de treinamento para empresas</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.56 0.010 250)' }}>
              A capacitação pode ser desenhada de acordo com a realidade operacional da empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {formats.map((format) => (
              <div
                key={format}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: 'oklch(0.13 0.026 250 / 0.85)',
                  border: '1px solid oklch(0.24 0.034 250 / 0.50)',
                }}
              >
                <CheckCircle2 className="w-5 h-5 mx-auto mb-3" style={{ color: 'oklch(0.62 0.18 160)' }} />
                <p className="text-sm font-semibold" style={{ color: 'oklch(0.82 0.008 250)' }}>
                  {format}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.022 250)' }}>
        <div className="container-xl max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">Dúvidas frequentes</span>
            <h2 className="section-headline mb-4">Perguntas sobre treinamento de Excel para empresas</h2>
          </motion.div>

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
              <FileSpreadsheet className="w-7 h-7" style={{ color: 'oklch(0.68 0.20 250)' }} />
            </div>

            <h2 className="section-headline mb-5">Solicite uma proposta de Excel para sua empresa</h2>

            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: 'oklch(0.56 0.012 250)', lineHeight: 1.7 }}>
              Fale com nossa equipe e receba uma proposta personalizada para capacitar seus colaboradores em Excel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_EXCEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'oklch(0.56 0.23 250)',
                  color: 'white',
                  boxShadow: '0 8px 28px oklch(0.56 0.23 250 / 0.35)',
                }}
              >
                Solicitar proposta de treinamento <ChevronRight className="w-4 h-4" />
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
          <p className="text-base mb-4" style={{ color: 'oklch(0.60 0.010 250)' }}>
            Planilhas desorganizadas, retrabalho, fórmulas erradas e processos manuais são alguns dos problemas mais comuns nas empresas.
          </p>

          <p className="text-base" style={{ color: 'oklch(0.60 0.010 250)' }}>
            Com o treinamento certo, sua equipe pode ganhar velocidade, precisão e autonomia.
          </p>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl max-w-5xl mx-auto text-center">
          <h2 className="section-headline mb-10">
            O que sua equipe vai aprender
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              'Fórmulas e funções essenciais',
              'Tabelas dinâmicas para análise de dados',
              'Dashboards em Excel',
              'Automação de processos com Excel',
              'Organização e limpeza de dados',
              'Boas práticas corporativas',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1" style={{ color: 'oklch(0.60 0.20 250)' }} />
                <span style={{ color: 'oklch(0.70 0.010 250)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-pad text-center" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl max-w-3xl mx-auto">
          <h2 className="section-headline mb-6">
            Solicite um treinamento personalizado
          </h2>

          <p className="text-base mb-10" style={{ color: 'oklch(0.60 0.010 250)' }}>
            Fale com nossa equipe e receba uma proposta sob medida para sua empresa.
          </p>

          <a href={WHATSAPP_LINK} target="_blank" className="btn-whatsapp px-10 py-4 text-base">
            <MessageCircle className="w-5 h-5" /> Falar com especialista
          </a>
        </div>
      </section>
    </Layout>
  );
}
