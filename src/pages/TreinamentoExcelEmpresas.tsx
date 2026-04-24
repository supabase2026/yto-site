import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WHATSAPP_LINK } from '@/lib/index';

export default function TreinamentoExcelEmpresas() {
  return (
    <Layout>
      {/* HERO */}
      <section className="section-pad text-center" style={{ background: 'var(--brand-navy)' }}>
        <div className="container-xl max-w-3xl mx-auto">
          <h1 className="hero-headline mb-6">
            Treinamento de Excel para Empresas
          </h1>

          <h2 className="text-xl mb-6" style={{ color: 'oklch(0.70 0.010 250)' }}>
            Capacite sua equipe com Excel na prática e aumente a produtividade
          </h2>

          <p className="text-base mb-10" style={{ color: 'oklch(0.60 0.010 250)' }}>
            Treinamentos corporativos personalizados em Excel, do básico ao avançado, com foco em automação,
            análise de dados e aplicação real no dia a dia da sua empresa.
          </p>

          <a href={WHATSAPP_LINK} target="_blank" className="btn-whatsapp px-8 py-4 text-base">
            <MessageCircle className="w-5 h-5" /> Solicitar proposta
          </a>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-pad" style={{ background: 'oklch(0.10 0.024 250)' }}>
        <div className="container-xl max-w-4xl mx-auto text-center">
          <h2 className="section-headline mb-6">
            Sua equipe perde tempo com Excel?
          </h2>

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
