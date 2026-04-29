import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const CursoPowerBIAlphaville = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-yellow-600/10 text-yellow-400 text-sm font-semibold">
                Curso em Alphaville e Barueri
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Curso de Power BI em Alphaville para Profissionais e Empresas
              </h1>

              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                Aprenda Power BI na prática com o Grupo Yto Nihon, referência em treinamentos para profissionais e empresas em Alphaville, Barueri, Osasco e região.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold"
                >
                  Falar sobre o curso de Power BI
                </a>

                <a
                  href="#conteudo"
                  className="inline-block px-6 py-3 rounded-xl border border-yellow-400/40 text-yellow-300 font-semibold"
                >
                  Ver conteúdo do curso
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-yellow-400/20 shadow-2xl bg-slate-900 p-6">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-yellow-500/30 via-slate-800 to-slate-950 flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-yellow-300 text-sm font-semibold mb-3">
                      POWER BI • DASHBOARDS • INDICADORES
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Transforme dados em decisões
                    </h2>
                    <p className="text-slate-300">
                      Dashboards, KPIs e relatórios executivos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-xl max-w-5xl">
            <p className="mb-6">
              Se você procura um curso de Power BI em Alphaville com foco prático e aplicação no mercado, aqui você encontra uma formação completa para evoluir em análise de dados.
            </p>

            <p className="mb-6">
              Atendemos alunos e empresas de Alphaville, Barueri, Santana de Parnaíba, Osasco e toda a região.
            </p>

            <p className="mb-6">
              Nosso curso prepara você para criar dashboards, analisar indicadores e tomar decisões com base em dados.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Para quem é o curso de Power BI?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Pessoas que querem aprender Power BI do zero</li>
              <li>✔ Profissionais que trabalham com relatórios e indicadores</li>
              <li>✔ Empresas que precisam de dashboards eficientes</li>
              <li>✔ Quem quer crescer na área de dados</li>
            </ul>

            <h2 id="conteudo" className="text-2xl font-semibold mt-10 mb-4">
              O que você vai aprender
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Fundamentos do Power BI</li>
              <li>✔ Modelagem de dados</li>
              <li>✔ Criação de dashboards profissionais</li>
              <li>✔ Indicadores e KPIs</li>
              <li>✔ Publicação de relatórios</li>
            </ul>

            <p className="mb-6">
              Veja também nosso curso de Excel em Alphaville e fortaleça sua base de dados.
            </p>

            <a href="/curso-excel-alphaville" className="text-blue-500 underline">
              Ir para curso de Excel em Alphaville
            </a>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Por que escolher o Grupo Yto Nihon?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Mais de 100.000 alunos formados</li>
              <li>✔ Mais de 200 empresas atendidas</li>
              <li>✔ Metodologia prática e aplicada</li>
              <li>✔ Professores com experiência real</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Treinamento de Power BI para empresas em Alphaville
            </h2>

            <p className="mb-6">
              Também oferecemos treinamentos corporativos personalizados com foco em dashboards e análise de dados.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold"
            >
              Quero aprender Power BI em Alphaville
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CursoPowerBIAlphaville;
