import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Conteudos from "./pages/Conteudos";
import RegistrarAcao from "./pages/RegistrarAcao";
import ListarAcoes from "./pages/ListarAcoes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conteudos" element={<Conteudos />} />
        <Route path="/registrar-acao" element={<RegistrarAcao />} />
        <Route path="/acoes" element={<ListarAcoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;