import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [numeroDado, setNumeroDado] = useState(1);
  const [datosForm, setDatosForm] = useState({ nombre: '', apellido: '', edad: '' });
  const [jugadorActual, setJugadorActual] = useState(null);

  const emojisDados = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  useEffect(() => {
    console.log("El dado cambió de valor. Número actual: " + numeroDado);
  }, [numeroDado]);

  const manejarCambioInput = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({ ...datosForm, [name]: value });
  };

  const manejarEnvioFormulario = (evento) => {
    evento.preventDefault();
    setJugadorActual({ ...datosForm });
  };

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
    <div className="contenedor-principal">
      <h1>Simulador de Dado</h1>

      <form onSubmit={manejarEnvioFormulario} className="formulario-jugador">
        <h2>Registro del Jugador</h2>
        <div className="grupo-input">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={datosForm.nombre} onChange={manejarCambioInput} required autoComplete="off" />
        </div>
        <div className="grupo-input">
          <label>Apellido:</label>
          <input type="text" name="apellido" value={datosForm.apellido} onChange={manejarCambioInput} required autoComplete="off" />
        </div>
        <div className="grupo-input">
          <label>Edad:</label>
          <input type="number" name="edad" value={datosForm.edad} onChange={manejarCambioInput} required min="1" />
        </div>
        <button type="submit" className="btn-guardar">Registrar Datos</button>
      </form>

      {jugadorActual && (
        <div className="tarjeta-jugador">
          <p><strong>Jugador:</strong> {jugadorActual.nombre} {jugadorActual.apellido} | <strong>Edad:</strong> {jugadorActual.edad} años</p>
        </div>
      )}

      <div className="zona-dado">
        <div className="dado-display">
          {emojisDados[numeroDado - 1]}
        </div>
        
        <h3 className="letrero-te-toca">Te toca: {numeroDado}</h3>
        
        <h2 className="mensaje-suerte">
          {obtenerMensajeCondicional(numeroDado)}
        </h2>

        <button onClick={lanzarDado} className="btn-lanzar">
          Tirar Dado
        </button>
      </div>
    </div>
  );
}

export default App;
