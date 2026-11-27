import {useGet} from "../hooks/useGet";
import {usePut} from "../hooks/usePut";
import {useParams, useNavigate} from "react-router";
import Cargando from "../components/layout/Cargando.tsx";
import type {CrearJuego, Videojuego} from "../Typescript/Videojuego.ts";
import FormularioVideojuego from "../components/FormularioJuego.tsx";

function EditarJuego() {
    //leer la id de la url
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    //cargar el juego get para el formulario
    const {data: juego, isLoading: loadingGet, error: errorGet} =
        useGet<Videojuego>(`http://localhost:3000/juegos/${id}/`);

    //hook del useput
    const {isLoading, error, actualizar} =
        usePut<Videojuego, CrearJuego>(`http://localhost:3000/juegos/${id}/`);

    async function Guardar(datos: CrearJuego) {
        const actualizado = await actualizar(datos);
        if (actualizado) navigate("/juegos");
    }

    if (loadingGet) return <Cargando />;
    if (errorGet) return <p>Error: {errorGet}</p>;
    if (!juego) return null;

    return (
        <FormularioVideojuego key={juego.id} videojuegoObtenido={juego} onGuardar={Guardar} isLoading={isLoading}
                              error={error}/>
    );
}

export default EditarJuego;