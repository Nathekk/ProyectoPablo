import {usePost} from '../hooks/usePost';
import {useNavigate} from "react-router";
import type {CrearJuego, Videojuego} from "../Typescript/Videojuego.ts";
import FormularioVideojuego from "../components/FormularioJuego.tsx";

function NuevoJuego() {
    const navigate = useNavigate()
    const {isLoading, error, post} = usePost<Videojuego, CrearJuego>('http://localhost:3000/juegos/');

    async function Guardar(nuevoJuego: CrearJuego) {
        const creado = await post(nuevoJuego);
        if (creado) navigate("/juegos")
    }

    return (
        <FormularioVideojuego
            onGuardar={Guardar}
            isLoading={isLoading}
            error={error}
        />
    );
}
export default NuevoJuego;