import "./Login.css";
import logoEcoWeb from "../assets/Logo-ecoweb.png.jpeg";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src={logoEcoWeb}
          alt="EcoWeb"
          className="login-logo"
        />

        <form className="login-form">
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div className="login-field">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
            />
          </div>

          <button type="submit" className="btn-entrar">
            Entrar
          </button>

          <button type="button" className="btn-criar-conta">
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;