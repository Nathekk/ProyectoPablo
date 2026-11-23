import styled from "@emotion/styled";
import {Link} from "react-router";
import {Centrado} from "../ui/Contenedor.tsx";

const Seccion = styled.section`
    width: 80%;
    background-color: ${({theme}) => theme.color.azul};
    color: ${({theme}) => theme.color.blanco};
    border-radius: ${({theme}) => theme.radius.lg};
    padding: 45px;
    text-align: center;
`;

const Botones = styled.div`
    display: flex;
    gap: ${({theme}) => theme.espaciado.md};
    justify-content: center;
`;

const BotonBase = styled(Link)`
    text-decoration: none;
    padding: ${({theme}) => theme.espaciado.sm} 16px;
    border-radius: ${({theme}) => theme.radius.md};
    border: 1px solid ${({theme}) => theme.color.blanco};
    cursor: pointer;
`;

const BotonVerJuegos = styled(BotonBase)`
    background-color: ${({theme}) => theme.color.blanco};
    color: ${({theme}) => theme.color.azul};

    &:hover {
        background-color: ${({theme}) => theme.color.tablaFila};
    }
`;

const BotonLogin = styled(BotonBase)`
    color: ${({theme}) => theme.color.blanco};

    &:hover {
        background-color: rgb(255 255 255 / 0.15);
    }
`;

function Header() {
    return (
        <Centrado>
            <Seccion>
                <h1>Videojuegos</h1>
                <p>Gestiona juegos y usuarios</p>
                <Botones>
                    <BotonVerJuegos to="/juegos">Ver videojuegos</BotonVerJuegos>
                    <BotonLogin to="/login">Iniciar sesión</BotonLogin>
                </Botones>
            </Seccion>
        </Centrado>
    );
}

export default Header;