import Formulario from './Formulario';
import Cita from './Cita';
import Listado from './Listado';

function App() {

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div class="container">
        <Formulario/>
        <Listado/>
      </div>
    </>
  );
}

export default App;