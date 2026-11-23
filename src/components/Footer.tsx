import styled from "@emotion/styled";
import {Link} from "react-router";
import logo from "../assets/logo.png";

const ContenedorFooter = styled.footer`
    background-color: ${({theme}) => theme.color.blanco};
    color: ${({theme}) => theme.color.textoGris};
    padding: 30px ${({theme}) => theme.espaciado.xl} ${({theme}) => theme.espaciado.xl};
    margin-top: ${({theme}) => theme.espaciado.xxl};
    box-shadow: ${({theme}) => theme.sombras.footer};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
`;

const Marca = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.espaciado.sm};
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;

const NombreMarca = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: ${({theme}) => theme.color.azulSecundario};
`;

const Enlaces = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;
`;

const EnlaceFooter = styled(Link)`
    color: ${({theme}) => theme.color.azul};
    text-decoration: none;
    font-size: 15px;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: color 0.2s, border-color 0.2s;

    &:hover {
        color: ${({theme}) => theme.color.azulHover};
        border-bottom-color: ${({theme}) => theme.color.azulHover};
    }
`;

const Separador = styled.hr`
    width: 100%;
    max-width: 600px;
    border: none;
    border-top: 1px solid ${({theme}) => theme.color.textoMuteado};
    margin: 0;
`;

const Descripcion = styled.p`
    margin: 0;
    font-size: 14px;
    color: ${({theme}) => theme.color.textoMuteado};
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