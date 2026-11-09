import styled from "@emotion/styled";
import logo from "../media/logo.jpg";

const ContenedorNav = styled.nav`
    font-family: Arial, serif;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
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

const Link = styled.a`
    text-decoration: none;
    margin: 10px;
    color: #444444;
    transition: color 0.2s;

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
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
`;

function Navbar() {
    return (
        <ContenedorNav>
            <Logo src={logo} alt="Logo de mi proyecto"/>
            <ContenedorDerecha>
                <Links>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/juegos">Videojuegos</Link></li>
                    <li><Link href="/usuarios">Usuarios</Link></li>
                </Links>

                <Link href="/login">
                    <Boton>
                        Login
                    </Boton>
                </Link>
            </ContenedorDerecha>
        </ContenedorNav>
    );
}

export default Navbar;