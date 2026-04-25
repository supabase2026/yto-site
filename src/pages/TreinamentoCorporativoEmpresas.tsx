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

      {/* HERO */}
      <section
        className="section-pad text-center"
        style={{ background: 'oklch(0.08 0.018 250)' }}
      >
        <h1
          className="section-headline mb-6"
          style={{ color: 'oklch(0.95 0.005 250)' }}
        >
          Sua empresa está perdendo produtividade por falta de capacitação?
        </h1>

        <p
          className="text-lg max-w-2xl mx-auto mb-10"
          style={{ color: 'oklch(0.70 0.010 250)' }}
        >
          Treinamentos corporativos práticos em dados, BI e gestão para transformar sua equipe em um motor de resultados.
        </p>

        <a
          href="https://wa.me/5511910704164"
          className="px-8 py-4 rounded-xl font-bold inline-block"
          style={{
            background: 'oklch(0.56 0.23 250)',
            color: 'white',
            boxShadow: '0 8px 30px oklch(0.56 0.23 250 / 0.40)',
          }}
        >
          Falar com especialista
        </a>
      </section>

      {/* PROBLEMA */}
      <section
        className="section-pad text-center"
        style={{ background: 'oklch(0.09 0.020 250)' }}
      >
        <h2
          className="section-headline mb-8"
          style={{ color: 'oklch(0.95 0.005 250)' }}
        >
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
              <CheckCircle2 style={{ color: 'oklch(0.72 0.20 250)' }} />
              <span style={{ color: 'oklch(0.70 0.010 250)' }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section
        className="section-pad"
        style={{ background: 'oklch(0.08 0.018 250)' }}
      >
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
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: 'oklch(0.95 0.005 250)' }}
              >
                {t.titulo}
              </h3>

              <p
                className="text-sm mb-4"
                style={{ color: 'oklch(0.70 0.010 250)' }}
              >
                {t.desc}
              </p>

              <span style={{ color: 'oklch(0.72 0.20 250)' }}>
                Ver mais <ChevronRight className="inline w-4" />
              </span>
            </motion.a>
          ))}

        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="section-pad text-center"
        style={{ background: 'oklch(0.09 0.020 250)' }}
      >
        <h2
          className="section-headline mb-4"
          style={{ color: 'oklch(0.95 0.005 250)' }}
        >
          Quer uma proposta personalizada?
        </h2>

        <p style={{ color: 'oklch(0.70 0.010 250)' }} className="mb-6">
          Fale com nossa equipe e estruturamos um treinamento sob medida para sua empresa.
        </p>

        <a
          href="https://wa.me/5511910704164"
          className="px-8 py-4 rounded-xl font-bold inline-block"
          style={{
            background: 'oklch(0.56 0.23 250)',
            color: 'white',
            boxShadow: '0 8px 30px oklch(0.56 0.23 250 / 0.40)',
          }}
        >
          Solicitar proposta agora
        </a>
      </section>
    </Layout>
  );
}
