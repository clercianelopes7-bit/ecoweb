import './Cadastro.css'
import logoEcoWeb from '../assets/Logo-ecoweb.png.jpeg'
function Cadastro() {
  return (
    <main className="cadastro-container">
      <section className="cadastro-card">
        <img src={logoEcoWeb} alt="Logo EcoWeb" className="cadastro-logo" />
        <h1>Crie sua conta</h1>

        <p className="cadastro-subtitulo">
          Preencha os dados abaixo para se cadastrar no EcoWeb.
        </p>

        <form className="cadastro-form">
          <label htmlFor="nome">Nome completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
          />

          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirme sua senha"
          />
   <label htmlFor="tipoUsuario">Tipo de usuário</label>
<select id="tipoUsuario" name="tipoUsuario">
  <option value="">Selecione</option>
  <option value="usuario">Usuário</option>
  <option value="educador">Educador Ambiental</option>
  <option value="gestor">Gestor Ambiental</option>
</select>

          <button type="submit" className="botao-cadastrar">
            Cadastrar
          </button>
        </form>

        <p className="login-link">
          Já possui uma conta? <a href="#">Entrar</a>
        </p>
      </section>
    </main>
  )
}

export default Cadastro