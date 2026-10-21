import React, { useState, useEffect } from 'react';

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

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [jugadorRegistrado, setJugadorRegistrado] = useState(null);

  const manejarRegistro = (evento) => {
    evento.preventDefault();
    setJugadorRegistrado({ nombre, apellido, edad });
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

      <button onClick={lanzarDado} style={{ padding: '16px 40px', fontSize: '1.4rem', fontWeight: 'bold', cursor: 'pointer', backgroundColor: '#2471a3', color: 'white', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        Tirar Dado
      </button>

      {jugadorRegistrado && (
        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px 20px', borderRadius: '6px', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 'bold', width: '100%', maxWidth: '300px', textAlign: 'center', boxSizing: 'border-box' }}>
          👤 Jugador: {jugadorRegistrado.nombre} {jugadorRegistrado.apellido} ({jugadorRegistrado.edad} años)
        </div>
      )}

      <form onSubmit={manejarRegistro} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '300px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', textAlign: 'center' }}>Registro de Datos</h3>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required autoComplete="off" style={{ padding: '8px', fontSize: '1rem' }} />
        <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required autoComplete="off" style={{ padding: '8px', fontSize: '1rem' }} />
        <input type="number" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} required min="1" style={{ padding: '8px', fontSize: '1rem' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#2471a3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Registrar Datos del Jugador</button>
      </form>

    </div>
  );
}

export default App;
