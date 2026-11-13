import styled from "@emotion/styled";
import {Link} from "react-router";

const Contenedor = styled.div`
    font-family: Arial, serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    padding: 0 20px;
`;

const Seccion = styled.section`
    width: 80%;
    background-color: #2563eb;
    color: white;
    border-radius: 15px;
    padding: 45px;
    text-align: center;
`;

const Botones = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
`;

const BotonBase = styled(Link)`
    text-decoration: none;
    padding: 10px 16px;
    border-radius: 10px;
    border: 1px solid white;
    cursor: pointer;
`;

const BotonVerJuegos = styled(BotonBase)`
    background-color: white;
    color: #2563eb;

    &:hover {
        background-color: #dce7f5;
    }
`;

const BotonLogin = styled(BotonBase)`
    color: white;

    &:hover {
        background-color: rgb(255 255 255 / 0.15);
    }
`;

function Header() {
    return (
        <Contenedor>
            <Seccion>
                <h1>Videojuegos</h1>
                <p>Gestiona juegos y usuarios</p>
                <Botones>
                    <BotonVerJuegos to="/juegos">Ver videojuegos</BotonVerJuegos>
                    <BotonLogin to="/login">Iniciar sesión</BotonLogin>
                </Botones>
            </Seccion>
        </Contenedor>

    );
}

export default Header;