import styled from "@emotion/styled";

import logo from "../media/logo.jpg";
import { Link } from "react-router";

const ContenedorNav = styled.nav`
    font-family: Arial, serif;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    background-color: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.29);
`;

const ContenedorDerecha = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Links = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Enlace = styled(Link)`
    text-decoration: none;
    margin: 10px;
    color: #444444;

    &:hover {
        color: #2563eb;
    }
`;

const Logo = styled.img`
    width: 50px;
    height: auto;
    object-fit: contain;
`;

const Boton = styled.button`
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
        background-color: #1856de;
    }
    
`;

function Navbar() {
    return (
        <ContenedorNav>
            <Logo src={logo} alt="Logo de mi proyecto"/>
            <ContenedorDerecha>
                <Links>
                    <li><Enlace to="/">Inicio</Enlace></li>
                    <li><Enlace to="/juegos">Videojuegos</Enlace></li>
                    <li><Enlace to="/usuarios">Usuarios</Enlace></li>
                </Links>

                <Enlace to="/login">
                    <Boton>
                        Login
                    </Boton>
                </Enlace>
            </ContenedorDerecha>
        </ContenedorNav>
    );
}

export default Navbar;