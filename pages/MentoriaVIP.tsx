import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';
import {
  MessageCircle, CheckCircle2, Star, Target, User, Zap,
  FileSpreadsheet, BarChart3, Database, Kanban, ArrowRight, Clock, Shield
} from 'lucide-react';

const areas = [
  {
    icon: FileSpreadsheet,
    title: 'Excel',
    description: 'Fórmulas avançadas, Power Query, VBA, macros, dashboards e automação de relatórios.',
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    description: 'Modelagem de dados, DAX, dashboards executivos, relatórios e otimização de performance.',
  },
  {
    icon: Database,
    title: 'SQL Server',
    description: 'Consultas, joins, stored procedures, otimização de queries e integração com outras ferramentas.',
  },
  {
    icon: Kanban,
    title: 'MS Project',
    description: 'Planejamento de projetos, cronogramas, recursos, EAP e gestão de portfólio.',
  },
];

const differentials = [
  {
    icon: User,
    title: 'Atendimento 100% Individual',
    description: 'Sessão exclusiva com Eduardo Yto — sem outros alunos, sem distrações. Foco total no seu problema.',
  },
  {
    icon: Target,
    title: 'Foco no seu Problema Real',
    description: 'Não ensinamos teoria. Resolvemos o problema específico que você traz — com solução prática e aplicável imediatamente.',
  },
  {
    icon: Zap,
    title: 'Resultado na Sessão',
    description: 'Em 1 hora, você sai com a solução implementada, não apenas com uma explicação.',
  },
  {
    icon: Shield,
    title: '26 Anos de Experiência',
    description: 'Eduardo Yto já capacitou mais de 100 mil profissionais. Cada solução vem de décadas de prática real.',
  },
];

const whoIsFor = [
  {
    title: 'Profissionais que travam em algum ponto',
    description: 'Você domina o básico, mas tem uma dúvida específica que nenhum vídeo do YouTube resolve.',
  },
  {
    title: 'Quem precisa entregar rápido',
    description: 'Tem um prazo apertado e precisa resolver aquele relatório, dashboard ou planilha complexa com urgência.',
  },
  {
    title: 'Gestores e analistas exigentes',
    description: 'Profissionais que precisam de orientação precisa e personalizada, sem perder tempo com conteúdo genérico.',
  },
  {
    title: 'Quem quer aprender fazendo',
    description: 'Você aprende melhor na prática, resolvendo o seu próprio problema, com orientação de um especialista.',
  },
];

const faqs = [
  {
    q: 'Como funciona a mentoria?',
    a: 'A sessão é online, individual, por videoconferência. Você apresenta seu problema ou dúvida específica e o Eduardo trabalha junto com você para resolver, na prática, durante a sessão.',
  },
  {
    q: 'Qual a duração de cada sessão?',
    a: 'Cada sessão tem duração de 1 hora. Em casos mais complexos, é possível agendar sessões adicionais.',
  },
  {
    q: 'Preciso ter algum nível mínimo?',
    a: 'Não. A mentoria é adaptada ao seu nível e ao seu problema específico. Pode ser desde uma dúvida básica até um projeto avançado.',
  },
  {
    q: 'Em quais ferramentas posso pedir ajuda?',
    a: 'Excel, Power BI, SQL Server e MS Project. Focamos nas ferramentas onde temos maior domínio e profundidade de mercado.',
  },
];

