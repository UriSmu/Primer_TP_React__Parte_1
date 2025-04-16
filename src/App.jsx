import Formulario from './Formulario';
import Cita from './Cita';
import Listado from './Listado';

function App() {

  return (
    <div>
      <h1>Administrador de Citas</h1>
      <Formulario/>
      <h2>Listado de Citas</h2>
      <Listado/>
    </div>
  );
}

export default App;