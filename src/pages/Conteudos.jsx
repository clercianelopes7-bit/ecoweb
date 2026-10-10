import "./Conteudos.css";
import { useNavigate } from "react-router-dom";
import logoEcoWeb from "../assets/Logo-ecoweb.png.jpeg";

function Conteudos() {
  const navigate = useNavigate();

  return (
    <div className="conteudos-page">
      <header className="conteudos-header">
        
<button
  type="button"
  className="menu-icon"
  onClick={() => navigate("/dashboard")}
  aria-label="Voltar ao Dashboard"
>
  ☰
</button>


        <div className="header-logo">
          <img src={logoEcoWeb} alt="EcoWeb" />
        </div>

        <div className="profile-icon">👤</div>
      </header>

      <main className="conteudos-container">
        <section className="conteudos-intro">
          <h1>📖 Conteúdos Educativos</h1>
          <p>Aprenda e pratique a sustentabilidade!</p>
        </section>

        <section className="conteudos-lista">
          <article className="conteudo-card">
            <div className="conteudo-imagem reciclagem">♻️</div>

            <div className="conteudo-info">
              <h2>Reciclagem: um hábito que transforma</h2>
              <p>
                Saiba como separar corretamente os resíduos e reduzir impactos.
              </p>
              <button type="button">Ler mais ›</button>
            </div>
          </article>

          <article className="conteudo-card">
            <div className="conteudo-imagem agua">🚰</div>

            <div className="conteudo-info">
              <h2>Economia de Água</h2>
              <p>Dicas simples para reduzir o consumo de água no dia a dia.</p>
              <button type="button">Ler mais ›</button>
            </div>
          </article>

          <article className="conteudo-card">
            <div className="conteudo-imagem energia">☀️</div>

            <div className="conteudo-info">
              <h2>Energia Solar: o futuro sustentável</h2>
              <p>
                Conheça os benefícios da energia solar para o planeta e para você.
              </p>
              <button type="button">Ler mais ›</button>
            </div>
          </article>
        </section>

        <section className="dica-sustentavel">
          <div className="dica-icone">🌱</div>

          <div>
            <h2>Dica Sustentável</h2>
            <p>Pequenas atitudes geram grandes impactos!</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Conteudos;