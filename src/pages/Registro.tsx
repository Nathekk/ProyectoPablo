import styled from "@emotion/styled";
import {Link} from "react-router";

const Contenedor = styled.div`
    font-family: Arial, serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const Formulario = styled.form`
    background: white;
    width: 100%;
    max-width: 500px;
    padding: 35px;
    border-radius: 15px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Titulo = styled.h1`
    margin: 0;
    text-align: center;
`;

const Campo = styled.input`
    padding: 12px;
    border: 1px solid #c2c2c2;
    border-radius: 10px;
    font-size: 15px;
`;

const BotonRegistro = styled.button`
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        background-color: #1d4fd8;
    }
`;

const Login = styled.p`
    text-align: center;
    font-size: 15px;
    color: #727272;

    a {
        color: #2563eb;
        margin-left: 4px;
    }
`;
const Enunciado = styled.p`
    font-size: 15px;
    color: #000000;
    margin: 0;
    font-weight: bold;

    a {
        color: #2563eb;
        margin-left: 4px;
    }
`;

function Registro() {
    return (
        <Contenedor>
            <Formulario>
                <Titulo>Registrarse</Titulo>

                <Enunciado>Nombre de usuario</Enunciado>
                <Campo type="text" placeholder="Tu nombre"/>

                <Enunciado>Correo electrónico</Enunciado>
                <Campo type="email" placeholder="usuario@gmail.com"/>

                <Enunciado>Contraseña</Enunciado>
                <Campo type="password" placeholder="Contraseña"/>

                <Enunciado>Repetir contraseña</Enunciado>
                <Campo type="password" placeholder="Repite la contraseña"/>

                <BotonRegistro type="submit">Crear cuenta</BotonRegistro>

                <Login>
                    ¿Ya tienes cuenta?<Link to="/login">Inicia sesión</Link>
                </Login>
            </Formulario>
        </Contenedor>
    );
}

export default Registro;