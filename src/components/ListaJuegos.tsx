import styled from "@emotion/styled";
import {Link, useNavigate} from 'react-router';
import type {RespuestaJuegos} from "../Typescript/Videojuego.ts";
import {useGet} from "../hooks/useGet.ts"

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

const Enlace = styled(Link)`
    text-decoration: none;
    margin: 10px;
    color: #444444;

    &:hover {
        color: #2563eb;
    }
`;

const Boton = styled.button`
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 10px;
    margin-top: 20px;
    margin-left: 50px;
    width: 200px;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #1856de;
    }

`;

function ListaJuegos() {
    const navigate = useNavigate();

    const {data, isLoading, error} =
        useGet<RespuestaJuegos>("http://localhost:3000/juegos/");
    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Enlace to="/juegos/addJuego">
                <Boton>Añadir Juego</Boton>
            </Enlace>
            <Contenedor>
                <ContenedorTabla>
                    <thead>
                    <TablaTR>
                        <th>Título</th>
                        <th>Género</th>
                        <th>Plataformas</th>
                        <th>Precio</th>
                        <th>Puntuación</th>
                        <th>Acciones</th>
                    </TablaTR>
                    </thead>
                    <tbody>
                    {data?.results.map((juego) => (
                        <TablaTR key={juego.id}>
                            <td>{juego.titulo}</td>
                            <td>{juego.genero}</td>
                            <td>{juego.plataformas}</td>
                            <td>{juego.precio} €</td>
                            <td>{juego.puntuacion}</td>
                            <td>
                                <AccionesFlex>
                                    <BotonEditar type="button" onClick={() => navigate(`/juegos/editar/${juego.id}`)}>
                                        Editar
                                    </BotonEditar>
                                    <BotonEliminar type="button">
                                        Eliminar
                                    </BotonEliminar>
                                </AccionesFlex>
                            </td>
                        </TablaTR>
                    ))}
                    </tbody>
                </ContenedorTabla>
            </Contenedor>
        </>
    );
}

export default ListaJuegos;