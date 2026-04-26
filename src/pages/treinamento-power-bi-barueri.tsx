// src/pages/treinamento-power-bi-barueri.tsx

import SeoLocalPage from "./SeoLocalPage";

const TreinamentoPowerBIBarueri = () => (
  <SeoLocalPage
    titulo="Treinamento de Power BI em Barueri para Empresas"
    subtitulo="Treinamento corporativo de Power BI em Barueri para empresas que desejam transformar dados em dashboards, indicadores e decisões estratégicas."
    cidade="Barueri"
    curso="treinamento de Power BI para empresas"
    publico={[
      "Empresas que querem implantar cultura de dados",
      "Times de BI, financeiro, comercial e operações",
      "Gestores que precisam acompanhar indicadores",
      "Colaboradores que já usam Excel e querem evoluir",
    ]}
    conteudos={[
      "Conexão com diferentes fontes de dados",
      "Tratamento e transformação no Power Query",
      "Modelagem de dados",
      "Criação de medidas DAX",
      "Dashboards executivos para tomada de decisão",
    ]}
    empresas
    cta="Quero treinamento de Power BI para minha empresa"
  />
);

export default TreinamentoPowerBIBarueri;
