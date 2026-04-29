import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const TreinamentosBarueriAlphavilleRegiao = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">

        {/* HERO */}
        <section className="relative overflow-hidden py-24 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900" />

          <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-semibold">
                Treinamentos em Barueri • Alphaville • Região
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Treinamentos Profissionais em Barueri e Alphaville
              </h1>

              <p className="text-lg mb-8 text-slate-300 leading-relaxed">
                Cursos de Excel, Power BI, análise de dados e tecnologia para
                alunos, profissionais e empresas em Barueri, Alphaville,
                Osasco e Santana de Parnaíba.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
                >
                  Falar com a Yto
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-900 p-6">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-blue-600/30 via-slate-800 to-slate-950 flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-blue-300 text-sm font-semibold mb-3">
                      EXCEL • POWER BI • DADOS
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      Domine as ferramentas mais usadas do mercado
                    </h2>
                    <p className="text-slate-300">
                      Treinamentos práticos para evolução profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LINKS PRINCIPAIS */}
        <section className="py-16">
          <div className="container-xl max-w-5xl">

            <h2 className="text-2xl font-semibold mb-6">
              Cursos disponíveis na região
            </h2>

            <ul className="mb-10 space-y-2">
              <li><a href="/curso-excel-barueri" className="text-blue-500 underline">Curso de Excel em Barueri</a></li>
              <li><a href="/curso-excel-alphaville" className="text-blue-500 underline">Curso de Excel em Alphaville</a></li>
              <li><a href="/curso-power-bi-barueri" className="text-blue-500 underline">Curso de Power BI em Barueri</a></li>
              <li><a href="/curso-power-bi-alphaville" className="text-blue-500 underline">Curso de Power BI em Alphaville</a></li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6">
              Treinamentos para empresas
            </h2>

            <ul className="mb-10 space-y-2">
              <li><a href="/treinamento-excel-empresas" className="text-blue-500 underline">Treinamento de Excel para Empresas</a></li>
              <li><a href="/treinamento-power-bi-empresas" className="text-blue-500 underline">Treinamento de Power BI para Empresas</a></li>
              <li><a href="/treinamento-sql-empresas" className="text-blue-500 underline">Treinamento de SQL para Empresas</a></li>
            </ul>

            {/* TEXTO SEO */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Treinamentos em Barueri e Alphaville
            </h2>

            <p className="mb-6">
              O Grupo Yto Nihon é referência em treinamentos profissionais na região de Barueri e Alphaville, com cursos voltados para Excel, Power BI e análise de dados.
            </p>

            <p className="mb-6">
              Atendemos alunos iniciantes, profissionais experientes e empresas que buscam aumentar produtividade e tomar decisões baseadas em dados.
            </p>

            <p className="mb-6">
              Nossos treinamentos estão disponíveis para Barueri, Alphaville, Osasco e Santana de Parnaíba, com opções presenciais e online ao vivo.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Falar com a Yto
            </a>

          </div>
        </section>

      </div>
    </Layout>
  );
};
