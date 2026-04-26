import { Layout } from "@/components/Layout";
import { WHATSAPP_LINK } from "@/lib/index";

const CursoPowerBIBarueri = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        <section className="py-20">
          <div className="container-xl">
            <h1 className="text-4xl font-bold mb-6">
              Curso de Power BI em Barueri e Alphaville.
            </h1>

            <p className="text-lg mb-6">
              Se você está buscando um curso de Power BI em Barueri ou Alphaville, o Grupo Yto Nihon oferece uma formação prática para transformar dados em dashboards, relatórios e análises profissionais.
            </p>

            <p className="mb-6">
              Estamos próximos a Alphaville e atendemos alunos de Barueri, Santana de Parnaíba, Osasco e toda a região, além de empresas que precisam capacitar suas equipes em Business Intelligence.
            </p>

            <p className="mb-6">
              O Power BI é uma das ferramentas mais utilizadas no mercado para análise de dados, criação de painéis gerenciais e apoio à tomada de decisão.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Para quem é o curso de Power BI?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Profissionais que trabalham com relatórios e indicadores</li>
              <li>✔ Pessoas que querem entrar na área de dados</li>
              <li>✔ Analistas que desejam criar dashboards profissionais</li>
              <li>✔ Empresas que precisam melhorar a gestão por dados</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              O que você vai aprender
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Importação e tratamento de dados</li>
              <li>✔ Modelagem de dados no Power BI</li>
              <li>✔ Criação de dashboards profissionais</li>
              <li>✔ Medidas e cálculos com DAX</li>
              <li>✔ Publicação e compartilhamento de relatórios</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Por que escolher o Grupo Yto Nihon?
            </h2>

            <ul className="mb-6 space-y-2">
              <li>✔ Mais de 100.000 alunos formados</li>
              <li>✔ Mais de 200 empresas atendidas</li>
              <li>✔ Metodologia prática focada no mercado</li>
              <li>✔ Professores com experiência real em dados e BI</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Treinamento de Power BI para empresas em Barueri
            </h2>

            <p className="mb-6">
              Também oferecemos treinamento de Power BI para empresas em Barueri, Alphaville e região, com conteúdo personalizado conforme a necessidade da equipe.
            </p>

            <p className="mb-6">
              Se você está pesquisando por curso de Power BI em Barueri, provavelmente já percebeu que dominar essa ferramenta pode abrir portas na área de dados, gestão e tecnologia.
            </p>

            <p className="mb-6">
              A diferença está em aprender com prática, projetos reais e visão de mercado.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Quero aprender Power BI agora
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CursoPowerBIBarueri;
