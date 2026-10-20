import { useState } from 'react';

function Formulario({ registrar }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    registrar({ nombre, apellido, edad });
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', maxWidth: '400px', margin: '0 auto 20px auto', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>Datos del Jugador</h3>
      <form onSubmit={enviar}>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
          style={{ margin: '5px', padding: '8px', width: '80%' }}
        />
        <input 
          type="text" 
          placeholder="Apellido" 
          value={apellido} 
          onChange={(e) => setApellido(e.target.value)} 
          required 
          style={{ margin: '5px', padding: '8px', width: '80%' }}
        />
        <input 
          type="number" 
          placeholder="Edad" 
          value={edad} 
          onChange={(e) => setEdad(e.target.value)} 
          required 
          style={{ margin: '5px', padding: '8px', width: '80%' }}
        />
        <br />
        <button type="submit" style={{ marginTop: '10px', padding: '8px 15px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Registrar Jugador
        </button>
      </form>
    </div>
  );
}

export default Formulario;
