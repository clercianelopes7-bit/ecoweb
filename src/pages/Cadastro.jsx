import './Cadastro.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logoEcoWeb from '../assets/Logo-ecoweb.png.jpeg'

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [erro, setErro] = useState("");
  

const handleSubmit = async (e) => {

  e.preventDefault();

  if (!nome.trim() || !email.trim() || !senha || !confirmarSenha || !tipoUsuario) {
    setErro("Preencha todos os campos.");
    return;
  }

  if (senha.length < 8) {
    setErro("A senha deve ter pelo menos 8 caracteres.");
    return;
  }

  if (senha !== confirmarSenha) {
    setErro("As senhas não coincidem.");
    return;
  }

  
setErro("");

try {
  const resposta = await fetch("http://localhost:3000/api/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nome.trim(),
      email: email.trim(),
      senha,
      tipo: tipoUsuario
    })
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    setErro(dados.erro || dados.mensagem || "Não foi possível realizar o cadastro.");
    return;
  }

  alert("Cadastro realizado com sucesso!");
} catch (error) {
  console.error("Erro ao cadastrar usuário:", error);
  setErro("Não foi possível conectar à API EcoWeb.");
}

};


  return (

    <main className="cadastro-container">
      <section className="cadastro-card">
        <img src={logoEcoWeb} alt="Logo EcoWeb" className="cadastro-logo" />
        <h1>Crie sua conta</h1>

        <p className="cadastro-subtitulo">
          Preencha os dados abaixo para se cadastrar no EcoWeb.
        </p>

        
<form className="cadastro-form" onSubmit={handleSubmit}>

          <label htmlFor="nome">Nome completo</label>
         
<input
  type="text"
  id="nome"
  name="nome"
  placeholder="Digite seu nome"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
/>


          <label htmlFor="email">E-mail</label>
          
<input
  type="email"
  id="email"
  name="email"
  placeholder="Digite seu e-mail"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>


          <label htmlFor="senha">Senha</label>
          
<input
  type="password"
  id="senha"
  name="senha"
  placeholder="Digite sua senha"
  value={senha}
  onChange={(e) => setSenha(e.target.value)}
/>


          <label htmlFor="confirmarSenha">Confirmar senha</label>
         
            
<input
  type="password"
  id="confirmarSenha"
  name="confirmarSenha"
  placeholder="Confirme sua senha"
  value={confirmarSenha}
  onChange={(e) => setConfirmarSenha(e.target.value)}
/>

   <label htmlFor="tipoUsuario">Tipo de usuário</label>

<select
  id="tipoUsuario"
  name="tipoUsuario"
  value={tipoUsuario}
  onChange={(e) => setTipoUsuario(e.target.value)}
>
  <option value="">Selecione</option>
  <option value="usuario">Usuário</option>
  <option value="educador">Educador Ambiental</option>
  <option value="gestor">Gestor Ambiental</option>
</select>



{erro && <p role="alert" style={{ color: "red" }}>{erro}</p>}

          <button type="submit" className="botao-cadastrar">
            Cadastrar
          </button>
        </form>

       
<p className="login-link">
  Já possui uma conta? <Link to="/login">Entrar</Link>
</p>

      </section>
    </main>
  )
}

export default Cadastro