import { Layout } from "@/components/Layout";

const CursoMSProject = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">

        <section className="py-20 bg-slate-950 text-white">
          <div className="container-xl max-w-5xl">

            <h1 className="text-4xl font-bold mb-6">
              Curso de MS Project em Barueri, Alphaville e Região
            </h1>

            <p className="mb-6 text-lg text-slate-300">
              O Grupo Yto Nihon oferece cursos de MS Project com foco prático para profissionais e empresas que precisam planejar, controlar e acompanhar projetos com eficiência.
            </p>

            <p className="mb-10 text-slate-400">
              Atendemos alunos em Barueri, Alphaville, Osasco e Santana de Parnaíba com treinamentos presenciais e online ao vivo.
            </p>

          </div>
        </section>

        <section className="py-16">
          <div className="container-xl max-w-5xl">

            <h2 className="text-2xl font-semibold mb-6">
              Escolha sua região
            </h2>

            <ul className="space-y-3 mb-10">
              <li>
                <a href="/curso-ms-project-barueri" className="text-blue-500 underline">
                  Curso de MS Project em Barueri
                </a>
              </li>

              <li>
                <a href="/curso-ms-project-alphaville" className="text-blue-500 underline">
                  Curso de MS Project em Alphaville
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6">
              Soluções para empresas
            </h2>

            <p className="mb-6">
              Também oferecemos treinamentos corporativos de MS Project com conteúdo personalizado para equipes.
            </p>

            <a href="/treinamento-ms-project-empresas" className="text-blue-500 underline">
              Treinamento de MS Project para empresas
            </a>

            <h2 className="text-2xl font-semibold mt-10 mb-6">
              Veja também
            </h2>

            <ul className="space-y-3">
              <li>
                <a href="/curso-excel-barueri-regiao" className="text-blue-500 underline">
                  Curso de Excel
                </a>
              </li>

              <li>
                <a href="/curso-power-bi-barueri-regiao" className="text-blue-500 underline">
                  Curso de Power BI
                </a>
              </li>
            </ul>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CursoMSProject;
