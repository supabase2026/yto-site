// src/pages/curso-power-bi-presencial-barueri.tsx

import SeoLocalPage from "./SeoLocalPage";

const CursoPowerBIPresencialBarueri = () => (
  <SeoLocalPage
    titulo="Curso Presencial de Power BI em Barueri"
    subtitulo="Faça um curso presencial de Power BI em Barueri e aprenda na prática a criar dashboards, indicadores e relatórios profissionais."
    cidade="Barueri"
    curso="curso presencial de Power BI"
    publico={[
      "Profissionais que preferem aprender presencialmente",
      "Analistas que trabalham com relatórios",
      "Pessoas que querem migrar para a área de dados",
      "Empresas que buscam treinamento presencial",
    ]}
    conteudos={[
      "Importação de bases de dados",
      "Tratamento com Power Query",
      "Modelagem de dados",
      "DAX aplicado a indicadores",
      "Construção de dashboards profissionais",
    ]}
    empresas
    cta="Quero fazer Power BI presencial"
  />
);

export default CursoPowerBIPresencialBarueri;
