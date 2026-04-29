import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const CursoPowerBIBarueri = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-semibold">
                Curso em Barueri e Alphaville
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Curso de Power BI em Barueri e Alphaville para Profissionais e Empresas
              </h1>

              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                Aprenda Power BI na prática com o Grupo Yto Nihon, referência em treinamentos para profissionais e empresas em Barueri, Alphaville, Osasco e região.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
                >
                  Falar sobre o curso de Power BI
                </a>

                <a
                  href="#conteudo"
                  className="inline-block px-6 py-3 rounded-xl border border-blue-500/40 text-blue-300 font-semibold"
                >
                  Ver conteúdo do curso
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-900 p-6">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-yellow-500/30 via-slate-800 to-slate-950 flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-yellow-300 text-sm font-semibold mb-3">
                      POWER BI • DASHBOARDS • INDICADORES
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Transforme dados em decisões
                    </h2>

                    <div
  style={{
    marginTop: "40px",
    padding: "24px",
    borderRadius: "16px",
    background: "rgba(0,123,255,0.08)",
    border: "1px solid rgba(0,123,255,0.25)",
  }}
>
  <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
    Sua empresa precisa treinar a equipe em Excel?
  </h3>

  <p style={{ marginBottom: "16px" }}>
    O Grupo Yto Nihon realiza treinamentos corporativos em Excel, Power BI e MS Project
    para empresas em Barueri, Alphaville e região, com foco em produtividade e aplicação prática.
  </p>

  <a
    href="/para-empresas"
    style={{
      display: "inline-block",
      padding: "12px 20px",
      backgroundColor: "#007BFF",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Ver treinamentos para empresas
  </a>
</div>
                    
                    <p className="text-slate-300">
                      Dashboards, KPIs, relatórios executivos e análise de dados.
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
              Se você procura um curso de Power BI em Barueri com foco prático e aplicação no mercado de trabalho, aqui você encontra uma formação completa para evoluir em análise de dados e business intelligence.
            </p>

            <p className="mb-6">
              Estamos localizados próximos a Alphaville, atendendo alunos de Barueri, Santana de Parnaíba, Osasco e toda a região.
            </p>

            <p className="mb-6">
              Nosso curso atende profissionais que desejam criar dashboards, analisar indicadores, montar relatórios executivos e tomar decisões com base em dados.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Para quem é o curso de Power BI?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Pessoas que querem aprender Power BI do zero</li>
              <li>✔ Profissionais que trabalham com relatórios e indicadores</li>
              <li>✔ Empresas que precisam capacitar equipes em dashboards</li>
              <li>✔ Quem busca crescer na área de dados e BI</li>
            </ul>

            <h2 id="conteudo" className="text-2xl font-semibold mt-10 mb-4">
              O que você vai aprender
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Fundamentos do Power BI</li>
              <li>✔ Tratamento e modelagem de dados</li>
              <li>✔ Criação de dashboards profissionais</li>
              <li>✔ Indicadores, KPIs e relatórios executivos</li>
              <li>✔ Publicação e compartilhamento de relatórios</li>
            </ul>

            <p className="mb-6">
              Veja também nosso curso de Excel em Barueri e fortaleça sua base para análise de dados.
            </p>

            <a href="/curso-excel-barueri" className="text-blue-500 underline">
              Ir para curso de Excel em Barueri
            </a>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Por que escolher o Grupo Yto Nihon?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Mais de 100.000 alunos formados</li>
              <li>✔ Mais de 200 empresas atendidas</li>
              <li>✔ Metodologia prática focada no mercado</li>
              <li>✔ Professores com experiência real</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Curso de Power BI para empresas em Barueri
            </h2>

            <p className="mb-6">
              Também oferecemos treinamentos corporativos personalizados para empresas em Barueri, Alphaville e região, com foco em dashboards, indicadores, produtividade e tomada de decisão.
            </p>

            <p className="mb-6">
              Se você está pesquisando por curso de Power BI em Barueri, provavelmente já percebeu que dominar dashboards e relatórios pode abrir muitas oportunidades profissionais.
            </p>

            <p className="mb-6">
              A diferença está em aprender com prática, projetos reais e uma metodologia conectada ao dia a dia das empresas.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Quero aprender Power BI em Barueri
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CursoPowerBIBarueri;
