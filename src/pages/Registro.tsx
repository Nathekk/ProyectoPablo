import styled from "@emotion/styled";
import {Link} from "react-router";
import {Centrado} from "../components/ui/Contenedor.tsx";
import {TarjetaFormulario} from "../components/ui/Tarjeta.tsx";
import {Campo} from "../components/ui/Campo.tsx";
import {Boton} from "../components/ui/Boton.tsx";
import {Titulo, Enunciado} from "../components/ui/Texto.tsx";

const EnlaceLogin = styled.p`
    text-align: center;
    font-size: 15px;
    color: ${({theme}) => theme.color.textoMuteado};

    a {
        color: ${({theme}) => theme.color.azul};
        margin-left: ${({theme}) => theme.espaciado.xs};
    }
`;

function Registro() {
    return (
        <Centrado>
            <TarjetaFormulario>
                <Titulo>Registrarse</Titulo>

                <Enunciado>Nombre de usuario</Enunciado>
                <Campo type="text" placeholder="Tu nombre"/>

                <Enunciado>Correo electrónico</Enunciado>
                <Campo type="email" placeholder="usuario@gmail.com"/>

                <Enunciado>Contraseña</Enunciado>
                <Campo type="password" placeholder="Contraseña"/>

                <Enunciado>Repetir contraseña</Enunciado>
                <Campo type="password" placeholder="Repite la contraseña"/>

                <Boton type="submit">Crear cuenta</Boton>

                <EnlaceLogin>
                    ¿Ya tienes cuenta?<Link to="/login">Inicia sesión</Link>
                </EnlaceLogin>
            </TarjetaFormulario>
        </Centrado>
    );
}

export default Registro;