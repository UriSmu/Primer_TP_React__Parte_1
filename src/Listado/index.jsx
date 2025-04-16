import './Listado.css';
import Cita from '../Cita';
let listaCitas = (
  <>
    <Cita mascota="Shaina" propietario="Uriel Smucler" fecha="29/04" hora="10:20" sintomas="Control rutinario"/>
    <Cita mascota="Pluto" propietario="Mickey Mouse" fecha="26/04" hora="15:40" sintomas="Resfrío"/>
    <Cita mascota="Negrita" propietario="Pedro Gómez" fecha="22/04" hora="17:00" sintomas="Baño y corte higienico"/>
  </>
)
const Listado = () => {
  return (
    listaCitas
  )
};

export default Listado;