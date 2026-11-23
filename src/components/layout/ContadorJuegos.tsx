import {useGet} from "../../hooks/useGet.ts";
import type {RespuestaJuegos} from "../../Typescript/Videojuego.ts";
import styled from "@emotion/styled";
import Cargando from "./Cargando.tsx";
import {Tarjeta} from "../ui/Tarjeta.tsx";
import {Centrado} from "../ui/Contenedor.tsx";

const TarjetaContador = styled(Tarjeta)`
    max-width: 300px;
`;

const Numero = styled.h1`
    color: ${({theme}) => theme.color.azul};
    margin: 0;
`;

const Texto = styled.p`
    font-size: 15px;
    color: ${({theme}) => theme.color.textoMuteado};
    margin: 0;
`;

function ContadorJuegos() {
    const {data, isLoading, error} =
        useGet<RespuestaJuegos>("http://localhost:3000/juegos/");

    if (isLoading) return <Cargando/>;
    if (error) return <p>Error: {error}</p>;

    const totalJuegos = data?.results.length ?? 0;

    return (
        <Centrado>
            <TarjetaContador>
                <Numero>{totalJuegos}</Numero>
                <Texto>Videojuegos</Texto>
            </TarjetaContador>
        </Centrado>
    );
}

export default ContadorJuegos;