import { useState } from "react";

function RegistrarAcao() {
  const [descricao, setDescricao] = useState("");
  const [impactoAmbiental, setImpactoAmbiental] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMensagem("");

    if (!descricao.trim() || !impactoAmbiental) {
      setMensagem("Preencha todos os campos obrigatórios.");
      return;
    }

    setEnviando(true);

    try {
      const resposta = await fetch("http://localhost:3000/api/acoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          descricao: descricao.trim(),
          impactoAmbiental,
          usuarioId: 1
        })
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.mensagem || "Erro ao registrar ação.");
      }

      setMensagem("Ação sustentável registrada com sucesso!");
      setDescricao("");
      setImpactoAmbiental("");
    } catch (erro) {
      setMensagem(Erro: ${erro.message});
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
      <h1>🌱 Registrar Ação Sustentável</h1>
      <p>Compartilhe uma atitude que ajuda o meio ambiente!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="descricao">Descrição da ação</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          placeholder="Ex.: Separei materiais recicláveis em casa"
          rows="5"
          required
          style={{ width: "100%", margin: "10px 0 20px" }}
        />

        <label htmlFor="impacto">Impacto ambiental</label>
        <select
          id="impacto"
          value={impactoAmbiental}
          onChange={(event) => setImpactoAmbiental(event.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0 20px" }}
        >
          <option value="">Selecione o impacto</option>
          <option value="Baixo">Baixo</option>
          <option value="Médio">Médio</option>
          <option value="Alto">Alto</option>
        </select>

        <button type="submit" disabled={enviando}>
          {enviando ? "Registrando..." : "Registrar ação"}
        </button>
      </form>

      {mensagem && <p role="status">{mensagem}</p>}
    </main>
  );
}

export default RegistrarAcao;