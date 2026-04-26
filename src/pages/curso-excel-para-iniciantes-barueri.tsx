// src/pages/curso-excel-para-iniciantes-barueri.tsx

import SeoLocalPage from "./SeoLocalPage";

const CursoExcelParaIniciantesBarueri = () => (
  <SeoLocalPage
    titulo="Curso de Excel para Iniciantes em Barueri"
    subtitulo="Comece no Excel do jeito certo com um curso prático para iniciantes em Barueri, ideal para quem quer ganhar segurança no uso de planilhas."
    cidade="Barueri"
    curso="curso de Excel para iniciantes"
    publico={[
      "Pessoas que nunca estudaram Excel",
      "Profissionais que têm dificuldade com planilhas",
      "Estudantes em busca do primeiro emprego",
      "Quem deseja melhorar produtividade no trabalho",
    ]}
    conteudos={[
      "Interface do Excel",
      "Criação e formatação de planilhas",
      "Fórmulas básicas",
      "Funções essenciais",
      "Gráficos simples e relatórios iniciais",
    ]}
    cta="Quero começar no Excel"
  />
);

export default CursoExcelParaIniciantesBarueri;
