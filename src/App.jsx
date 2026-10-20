import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";


function App() {
  const [numeroDado, setNumeroDado] = useState(1);
  const emojisDados = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  useEffect(() => {
    console.log("El dado cambió de valor en memoria: " + numeroDado);
  }, [numeroDado]);

  const lanzarDado = () => {
    const nuevoNumero = Math.floor(Math.random() * 6) + 1;
    setNumeroDado(nuevoNumero);
  };

  const obtenerMensajeCondicional = (numero) => {
    if (numero === 1 || numero === 2) return "¡Qué mal tiro!!!";
    if (numero >= 3 && numero <= 5) return "¡Buen tiro!";
    if (numero === 6) return "¡Felicidades, sacaste el mayor!";
    return "";
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#c2e4fc', fontFamily: 'Arial', color: '#1c2833', padding: '20px', boxSizing: 'border-box' }}>
      
      <h1>Simulador de Dado</h1>
      
      <div style={{ fontSize: '10rem', color: '#2471a3', lineHeight: '1', margin: '10px 0' }}>
        {emojisDados[numeroDado - 1]}
      </div>
      
      <h3 style={{ fontSize: '1.8rem', margin: '10px 0' }}>Te toca: {numeroDado}</h3>
      
      <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#78281f', margin: '15px 0', textTransform: 'uppercase' }}>
        {obtenerMensajeCondicional(numeroDado)}
      </h2>

      <button onClick={lanzarDado} style={{ padding: '16px 40px', fontSize: '1.4rem', fontWeight: 'bold', cursor: 'pointer', backgroundColor: '#2471a3', color: 'white', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        Tirar Dado
      </button>

    </div>
  );
}

export default App;
