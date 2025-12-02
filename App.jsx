import React, { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    telefone: "",
    instagram: "",
    github: "",
    pensamento: "",
    probleminha: "",
    ultimaSerie: "",
    ultimoJogo: "",
    musica: "",
    genero: "",
    habilidadeEspecial: "",
    poderEspecial: "",
    time: "",
    versiculoBiblia: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Informações enviadas com sucesso!");
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginTop: "10px",
      fontWeight: "bold",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "15px",
      transition: "0.2s",
    },
    inputFocus: {
      borderColor: "#4a90e2",
    },
    button: {
      marginTop: "20px",
      padding: "12px 20px",
      backgroundColor: "#4a90e2",
      color: "#fff",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      width: "100%",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#357ABD",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Formulário de Informações</h2>

      <form onSubmit={handleSubmit}>
        {[
          ["nome", "Nome", "Digite seu nome"],
          ["idade", "Idade", "Digite sua idade"],
          ["telefone", "Telefone", "Digite seu telefone"],
          ["instagram", "Instagram", "@seuusuario"],
          ["github", "GitHub", "Link do seu GitHub"],
          ["pensamento", "Pensamento", "Um pensamento do dia"],
          ["probleminha", "Probleminha", "Conte um probleminha"],
          ["ultimaSerie", "Última série assistida", "Nome da série"],
          ["ultimoJogo", "Último jogo jogado", "Nome do jogo"],
          ["musica", "Música favorita", "Nome da música"],
          ["genero", "Gênero musical favorito", "Ex: Rock, Pop, Rap..."],
          ["habilidadeEspecial", "Habilidade especial", "Sua habilidade"],
          ["poderEspecial", "Poder especial", "Seu poder especial"],
          ["time", "Time que torce", "Digite o nome do seu time"],
          ["versiculoBiblia", "Versiculo da Biblia", "Digite o seu versiculo favorito"],
          ["email", "Email", "Digite o seu email"],
          ["senha", "Senha", "Digite a sua senha"],
        ].map(([key, label, placeholder]) => (
          <div key={key}>
            <label style={styles.label}>{label}:</label>
            <input
              type="text"
              name={key}
              placeholder={placeholder}
              value={formData[key]}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        ))}

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Enviar informações
        </button>
      </form>
    </div>
  );
}
