import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

function SEO() {
  useEffect(() => {
    document.title = 'Treinamentos Corporativos para Empresas | Grupo Yto Nihon';

    const description =
      'Treinamentos corporativos em Excel, Power BI, SQL, MS Project e IA para empresas. Aumente produtividade, controle e tomada de decisão com dados.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return null;
}

const treinamentos = [
  {
    titulo: 'Excel para Empresas',
    desc: 'Produtividade, automação e redução de retrabalho',
    link: '/treinamento-excel-empresas',
  },
  {
    titulo: 'Power BI para Empresas',
    desc: 'Dashboards e tomada de decisão com dados',
    link: '/treinamento-power-bi-empresas',
  },
  {
    titulo: 'SQL para Empresas',
    desc: 'Autonomia total no acesso e análise de dados',
    link: '/treinamento-sql-empresas',
  },
  {
    titulo: 'MS Project para Empresas',
    desc: 'Gestão de projetos, prazos e recursos',
    link: '/treinamento-ms-project-empresas',
  },
  {
    titulo: 'IA para Empresas',
    desc: 'Automação e produtividade com Inteligência Artificial',
    link: '/treinamento-ia-empresas',
  },
];

export default function TreinamentoCorporativoEmpresas() {
  return (
    <Layout>
      <SEO />

      {/* HERO FORTE */}
      <section className="section-pad text-center">
        <h1 className="section-headline mb-6">
          Sua empresa está perdendo produtividade por falta de capacitação?
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-10">
          Treinamentos corporativos práticos em dados, BI e gestão para transformar sua equipe em um motor de resultados.
        </p>

        <a
          href="https://wa.me/5511910704164"
          className="btn-primary"
        >
          Falar com especialista
        </a>
      </section>

      {/* PROBLEMA */}
      <section className="section-pad text-center">
        <h2 className="section-headline mb-8">
          Problemas que vemos todos os dias nas empresas
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
          {[
            'Relatórios manuais e lentos',
            'Falta de indicadores confiáveis',
            'Decisão baseada em achismo',
            'Dependência excessiva de planilhas',
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <CheckCircle2 className="text-green-400 mt-1" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="section-pad text-center">
        <h2 className="section-headline mb-6">
          A solução: capacitar sua equipe
        </h2>

        <p className="max-w-2xl mx-auto mb-10">
          Empresas que treinam suas equipes conseguem automatizar processos,
          melhorar análises e tomar decisões mais rápidas e estratégicas.
        </p>
      </section>

      {/* GRID FODA */}
      <section className="section-pad">
        <div className="container-xl grid md:grid-cols-3 gap-6">

          {treinamentos.map((t, i) => (
            <motion.a
              key={t.titulo}
              href={t.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 block hover:scale-105 transition-all"
              style={{
                background: 'oklch(0.13 0.026 250 / 0.85)',
                border: '1px solid oklch(0.24 0.034 250 / 0.50)',
              }}
            >
              <h3 className="text-lg font-bold mb-2">{t.titulo}</h3>
              <p className="text-sm mb-4 text-gray-300">{t.desc}</p>
              <span style={{ color: '#3b82f6' }}>
                Ver mais <ChevronRight className="inline w-4" />
              </span>
            </motion.a>
          ))}

        </div>
      </section>

      {/* CTA FINAL PESADO */}
      <section className="section-pad text-center">
        <h2 className="section-headline mb-4">
          Quer uma proposta personalizada?
        </h2>

        <p className="mb-6 text-gray-400">
          Fale com nossa equipe e estruturamos um treinamento sob medida para sua empresa.
        </p>

        <a
          href="https://wa.me/5511910704164"
          className="btn-primary"
        >
          Solicitar proposta agora
        </a>
      </section>
    </Layout>
  );
}
