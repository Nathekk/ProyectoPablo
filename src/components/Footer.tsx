import styled from "@emotion/styled";
import {Link} from "react-router";
import logo from "../assets/logo.png";

const ContenedorFooter = styled.footer`
    font-family: Arial, serif;
    background-color: white;
    color: #444444;
    padding: 30px 20px 20px;
    margin-top: 40px;
    box-shadow: 0 -3px 10px rgb(0 0 0 / 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
`;

const Marca = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;

const NombreMarca = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #153059;
`;

const Enlaces = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;
`;

const EnlaceFooter = styled(Link)`
    color: #2563eb;
    text-decoration: none;
    font-size: 15px;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: color 0.2s, border-color 0.2s;

    &:hover {
        color: #1856de;
        border-bottom-color: #1856de;
    }
`;

const Separador = styled.hr`
    width: 100%;
    max-width: 600px;
    border: none;
    border-top: 1px solid #8d8d8d;
    margin: 0;
`;

const Descripcion = styled.p`
    margin: 0;
    font-size: 14px;
    color: #727272;
    text-align: center;
`;


function Footer() {
    return (
        <ContenedorFooter>
            <Marca>
                <Logo src={logo} alt="Logo de mi proyecto"/>
                <NombreMarca>GameAdmin</NombreMarca>
            </Marca>

            <Enlaces>
                <EnlaceFooter to="/inicio">Inicio</EnlaceFooter>
                <EnlaceFooter to="/juegos">Videojuegos</EnlaceFooter>
                <EnlaceFooter to="/usuarios">Usuarios</EnlaceFooter>
            </Enlaces>

            <Separador/>

            <Descripcion>
                La página más cool y guapa de todo internet para administrar juegos
            </Descripcion>
        </ContenedorFooter>
    );
}

export default Footer;