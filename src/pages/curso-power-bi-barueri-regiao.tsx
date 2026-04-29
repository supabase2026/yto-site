import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const CursoPowerBIBarueriRegiao = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">

        {/* HERO */}
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-semibold">
                Curso de Power BI em Barueri • Alphaville • Região
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Curso de Power BI em Barueri e Alphaville para Profissionais e Empresas
              </h1>

              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                Aprenda Power BI na prática com o Grupo Yto Nihon. Crie dashboards,
                indicadores e relatórios profissionais para tomada de decisão em
                Barueri, Alphaville, Osasco e região.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
              >
                Falar sobre curso de Power BI
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-900 p-6">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-blue-600/30 via-slate-800 to-slate-950 flex items-center justify-center text-center p-8">
                <div>
                  <p className="text-blue-300 text-sm font-semibold mb-3">
                    POWER BI • DASHBOARDS • KPIs
                  </p>
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Crie dashboards profissionais
                  </h2>
                  <p className="text-slate-300">
                    Análise de dados, visualizações e indicadores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LINKS POR CIDADE */}
        <section className="py-16">
          <div className="container-xl max-w-5xl">

            <h2 className="text-2xl font-semibold mb-6">
              Curso de Power BI por cidade
            </h2>

            <ul className="mb-10 space-y-2">
              <li><a href="/curso-power-bi-barueri" className="text-blue-500 underline">Curso de Power BI em Barueri</a></li>
              <li><a href="/curso-power-bi-alphaville" className="text-blue-500 underline">Curso de Power BI em Alphaville</a></li>
              <li><a href="/curso-power-bi-osasco" className="text-blue-500 underline">Curso de Power BI em Osasco</a></li>
              <li><a href="/curso-power-bi-santana-de-parnaiba" className="text-blue-500 underline">Curso de Power BI em Santana de Parnaíba</a></li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6">
              Tipos de treinamento em Power BI
            </h2>

            <ul className="mb-10 space-y-2">
              <li><a href="/curso-power-bi-presencial-barueri" className="text-blue-500 underline">Power BI presencial</a></li>
              <li><a href="/treinamento-power-bi-barueri" className="text-blue-500 underline">Treinamento de Power BI</a></li>
              <li><a href="/treinamento-power-bi-empresas" className="text-blue-500 underline">Power BI para empresas</a></li>
            </ul>

            {/* TEXTO SEO */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Curso de Power BI em Barueri e Alphaville
            </h2>

            <p className="mb-6">
              O curso de Power BI do Grupo Yto Nihon é ideal para quem deseja
              transformar dados em informação estratégica. Atendemos alunos e
              empresas em Barueri, Alphaville, Osasco e região.
            </p>

            <p className="mb-6">
              Com abordagem prática, você aprende a criar dashboards,
              indicadores e relatórios que ajudam na tomada de decisão.
            </p>

            <p className="mb-6">
              Se você busca um curso de Power BI em Barueri com foco em resultados,
              essa é a melhor escolha.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Quero aprender Power BI
            </a>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CursoPowerBIBarueriRegiao;
