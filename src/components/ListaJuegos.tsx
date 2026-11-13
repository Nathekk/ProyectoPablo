import styled from "@emotion/styled";
import {useNavigate} from 'react-router';

const Contenedor = styled.div`
    font-family: Arial, serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    padding: 0 20px;
`;

const ContenedorTabla = styled.table`
    font-family: Arial, serif;
    background-color: white;
    border-collapse: collapse;
    width: 70%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.29);

    th, td {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;

    }

    th {
        background-color: #153059;
        color: white;
    }
`;
const TablaTR = styled.tr`
    &:nth-of-type(even) {
        background-color: #dce7f5;
    }
`;

const BotonAccion = styled.button`
    width: 30%;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
`;

const BotonEditar = styled(BotonAccion)`
    background-color: #2563eb;
    color: white;

    &:hover {
        background-color: #1856de;
    }
`;

const BotonEliminar = styled(BotonAccion)`
    background-color: red;
    color: white;

    &:hover {
        background-color: #c00000;
    }
`;
const AccionesFlex = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
`;

//BOTONES HACER LUEGO, EDITAR Y ELIMINAR

function ListaJuegos() {
    const navigate = useNavigate();
    return (
        <>
            <Contenedor>
                <ContenedorTabla>
                    <thead>
                    <TablaTR>
                        <th>Titulo</th>
                        <th>Año</th>
                        <th>Género</th>
                        <th>Acciones</th>
                    </TablaTR>
                    </thead>
                    <tbody>
                    <TablaTR>
                        <td>Minecraft</td>
                        <td>2013</td>
                        <td>maincra</td>
                        <td>
                            <AccionesFlex>
                                <BotonEditar type="button" onClick={() => navigate(`/juegos/editar`)}>
                                    {/*<BotonEditar type="button" onClick={() => navigate(`/juegos/${juego.id}/editar`)}> lo añado cuando lo tenga*/}
                                    Editar
                                </BotonEditar>
                                <BotonEliminar>
                                    Eliminar
                                </BotonEliminar>
                            </AccionesFlex>
                        </td>

                    </TablaTR>
                    </tbody>
                </ContenedorTabla>
            </Contenedor>
        </>
    );
}

export default ListaJuegos;