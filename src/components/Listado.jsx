import '../styles/Listado.css';
import Cita from './Cita';

const Listado = ({ citas }) => {
  return (
    <div className="listado">
      <h2>Listado</h2>
      {citas.length === 0 ? (
        <p>No hay citas aún</p>
      ) : (
        citas.map((cita, index) => (
          <Cita key={index} {...cita} />
        ))
      )}
    </div>
  );
};

export default Listado;