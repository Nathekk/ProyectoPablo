import styled from "@emotion/styled";
import { Link } from "react-router";

const ContenedorFooter = styled.footer`
    font-family: Arial, serif;
    background-color: white;
    color: #2563eb;
    padding: 25px 20px;
    text-align: center;
    font-size: 15px;
    margin-top: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.29);

`;

const Enlaces = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 12px;
`;

const EnlaceFooter = styled(Link)`
    color: #2563eb;
    text-decoration: none;

    &:hover {
        color: #93b4f8;
    }
`;

function Footer() {
    return (
        <ContenedorFooter>
            <Enlaces>
                <EnlaceFooter to="/inicio">Inicio</EnlaceFooter>
                <EnlaceFooter to="/juegos">Videojuegos</EnlaceFooter>
                <EnlaceFooter to="/usuarios">Usuarios</EnlaceFooter>
            </Enlaces>
            <p>Lorem ipsum, añado algo luego</p>
        </ContenedorFooter>
    );
}

export default Footer;