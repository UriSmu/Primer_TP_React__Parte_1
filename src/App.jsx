import { useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <div>
      <h1>Administrador de Citas</h1>
      <Formulario agregarCita={agregarCita} />
      <h2>Listado de Citas</h2>
      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  );
}

export default App;