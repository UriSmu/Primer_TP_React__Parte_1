import '../styles/Formulario.css';
import { useState } from 'react';

function Formulario({ agregarCita }) {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const enviarFormulario = (e) => {
    e.preventDefault();

    // Validación: que ningún campo esté vacío
    if (
      mascota === '' ||
      propietario === '' ||
      fecha === '' ||
      hora === '' ||
      sintomas === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Crear nueva cita
    const nuevaCita = {
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    };

    // Agregar cita al listado
    agregarCita(nuevaCita);

    // Limpiar formulario
    setMascota('');
    setPropietario('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <form onSubmit={enviarFormulario}>
      <label>Nombre Mascota</label>
      <input
        type="text"
        value={mascota}
        onChange={(e) => setMascota(e.target.value)}
      />

      <label>Nombre Dueño</label>
      <input
        type="text"
        value={propietario}
        onChange={(e) => setPropietario(e.target.value)}
      />

      <label>Fecha</label>
      <input
        type="date"
        value={fecha}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setFecha(e.target.value)}
      />

      <label>Hora</label>
      <input
        type="time"
        value={hora}
        min="09:00"
        max="18:00"
        step="1200"
        onChange={(e) => setHora(e.target.value)}
      />

      <label>Síntomas</label>
      <textarea
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
      ></textarea>

      <button type="submit">Agregar Cita</button>
    </form>
  );
}

export default Formulario;