import { useEffect, useState } from "react";

function ListarAcoes() {
  const [acoes, setAcoes] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtroImpacto, setFiltroImpacto] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarAcoes() {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch(
        "http://localhost:3000/api/acoes"
      );

      if (!resposta.ok) {
        throw new Error("Não foi possível carregar as ações.");
      }

      const dados = await resposta.json();

      if (!Array.isArray(dados)) {
        throw new Error("Formato de resposta inválido.");
      }

      setAcoes(dados);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarAcoes();
  }, []);

  const acoesFiltradas = acoes.filter((acao) => {
    const descricao = String(acao.descricao || "");
    const impacto = String(acao.impactoAmbiental || "");

    const correspondeBusca = descricao
      .toLowerCase()
      .includes(busca.toLowerCase());

    const correspondeImpacto =
      filtroImpacto === "" ||
      impacto.toLowerCase() === filtroImpacto.toLowerCase();

    return correspondeBusca && correspondeImpacto;
  });

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "24px",
        color: "#ffffff"
      }}
    >
      <h1>🌱 Ações Sustentáveis</h1>
      <p>Confira as ações registradas na plataforma EcoWeb.</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "24px"
        }}
      >
        <input
          type="text"
          placeholder="Pesquisar pela descrição..."
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          aria-label="Pesquisar ações"
          style={{
            padding: "12px",
            flex: "1 1 240px",
            color: "#222",
            backgroundColor: "#fff"
          }}
        />

        <select
          value={filtroImpacto}
          onChange={(event) =>
            setFiltroImpacto(event.target.value)
          }
          aria-label="Filtrar por impacto ambiental"
          style={{
            padding: "12px",
            color: "#222",
            backgroundColor: "#fff"
          }}
        >
          <option value="">Todos os impactos</option>
          <option value="Baixo">Baixo</option>
          <option value="Médio">Médio</option>
          <option value="Alto">Alto</option>
        </select>

        <button type="button" onClick={carregarAcoes}>
          Atualizar lista
        </button>
      </div>

      {carregando && <p>Carregando ações...</p>}

      {erro && (
        <p role="alert" style={{ color: "#ffb3b3" }}>
          {erro}
        </p>
      )}

      {!carregando && !erro && (
        <>
          <p>
            {acoesFiltradas.length} ação(ões) encontrada(s).
          </p>

          {acoesFiltradas.length === 0 ? (
            <p>Nenhuma ação encontrada.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gap: "16px",
                marginTop: "20px"
              }}
            >
              {acoesFiltradas.map((acao) => (
                <article
                  key={acao.id}
                  style={{
                    padding: "20px",
                    backgroundColor: "#244b3b",
                    borderRadius: "12px"
                  }}
                >
                  <h2>Ação #{acao.id}</h2>

                  <p>
                    <strong>Descrição:</strong>{" "}
                    {acao.descricao}
                  </p>

                  <p>
                    <strong>Impacto ambiental:</strong>{" "}
                    {acao.impactoAmbiental}
                  </p>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default ListarAcoes;