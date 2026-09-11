 import "./Dashboard.css";
import logoEcoWeb from "../assets/Logo-ecoweb.png.jpeg";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <button className="menu-button">☰</button>

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
          <strong>🌿 12</strong>
        </section>

        <section className="resumo-card claro">
          <span>Conteúdos Disponíveis</span>
          <strong>📖 8</strong>
        </section>

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