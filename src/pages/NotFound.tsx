import styled from "@emotion/styled";
import {Centrado} from "../components/ui/Contenedor.tsx";
import {Boton} from "../components/ui/Boton.tsx";
import {Titulo} from "../components/ui/Texto.tsx";
import {Tarjeta} from "../components/ui/Tarjeta.tsx";

import {Link} from "react-router";
const Enlace = styled(Link)`
    text-decoration: none;
    margin: 10px;
    color: ${({ theme }) => theme.color.textoGris};

    &:hover {
        color: ${({ theme }) => theme.color.azul};
    }
`;


const TituloAzul = styled(Titulo)`
    color: ${({theme}) => theme.color.azul};
`
const TarjetaNotFound = styled(Tarjeta)`
    max-width: 300px;
`;

const Texto = styled.p`
    font-size: 15px;
    color: ${({theme}) => theme.color.textoMuteado};
    margin: 0;
`;

function NotFound() {
    return (
        <Centrado>
            <TarjetaNotFound>
                <TituloAzul>No existe esta URL</TituloAzul>
                <Texto>Tendras que volver al inicio.</Texto>
                <Enlace to="/">
                    <Boton>Volver</Boton>
                </Enlace>
            </TarjetaNotFound>
        </Centrado>
    );
}

export default NotFound;