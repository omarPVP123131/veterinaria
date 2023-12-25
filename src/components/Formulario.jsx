import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({addPaciente, editando, setEditando, editarPaciente}) => {

    const [mascota, setMascota] = useState("");
    const [proprietario, setProprietario] = useState("");
    const [celular, setCelular] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if (Object.keys(editando).length > 0) {
            setMascota(editando.mascota);
            setProprietario(editando.proprietario);
            setCelular(editando.celular);
            setAlta(editando.alta);
            setSintomas(editando.sintomas);
        }
    }, [editando]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!mascota.trim() || !proprietario.trim() || !celular.trim() || !alta.trim() || !sintomas.trim()) {
            setError(true);
            setTimeout(() =>{
                setError(false);
            }, 1500);

            return Swal.fire({
                icon: "error",
                title: "Todos los campos deben de estar llenos",
                showConfirmButton: false,
                timer: 2500
            });
        }

        if (celular.trim().length != 10) {
            setError(true);
            setTimeout(() =>{
                setError(false);
            }, 1500);

            return Swal.fire({
                icon: "warning",
                title: "El numero celular no esta correcto!",
                showConfirmButton: false,
                timer: 2500
            });
        }

        if (Object.keys(editando).length > 0) {
            editarPaciente(editando.uuid, {
                uuid: editando.uuid,
                mascota: mascota,
                proprietario: proprietario,
                celular: celular,
                alta: alta,
                sintomas: sintomas,
            })

            Swal.fire({
                icon: "warning",
                title: "Has editado el paciente correctamente!",
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            addPaciente({
                mascota: mascota,
                proprietario: proprietario,
                celular: celular,
                alta: alta,
                sintomas: sintomas,
            });

            Swal.fire({
                icon: "success",
                title: "Has agregado un nuevo paciente!",
                showConfirmButton: false,
                timer: 2000
            });
        }
        
        setEditando(false);
        setError(false);
        setMascota("");
        setProprietario("");
        setCelular("");
        setAlta("");
        setSintomas("");
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">

            <h1 className="text-center font-black text-3xl">Seguimiento</h1>

            <p className="text-lg mt-5 text-center mb-10">Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span>.</p>

            <form className="bg-white shadow-md rounded-lg py-5 px-5 mb-10" onSubmit={handleSubmit}>

                {/*
                {error && (
                    <div>
                        <p>Por favor llena el formulario.</p>
                    </div>
                )}
                */}

                <div>
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input id="mascota" type="text" onChange={(e) => setMascota(e.target.value)} value={mascota} placeholder="Nombre de la mascota" className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                
                <div className="mt-5">
                    <label htmlFor="proprietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input id="proprietario" type="text" onChange={(e) => setProprietario(e.target.value)} value={proprietario} placeholder="Nombre del proprietario" className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                
                <div className="mt-5">
                    <label htmlFor="celular" className="block text-gray-700 uppercase font-bold">Numero Celular</label>
                    <input id="celular" type="number" onChange={(e) => setCelular(e.target.value)} value={celular} placeholder="Celular del proprietario" className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                
                <div className="mt-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                    <input id="alta" type="date" onChange={(e) => setAlta(e.target.value)} value={alta} className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                
                <div className="mt-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas Mascota</label>
                    <textarea id="sintomas" type="text" onChange={(e) => setSintomas(e.target.value)} value={sintomas} placeholder="Describe los sintomas de la mascota." className="outline-none border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                

                <input type="submit" className="mt-5 mb-1 bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" value={Object.keys(editando).length < 1 ? "agregar" : "editar"}/>
            </form>
        </div>
    );
}

export default Formulario;
