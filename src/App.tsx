import CursoExcelBarueri from "./pages/CursoExcelBarueri";
import TreinamentoCorporativoEmpresas from './pages/TreinamentoCorporativoEmpresas';
import TreinamentoIAEmpresas from './pages/TreinamentoIAEmpresas';
import TreinamentoMSProjectEmpresas from './pages/TreinamentoMSProjectEmpresas';
import TreinamentoExcelEmpresas from './pages/TreinamentoExcelEmpresas';
import TreinamentoSQLEmpresas from './pages/TreinamentoSQLEmpresas';
import TreinamentoPowerBIEmpresas from './pages/TreinamentoPowerBIEmpresas';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Solucoes from "./pages/Solucoes";
import PosGraduacao from "./pages/PosGraduacao";
import YtoAcademy from "./pages/YtoAcademy";
import DataAnalytics from "./pages/DataAnalytics";
import InCompany from "./pages/InCompany";
import MentoriaVIP from "./pages/MentoriaVIP";
import ParaEmpresas from "./pages/ParaEmpresas";
import MonteJornada from "./pages/MonteJornada";
import Contato from "./pages/Contato";
import { ROUTE_PATHS } from "./lib/index";
const queryClient = new QueryClient();

function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          <Route path={ROUTE_PATHS.QUEM_SOMOS} element={<QuemSomos />} />
          <Route path={ROUTE_PATHS.SOLUCOES} element={<Solucoes />} />
          <Route path={ROUTE_PATHS.POS_GRADUACAO} element={<PosGraduacao />} />
          <Route path="/pos-graduacao-dados" element={<PosGraduacao />} />
          <Route path={ROUTE_PATHS.YTO_ACADEMY} element={<YtoAcademy />} />
          <Route path={ROUTE_PATHS.DATA_ANALYTICS} element={<DataAnalytics />} />
          <Route path="/formacao-data-analytics" element={<DataAnalytics />} />
          <Route path={ROUTE_PATHS.IN_COMPANY} element={<InCompany />} />
          <Route path={ROUTE_PATHS.MENTORIA_VIP} element={<MentoriaVIP />} />
          <Route path={ROUTE_PATHS.PARA_EMPRESAS} element={<ParaEmpresas />} />
          <Route path={ROUTE_PATHS.JORNADA} element={<MonteJornada />} />
          <Route path={ROUTE_PATHS.CONTATO} element={<Contato />} />
          <Route path="/treinamento-excel-empresas" element={<TreinamentoExcelEmpresas />} />
          <Route path="/treinamento-power-bi-empresas" element={<TreinamentoPowerBIEmpresas />} />
          <Route path="/treinamento-sql-empresas" element={<TreinamentoSQLEmpresas />} />
          <Route path="/treinamento-ms-project-empresas" element={<TreinamentoMSProjectEmpresas />} />
          <Route path="/treinamento-ia-empresas" element={<TreinamentoIAEmpresas />} />
          <Route path="/treinamento-corporativo-empresas" element={<TreinamentoCorporativoEmpresas />} />
          <Route path="/treinamento-corporativo" element={<TreinamentoCorporativoEmpresas />} />
          <Route path="/curso-excel-barueri" element={<CursoExcelBarueri />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
