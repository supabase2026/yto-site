// src/pages/curso-excel-osasco.tsx

import SeoLocalPage from "./SeoLocalPage";

const CursoExcelOsasco = () => (
  <SeoLocalPage
    titulo="Curso de Excel em Osasco"
    subtitulo="Se você procura um curso de Excel em Osasco, o Grupo Yto Nihon oferece uma formação prática para uso profissional de planilhas, relatórios e análise de dados."
    cidade="Osasco"
    curso="curso de Excel"
    publico={[
      "Iniciantes que desejam aprender Excel",
      "Profissionais administrativos e financeiros",
      "Pessoas em transição de carreira",
      "Empresas da região de Osasco",
    ]}
    conteudos={[
      "Excel básico, intermediário e avançado",
      "Fórmulas, funções e referências",
      "Organização de bases de dados",
      "Tabelas dinâmicas",
      "Relatórios e gráficos profissionais",
    ]}
    empresas
    cta="Quero aprender Excel em Osasco"
  />
);

export default CursoExcelOsasco;
