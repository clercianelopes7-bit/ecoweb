 import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoEcoWeb from "../assets/Logo-ecoweb.png.jpeg";
function Dashboard() {
  const navigate = useNavigate();
  const [totalAcoes, setTotalAcoes] = useState(0);
const [totalConteudos, setTotalConteudos] = useState(0);
const [carregando, setCarregando] = useState(true);
const [erro, setErro] = useState("");
useEffect(() => {
  async function carregarDashboard() {
    try {
      const [respostaAcoes, respostaConteudos] = await Promise.all([
        fetch("http://localhost:3000/api/acoes"),
        fetch("http://localhost:3000/api/conteudos"),
      ]);

      if (!respostaAcoes.ok || !respostaConteudos.ok) {
        throw new Error("Não foi possível carregar os dados do Dashboard.");
      }

      const acoes = await respostaAcoes.json();
      const conteudos = await respostaConteudos.json();

      setTotalAcoes(acoes.length);
      setTotalConteudos(conteudos.length);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  carregarDashboard();
}, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
       <button
  type="button"
  className="menu-button"
  onClick={() => navigate("/conteudos")}
  aria-label="Ir para conteúdos educacionais"
>
  ☰
</button>

        <div className="logo-area">
          <img src={logoEcoWeb} alt="EcoWeb" />
          <span>PERFIL EDUCADOR</span>
        </div>

        <div className="perfil">👤</div>
      </header>

      <main className="dashboard-content">
        <h1>Bem-vindo ao EcoWeb!</h1>

        <section className="resumo-card verde">
  <span>Ações Registradas</span>
  <strong>🌿 {carregando ? "..." : erro ? "—" : totalAcoes}</strong>
</section>

<section className="resumo-card claro">
  <span>Conteúdos Disponíveis</span>
  <strong>📖 {carregando ? "..." : erro ? "—" : totalConteudos}</strong>
</section>

{erro && <p role="alert">{erro}</p>}

        <section className="impacto-resumo">
          <div>
            <span>Impacto Ambiental</span>
            <div className="medidor">🌡️</div>
          </div>

          <strong>Médio</strong>
        </section>

        <section className="painel">
          <h2>Impacto Ambiental</h2>

          <div className="grafico">
            <div className="barra baixa"></div>
            <div className="barra media1"></div>
            <div className="barra media2"></div>
            <div className="barra alta"></div>
          </div>

          <div className="legendas">
            <span>Baixo</span>
            <span>Médio</span>
            <span>Alto</span>
          </div>
        </section>

        <section className="painel atividades">
          <h2>Últimas atividades</h2>

          <p>● &nbsp; Nova ação sustentável registrada</p>
          <p>● &nbsp; Novas dicas publicadas sobre reciclagem</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard; 