export default function MentoriaVIP() {
  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--brand-navy)', minHeight: '80vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="orb orb-blue" style={{ width: '700px', height: '600px', top: '-25%', right: '-10%', opacity: 0.35 }} />
        <div className="orb orb-purple" style={{ width: '500px', height: '450px', bottom: '-15%', left: '-5%', opacity: 0.20 }} />
        <div className="bg-dot-grid absolute inset-0 opacity-25" />

        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
              style={{ background: 'oklch(0.60 0.20 300 / 0.12)', border: '1px solid oklch(0.60 0.20 300 / 0.28)', color: 'oklch(0.78 0.14 300)' }}
            >
              <Star className="w-3.5 h-3.5" /> Atendimento exclusivo
            </span>

            <h1 className="hero-headline mb-6">
              <span style={{ color: 'oklch(0.93 0.006 250)' }}>Mentoria VIP</span><br />
              <span className="text-gradient">em Dados</span>
            </h1>

            <p className="hero-sub mx-auto mb-10 max-w-3xl">
              Resolva seu problema com dados de forma direta. Sessão individual com Eduardo Yto — especialista com 26 anos de experiência. Foco no seu desafio real, solução na prática.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['Atendimento Individual', '26 anos de expertise', 'Excel · Power BI · SQL · MS Project', 'Online ou Presencial'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: 'oklch(0.14 0.028 250 / 0.80)', border: '1px solid oklch(0.28 0.040 250 / 0.45)', color: 'oklch(0.78 0.010 250)' }}
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-base font-bold px-10 py-4 rounded-xl transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, oklch(0.56 0.23 250) 0%, oklch(0.50 0.26 245) 100%)',
                color: 'white',
                boxShadow: '0 8px 32px oklch(0.56 0.23 250 / 0.38)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px oklch(0.56 0.23 250 / 0.55)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px oklch(0.56 0.23 250 / 0.38)'; }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp para agendar mentoria
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ O QUE É ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">O que é a Mentoria VIP</span>
              <h2 className="section-headline mb-6">
                Atendimento personalizado,<br />
                <span className="text-gradient-static">resultado imediato</span>
              </h2>
              <div className="space-y-5">
                <p className="text-base leading-relaxed" style={{ color: 'oklch(0.62 0.012 250)' }}>
                  A <strong style={{ color: 'oklch(0.88 0.008 250)' }}>Mentoria VIP em Dados</strong> é um atendimento individual e personalizado com <strong style={{ color: 'oklch(0.88 0.008 250)' }}>Eduardo Yto</strong>, especialista com mais de 26 anos de experiência em educação e consultoria de dados.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'oklch(0.62 0.012 250)' }}>
                  Diferente de cursos ou aulas em grupo, aqui o foco é 100% no <strong style={{ color: 'oklch(0.88 0.008 250)' }}>seu problema real</strong>. Você apresenta o desafio — uma planilha complexa, um dashboard que não funciona, uma query difícil — e saímos com a solução implementada na mesma sessão.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'oklch(0.62 0.012 250)' }}>
                  Seja para resolver um problema pontual ou para acelerar seu desenvolvimento em alguma ferramenta específica, a Mentoria VIP é o caminho mais direto e eficiente.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8"
              style={{ background: 'oklch(0.12 0.028 250 / 0.90)', border: '1px solid oklch(0.28 0.040 250 / 0.50)' }}
            >
              <div className="flex items-center gap-3 mb-7">
                <Clock className="w-5 h-5" style={{ color: 'oklch(0.72 0.20 250)' }} />
                <h3 className="font-bold text-lg" style={{ color: 'oklch(0.90 0.006 250)' }}>Como funciona</h3>
              </div>
              <div className="space-y-4">
                {[
                  { num: '01', title: 'Contato via WhatsApp', desc: 'Descreva seu problema e agendamos a sessão no melhor horário para você.' },
                  { num: '02', title: 'Sessão online individual', desc: '1 hora de videoconferência com Eduardo Yto, focada exclusivamente no seu desafio.' },
                  { num: '03', title: 'Solução na prática', desc: 'Trabalhamos juntos no seu arquivo real, com explicação passo a passo.' },
                  { num: '04', title: 'Você sai resolvido', desc: 'Ao final, você tem a solução implementada e o conhecimento para replicar.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: 'oklch(0.56 0.23 250 / 0.18)', color: 'oklch(0.72 0.20 250)', border: '1px solid oklch(0.56 0.23 250 / 0.30)' }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: 'oklch(0.88 0.006 250)' }}>{step.title}</div>
                      <div className="text-sm" style={{ color: 'oklch(0.58 0.010 250)' }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center mt-7"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar minha mentoria
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ ÁREAS ═══ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Ferramentas</span>
            <h2 className="section-headline mb-4">Áreas de Atuação</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Mentoria especializada nas ferramentas mais utilizadas pelo mercado de dados e tecnologia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 transition-all duration-200"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.56 0.23 250 / 0.45)';
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
                  <area.icon className="w-6 h-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
                </div>
                <h3 className="font-bold mb-2 text-lg" style={{ color: 'oklch(0.90 0.006 250)' }}>{area.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.010 250)' }}>{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIFERENCIAIS ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Por que escolher</span>
            <h2 className="section-headline mb-4">Diferenciais da Mentoria VIP</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 rounded-2xl p-6"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'oklch(0.56 0.23 250 / 0.15)', border: '1px solid oklch(0.56 0.23 250 / 0.25)' }}
                >
                  <item.icon className="w-6 h-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: 'oklch(0.90 0.006 250)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.010 250)' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARA QUEM É ═══ */}
      <section className="section-pad" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Público-alvo</span>
            <h2 className="section-headline mb-4">Para Quem é a Mentoria VIP?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whoIsFor.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 rounded-xl p-6"
                style={{ background: 'oklch(0.13 0.028 250 / 0.70)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.65 0.18 160)' }} />
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: 'oklch(0.88 0.006 250)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'oklch(0.58 0.010 250)' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Dúvidas frequentes</span>
            <h2 className="section-headline mb-4">Perguntas Frequentes</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl p-6"
                style={{ background: 'oklch(0.13 0.028 250 / 0.80)', border: '1px solid oklch(0.22 0.032 250 / 0.50)' }}
              >
                <h3 className="font-semibold mb-2" style={{ color: 'oklch(0.90 0.006 250)' }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.60 0.010 250)' }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section
        className="relative py-24 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, oklch(0.14 0.040 250) 0%, oklch(0.10 0.028 250) 100%)' }}
      >
        <div className="orb orb-blue" style={{ width: '600px', height: '500px', top: '-40%', left: '50%', transform: 'translateX(-50%)', opacity: 0.22 }} />
        <div className="container-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Star className="w-16 h-16 mx-auto mb-6" style={{ color: 'oklch(0.72 0.20 250)' }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'oklch(0.93 0.006 250)', fontFamily: 'var(--font-heading)' }}>
              Resolva seu problema agora
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'oklch(0.60 0.010 250)' }}>
              Entre em contato via WhatsApp para agendar sua sessão de Mentoria VIP. Atendimento rápido e personalizado.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-base font-bold px-10 py-4 rounded-xl transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, oklch(0.56 0.23 250) 0%, oklch(0.50 0.26 245) 100%)',
                color: 'white',
                boxShadow: '0 8px 32px oklch(0.56 0.23 250 / 0.40)',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp para agendar mentoria
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
