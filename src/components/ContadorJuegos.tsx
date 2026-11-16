import {useGet} from "../hooks/useGet";
import type {RespuestaJuegos} from "../Typescript/Videojuego";

function ContadorJuegos() {

    const {data, isLoading, error} =
        useGet<RespuestaJuegos>("http://localhost:3000/juegos/");

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    const totalJuegos = data?.results.length ?? 0;

    return (
        <div>
            <p>Total de videojuegos: {totalJuegos}</p>
        </div>
    );
}

export default ContadorJuegos;