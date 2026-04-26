// src/pages/curso-power-bi-osasco.tsx

import SeoLocalPage from "./SeoLocalPage";

const CursoPowerBIOsasco = () => (
  <SeoLocalPage
    titulo="Curso de Power BI em Osasco"
    subtitulo="Aprenda Power BI em Osasco com foco em dashboards, relatórios gerenciais, indicadores e análise de dados para empresas."
    cidade="Osasco"
    curso="curso de Power BI"
    publico={[
      "Analistas de dados e BI",
      "Profissionais de Excel que querem evoluir",
      "Gestores que precisam acompanhar indicadores",
      "Empresas que querem treinar equipes em Power BI",
    ]}
    conteudos={[
      "Conexão com fontes de dados",
      "Tratamento de dados no Power Query",
      "Relacionamentos e modelagem",
      "DAX essencial para indicadores",
      "Dashboard executivo no Power BI",
    ]}
    empresas
    cta="Quero aprender Power BI em Osasco"
  />
);

export default CursoPowerBIOsasco;
