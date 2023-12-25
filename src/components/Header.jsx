import Swal from "sweetalert2";

const Header = () => {

    const handleClickWarn = () => {
        return Swal.fire({
            icon: 'info',
            title: 'Aviso',
            text: 'Esta página web no utiliza una base de datos en línea. Los datos se almacenan localmente en tu dispositivo. Ten en cuenta que al eliminar el historial de navegación, se borrarán tus datos almacenados en este sitio web.',
          });
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <img src="./src/images/logo.png" className="w-14 h-14 m-5"/>

                <a target="_blank" rel="noopener" href="https://axeltristan.com/">
                    <h1 className="font-black text-5xl text-center" href="">Veterinaria <span className="text-indigo-600">Mariana</span></h1>
                </a>
            </div>
            
            <div className="flex justify-end w-10 h-10">
                <img id="warnImg" src="./src/images/warn.svg" onClick={() => handleClickWarn()}/>
            </div>
        </>
    );
}

export default Header;
