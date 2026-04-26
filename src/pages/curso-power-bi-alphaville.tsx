// src/pages/curso-power-bi-alphaville.tsx

import SeoLocalPage from "./SeoLocalPage";

const CursoPowerBIAlphaville = () => (
  <SeoLocalPage
    titulo="Curso de Power BI em Alphaville"
    subtitulo="Aprenda Power BI em Alphaville com uma metodologia prática para criação de dashboards, relatórios e análises profissionais."
    cidade="Alphaville"
    curso="curso de Power BI"
    publico={[
      "Profissionais que trabalham com indicadores",
      "Analistas que desejam criar dashboards profissionais",
      "Pessoas que querem entrar na área de dados",
      "Empresas que desejam melhorar a gestão por dados",
    ]}
    conteudos={[
      "Importação e tratamento de dados",
      "Modelagem de dados no Power BI",
      "Criação de dashboards profissionais",
      "Medidas e cálculos com DAX",
      "Publicação e compartilhamento de relatórios",
    ]}
    empresas
    cta="Quero aprender Power BI em Alphaville"
  />
);

export default CursoPowerBIAlphaville;
