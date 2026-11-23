import styled from "@emotion/styled";
import { useNavigate} from 'react-router';
import {Boton, BotonRojo} from "./ui/Boton.tsx";
import {Centrado} from "./ui/Contenedor.tsx";
import {Tabla, FilaTabla, Acciones} from "./ui/Tabla.tsx";

const BotonAccion = styled(Boton)`
    width: 30%;
`;

//BOTONES HACER LUEGO, EDITAR Y ELIMINAR

function ListaUsuarios() {
    const navigate = useNavigate();
    return (
        <Centrado>
            <Tabla>
                <thead>
                <FilaTabla>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Edad</th>
                    <th>Pais</th>
                    <th>Fecha nacimiento</th>
                </FilaTabla>
                </thead>
                <tbody>
                <FilaTabla>
                    <td>Marta</td>
                    <td>Marta@gmail.com</td>
                    <td>26 años</td>
                    <td>España</td>
                    <td>13/12/2000</td>
                    <td>
                        <Acciones>
                            <BotonAccion type="button" onClick={() => navigate(`/juegos/editar`)}>
                                Editar
                            </BotonAccion>
                            <BotonRojo type="button">
                                Eliminar
                            </BotonRojo>
                        </Acciones>
                    </td>
                </FilaTabla>
                </tbody>
            </Tabla>
        </Centrado>
    );
}

export default ListaUsuarios;