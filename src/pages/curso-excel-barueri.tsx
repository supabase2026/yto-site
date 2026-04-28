import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const CursoExcelBarueri = () => {
  return (
    <Layout>
        <div className="min-h-screen bg-background text-foreground">
          <section className="py-20">
            <div className="container-xl">
              <h1 className="text-4xl font-bold mb-6">
                Curso de Excel em Barueri | Presencial e Online | Grupo Yto Nihon
              </h1>

              <p className="text-lg mb-6">
                Aprenda Excel na prática com o Grupo Yto Nihon, referência em treinamentos para profissionais e empresas em Barueri, Alphaville, Osasco e região.
              </p>

              <p className="mb-6">
                Se você procura um curso de Excel em Barueri com foco prático e aplicação no mercado de trabalho, aqui você encontra uma formação completa para evoluir profissionalmente.
              </p>
              
              <p className="mb-6">
                Estamos localizados próximos a Alphaville, atendendo alunos de Barueri, Santana de Parnaíba, Osasco e toda a região.
              </p>

              <p className="mb-6">
                Nossos cursos atendem desde iniciantes até profissionais que desejam se especializar em Excel avançado, dashboards, automação e análise de dados.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Para quem é o curso de Excel?
              </h2>

              <ul className="mb-6 space-y-2">
                <li>✔ Pessoas que querem aprender Excel do zero</li>
                <li>✔ Profissionais que desejam crescer na carreira</li>
                <li>✔ Empresas que precisam treinar equipes</li>
                <li>✔ Quem busca uma transição para a área de dados</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                O que você vai aprender
              </h2>

              <ul className="mb-6 space-y-2">
                <li>✔ Excel básico ao avançado</li>
                <li>✔ Fórmulas e funções essenciais</li>
                <li>✔ Tabelas dinâmicas</li>
                <li>✔ Dashboards profissionais</li>
                <li>✔ Automação com Excel</li>
              </ul>

              <p className="mb-6">
Veja também nosso curso de Power BI em Barueri e amplie suas habilidades em análise de dados.
</p>

<a href="/curso-power-bi-barueri" className="text-blue-500 underline">
Ir para curso de Power BI em Barueri
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
                Curso de Excel para empresas em Barueri
              </h2>

              <p className="mb-6">
                Também oferecemos treinamentos corporativos personalizados para empresas em Barueri, Alphaville e região, com foco em produtividade e resultados reais.
              </p>

              <p className="mb-6">
                Se você está pesquisando por curso de Excel em Barueri, provavelmente já percebeu que aprender essa ferramenta pode abrir muitas oportunidades profissionais.
              </p>

              <p className="mb-6">
                A diferença está em aprender da forma certa, com prática e aplicação real.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
              >
                Quero aprender Excel em Barueri
              </a>
            </div>
          </section>
        </div>
      </Layout>
  
  );
};

export default CursoExcelBarueri;
