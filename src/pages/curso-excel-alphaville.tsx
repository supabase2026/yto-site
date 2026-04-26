// src/pages/curso-excel-alphaville.tsx

import SeoLocalPage from "./SeoLocalPage";

const CursoExcelAlphaville = () => (
  <SeoLocalPage
    titulo="Curso de Excel em Alphaville"
    subtitulo="Aprenda Excel de forma prática em Alphaville com o Grupo Yto Nihon, uma escola especializada em treinamentos profissionais para alunos e empresas."
    cidade="Alphaville"
    curso="curso de Excel"
    publico={[
      "Profissionais que usam planilhas no trabalho",
      "Pessoas que querem melhorar a produtividade",
      "Alunos que desejam aprender Excel do básico ao avançado",
      "Empresas que precisam capacitar suas equipes",
    ]}
    conteudos={[
      "Fórmulas e funções essenciais",
      "Tabelas, filtros e formatação profissional",
      "Tabelas dinâmicas e análise de dados",
      "Gráficos e relatórios gerenciais",
      "Introdução ao Excel aplicado ao mercado",
    ]}
    empresas
    cta="Quero aprender Excel em Alphaville"
  />
);

export default CursoExcelAlphaville;
