import "./Conteudos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoEcoWeb from "../assets/Logo-ecoweb.png.jpeg";

function Conteudos() {
  const navigate = useNavigate();
  const [conteudos, setConteudos] = useState([]);
const [carregando, setCarregando] = useState(true);
const [erro, setErro] = useState("");
useEffect(() => {
  async function buscarConteudos() {
    try {
      const resposta = await fetch("http://localhost:3000/api/conteudos");

      if (!resposta.ok) {
        throw new Error("Não foi possível carregar os conteúdos.");
      }

      const dados = await resposta.json();
      setConteudos(dados);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  buscarConteudos();
}, []);

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
          {carregando ? (
  <p>Carregando conteúdos...</p>
) : erro ? (
  <p role="alert">{erro}</p>
) : conteudos.length === 0 ? (
  <p>Nenhum conteúdo cadastrado ainda.</p>
) : (
  conteudos.map((conteudo) => (
    <article className="conteudo-card" key={conteudo.id_conteudo}>
      <div className="conteudo-imagem reciclagem">🌱</div>

      <div className="conteudo-info">
        <h2>{conteudo.titulo}</h2>
        <p>{conteudo.descricao}</p>
      </div>
    </article>
  ))
)}

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