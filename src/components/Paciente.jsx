const Paciente = ({paciente, deletePaciente, setEditando}) => {

    const {uuid, mascota, proprietario, celular, alta, sintomas} = paciente;

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{mascota}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Proprietario: <span className="font-normal normal-case">{proprietario}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Celular: <span className="font-normal normal-case">{celular}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: <span className="font-normal normal-case">{alta}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

            <div className="flex justify-between mt-8">
                <button className="bg-green-400 hover:bg-green-500 uppercase font-bold cursor-pointer rounded-md py-2 px-10" onClick={() => setEditando(paciente)}>Editar</button>
                <button className="bg-red-400 hover:bg-red-500 uppercase font-bold cursor-pointer rounded-md py-2 px-10" onClick={() => deletePaciente(uuid)} >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente;
