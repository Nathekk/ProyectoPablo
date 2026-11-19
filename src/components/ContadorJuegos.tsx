import {useGet} from "../hooks/useGet";
import type {RespuestaJuegos} from "../Typescript/Videojuego";
import styled from "@emotion/styled";
import Cargando from "./Cargando.tsx";

function ContadorJuegos() {
    const Contenedor = styled.div`
    font-family: Arial, serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

    const Tarjeta = styled.div`
    background: white;
    width: 100%;
    max-width: 300px;
    padding: 35px;
    border-radius: 15px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
    const Numero = styled.h1`
        color: #2563eb;
        margin: 0;
    `;
    const Texto = styled.p`
        font-size: 15px;
        color: #727272;
        margin: 0;
    `;

    const {data, isLoading, error} =
        useGet<RespuestaJuegos>("http://localhost:3000/juegos/");

    if (isLoading) return <Cargando/>;
    if (error) return <p>Error: {error}</p>;

    const totalJuegos = data?.results.length ?? 0;

    return (
        <Contenedor>
            <Tarjeta>
                <Numero>{totalJuegos}</Numero>
                <Texto>Videojuegos</Texto>
            </Tarjeta>
        </Contenedor>
    );
}

export default ContadorJuegos;