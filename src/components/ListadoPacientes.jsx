import { useSearchParams } from "react-router-dom";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, deletePaciente, setEditando}) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (e) => {
        const filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    }

    return (
        <div className="md:w-1/2 lg:w-3/5">
            {
                pacientes.length < 1 ?
                (
                    <>
                        <h1 className="font-black text-3xl text-center">No hay pacientes</h1>
                        <p className="text-xl mt-5 mb-10 text-center">Agrega a los <span className="text-indigo-600 font-bold">pacientes</span>, apareceran aqui.</p>
                    </>
                )
    
                :
    
                (
                    <>

                        <h1 className="font-black text-3xl text-center">Pacientes</h1>
                        <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>.</p>

                        <div className="ml-3 mr-7">
                            <input  className="outline-none w-full bg-white shadow-md px-5 py-2 rounded-lg " placeholder="Busca un proprietario." value={searchParams.get("filter") || ""} onChange={handleSearch}/>
                        </div>

                        <div className="md:h-screen overflow-y-scroll">
                            {
                                pacientes
                                .filter((paciente) => {
                                    const filter = searchParams.get("filter");
                                    if (!filter)
                                        return true;
                                    return paciente.proprietario.toLowerCase().includes(filter.toLowerCase());
                                })
                                .map((paciente, index) => (
                                    <Paciente key={index} paciente={paciente} deletePaciente={deletePaciente} setEditando={setEditando}/>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ListadoPacientes;