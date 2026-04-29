import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const CursosEmBarueri = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">

        {/* HERO */}
        <section className="py-20 bg-slate-950">
          <div className="container-xl">
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-semibold">
              Cursos em Barueri e Alphaville
            </span>

            <h1 className="text-4xl font-bold mb-6 text-white">
              Cursos em Barueri para Profissionais e Empresas
            </h1>

            <p className="text-slate-300 mb-8 max-w-2xl">
              O Grupo Yto Nihon oferece cursos de Excel, Power BI e tecnologia
              em Barueri, Alphaville e região, com foco prático no mercado de trabalho.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Falar com a Yto
            </a>
          </div>
        </section>

        {/* CONTEÚDO */}
        <section className="py-16">
          <div className="container-xl max-w-5xl">

            <h2 className="text-2xl font-semibold mb-6">
              Principais cursos em Barueri
            </h2>

            <ul className="mb-10 space-y-2">
              <li>
                <a href="/curso-excel-barueri-regiao" className="text-blue-500 underline">
                  Cursos de Excel em Barueri e região
                </a>
              </li>
              <li>
                <a href="/curso-power-bi-barueri-regiao" className="text-blue-500 underline">
                  Cursos de Power BI em Barueri e região
                </a>
              </li>
              <li>
                <a href="/treinamentos-barueri-alphaville" className="text-blue-500 underline">
                  Treinamentos em Barueri e Alphaville
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Cursos profissionais na região
            </h2>

            <p className="mb-6">
              Se você busca cursos em Barueri com foco em crescimento profissional,
              o Grupo Yto Nihon oferece treinamentos práticos e voltados ao mercado.
            </p>

            <p className="mb-6">
              Atendemos alunos e empresas de Barueri, Alphaville, Osasco e
              Santana de Parnaíba com cursos presenciais e online ao vivo.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Quero conhecer os cursos
            </a>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CursosEmBarueri;
