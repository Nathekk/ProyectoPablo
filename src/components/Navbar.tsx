import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { Boton } from "./ui/Boton.tsx";

const ContenedorNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.espaciado.xl};
    align-items: center;
    background-color: ${({ theme }) => theme.color.blanco};
    box-shadow: ${({ theme }) => theme.sombras.nav};
`;

const ContenedorDerecha = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.espaciado.xl};
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
    color: ${({ theme }) => theme.color.textoGris};

    &:hover {
        color: ${({ theme }) => theme.color.azul};
    }
`;

const Logo = styled.img`
    width: 50px;
    height: auto;
    object-fit: contain;
`;

const BotonLogin = styled(Boton)`
    width: 100px;
    font-size: 16px;
`;

const Marca = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.espaciado.md};
    text-decoration: none;
`;

const NombreMarca = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.azulSecundario};
`;

function Navbar() {
    return (
        <ContenedorNav>
            <Marca to="/inicio">
                <Logo src={logo} alt="Logo de mi proyecto"/>
                <NombreMarca>GameAdmin</NombreMarca>
            </Marca>
            <ContenedorDerecha>
                <Links>
                    <li><Enlace to="/">Inicio</Enlace></li>
                    <li><Enlace to="/juegos">Videojuegos</Enlace></li>
                    <li><Enlace to="/usuarios">Usuarios</Enlace></li>
                </Links>

                <Enlace to="/login">
                    <BotonLogin>Login</BotonLogin>
                </Enlace>
            </ContenedorDerecha>
        </ContenedorNav>
    );
}

export default Navbar;