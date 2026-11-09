import styled from "@emotion/styled";
import {useNavigate} from 'react-router';

const ContenedorTabla = styled.table`
    font-family: Arial, serif;
    border-collapse: collapse;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.29);

    th, td {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
        
    }

    th {
        background-color: #1e1e2f;
        color: white;
    }
`;
const TablaTR = styled.tr`
    &:nth-of-type(even) {
        background-color: #dce7f5;
    }
`;

const BotonAccion = styled.button`
    color: white;
    border: none;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;
`;

const BotonEditar = styled(BotonAccion)`
    background-color: #4f46e5;
    color: white;

    &:hover {
        background-color: #342ad3;
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
                    <AccionesFlex>
                        <BotonEditar type="button" onClick={() => navigate(`/juegos/editar`)}>
                            {/*<BotonEditar type="button" onClick={() => navigate(`/juegos/${juego.id}/editar`)}> lo añado cuando lo tenga*/}
                            editar
                        </BotonEditar>
                        <BotonEliminar>
                            eliminar
                        </BotonEliminar>
                    </AccionesFlex>
                </TablaTR>
                </tbody>
            </ContenedorTabla>
        </>
    );
}

export default ListaJuegos;