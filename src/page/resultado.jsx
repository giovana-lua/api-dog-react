import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Resultado() {
    const { busca } = useParams();
    const [imagens, setImagens] = useState([]);
    const [carregando, setCarregando] = useState(true);
  
    useEffect(() => {
      async function carregarGaleria() {
        try {
          const url = `https://dog.ceo/api/breed/${busca.toLowerCase()}/images/random/9`;
          const response = await fetch(url);
          const data = await response.json();
  
          if (data.status === "success") {
            setImagens(data.message);
          } else {
            alert("Raça não encontrada!");
          }
        } catch (error) {
          console.error("Erro ao buscar imagens:", error);
        } finally {
          setCarregando(false);
        }
      }
  
      carregarGaleria();
    }, [busca]);
  
    if (carregando) return <h2>Carregando...</h2>;
  
    return (
      <div>
        <h2>Resultados para: {busca}</h2>
  
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {imagens.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="dog"
              width="220"
              style={{ borderRadius: 12 }}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default Resultado;
  