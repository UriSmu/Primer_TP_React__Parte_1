import './Cita.css';

const Cita = ({ mascota, propietario, fecha, hora, sintomas }) => {
  return (
    <div class="cita">
      <p><strong>Mascota:</strong> {mascota}</p>
      <p><strong>Dueño:</strong> {propietario}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
      <button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
  );
};

export default Cita;