import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

const initialPacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

const App = () => {
  const [pacientes, setPacientes] = useState(initialPacientes);

  const [editando, setEditando] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const addPaciente = (paciente) => {
    const nuevo = {
      uuid: uuidv4(),
      mascota: paciente.mascota,
      proprietario: paciente.proprietario,
      celular: paciente.celular,
      alta: paciente.alta,
      sintomas: paciente.sintomas,
    }
    setPacientes([...pacientes, nuevo]);
  }

  const editarPaciente = (uuid, paciente) => {
    const newArray = [...pacientes];
  
    const index = newArray.findIndex((p) => p.uuid === uuid);

    newArray[index] = paciente;
    setPacientes(newArray);
  }

  const deletePaciente = (uuid) => {
    const newArray = [...pacientes];
    setPacientes(newArray.filter(paciente => paciente.uuid !== uuid));
    return Swal.fire({
      icon: "success",
      title: "Has eliminado esta paciente!",
      showConfirmButton: false,
      timer: 1000
    });
  }

  return (
    <>
      <div className="container mx-auto md:h-screen overflow-y-hidden">
        <Header/>
        
        <div className="mt-5 md:flex">
          <Formulario addPaciente={addPaciente} editando={editando} setEditando={setEditando} editarPaciente={editarPaciente}/>
          
          <ListadoPacientes pacientes={pacientes} deletePaciente={deletePaciente} setEditando={setEditando}/>
        </div>
      </div>
    </>
  )
}

export default App
