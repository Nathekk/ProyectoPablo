import styled from "@emotion/styled";
import {Link} from "react-router";
import {Centrado} from "../components/ui/Contenedor.tsx";
import {TarjetaFormulario} from "../components/ui/Tarjeta.tsx";
import {Campo} from "../components/ui/Campo.tsx";
import {Boton} from "../components/ui/Boton.tsx";
import {Titulo, Enunciado} from "../components/ui/Texto.tsx";

const EnlaceRegistro = styled.p`
    text-align: center;
    font-size: 15px;
    color: ${({theme}) => theme.color.textoMuteado};

    a {
        color: ${({theme}) => theme.color.azul};
        margin-left: ${({theme}) => theme.espaciado.xs};
    }
`;

function Login() {
    return (
        <Centrado>
            <TarjetaFormulario>
                <Titulo>Iniciar sesión</Titulo>
                <Enunciado>Correo electrónico</Enunciado>
                <Campo type="email" placeholder="usuario@gmail.com"/>

                <Enunciado>Contraseña</Enunciado>
                <Campo type="password" placeholder="Contraseña"/>

                <Boton type="submit">Entrar</Boton>

                <EnlaceRegistro>
                    ¿No tienes cuenta?<Link to="/registro">Crea una cuenta</Link>
                </EnlaceRegistro>
            </TarjetaFormulario>
        </Centrado>
    );
}

export default Login;