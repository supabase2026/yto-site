// src/pages/treinamento-excel-barueri.tsx

import SeoLocalPage from "./SeoLocalPage";

const TreinamentoExcelBarueri = () => (
  <SeoLocalPage
    titulo="Treinamento de Excel em Barueri para Empresas"
    subtitulo="Capacite sua equipe com treinamento de Excel em Barueri, personalizado conforme a necessidade da empresa e o nível dos colaboradores."
    cidade="Barueri"
    curso="treinamento de Excel para empresas"
    publico={[
      "Empresas que precisam capacitar equipes",
      "Colaboradores das áreas administrativa e financeira",
      "Times que trabalham com controles internos",
      "Gestores que desejam melhorar produtividade",
    ]}
    conteudos={[
      "Excel essencial para rotina corporativa",
      "Fórmulas e funções profissionais",
      "Tabelas dinâmicas",
      "Dashboards e relatórios",
      "Boas práticas com planilhas empresariais",
    ]}
    empresas
    cta="Quero treinamento de Excel para minha empresa"
  />
);

export default TreinamentoExcelBarueri;
