import styled from "@emotion/styled";
import {Link, useNavigate} from 'react-router';
import type {RespuestaJuegos} from "../Typescript/Videojuego.ts";
import {useGet} from "../hooks/useGet.ts"
import {useState} from "react";
import Cargando from "./Cargando.tsx";
import Paginacion from "./Paginacion.tsx";
import {Boton, BotonRojo} from "./ui/Boton.tsx";
import {Campo} from "./ui/Campo.tsx";
import {Centrado} from "./ui/Contenedor.tsx";
import {Tabla, FilaTabla, Acciones} from "./ui/Tabla.tsx";

const BotonAccion = styled(Boton)`
    width: 30%;
`;

const Enlace = styled(Link)`
    text-decoration: none;
    margin: 10px;
    color: ${({theme}) => theme.color.textoGris};

    &:hover {
        color: ${({theme}) => theme.color.azul};
    }
`;

const BotonAnadir = styled(Boton)`
    margin-top: ${({theme}) => theme.espaciado.xl};
    margin-left: 50px;
    width: 200px;
    font-size: 16px;
`;

const Buscador = styled(Campo)`
    width: 600px;
    border-radius: ${({theme}) => theme.radius.lg};
    padding: ${({theme}) => theme.espaciado.sm};
    margin-bottom: ${({theme}) => theme.espaciado.sm};
    box-sizing: border-box;
`;

const URL_MONGO = "http://localhost:3000";

function ListaJuegos() {
    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState("");
    const [paginaUrl, setPaginaUrl] = useState<string | null>(null);
    const [pagina, setPagina] = useState(1);

    const urlInicial = `${URL_MONGO}/juegos/?q=${encodeURIComponent(busqueda.trim())}`;
    const {data, isLoading, error} = useGet<RespuestaJuegos>(paginaUrl ?? urlInicial);

    const Pagina = (url: string, nuevaPagina: number) => {
        setPaginaUrl(new URL(url, URL_MONGO).toString());
        setPagina(nuevaPagina);
    };

    const alBuscar = (texto: string) => {
        setBusqueda(texto);
        setPaginaUrl(null);
        setPagina(1);
    };
    return (
        <>
            <Enlace to="/juegos/addJuego">
                <BotonAnadir>Añadir Juego</BotonAnadir>
            </Enlace>
            <Buscador type="text" placeholder="Buscar por título" value={busqueda}
                      onChange={(e) => alBuscar(e.target.value)}/>
            {isLoading ? (
                <Cargando/>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <Centrado>
                        <Tabla>
                            <thead>
                            <FilaTabla>
                                <th>Título</th>
                                <th>Género</th>
                                <th>Plataformas</th>
                                <th>Precio</th>
                                <th>Puntuación</th>
                                <th>Acciones</th>
                            </FilaTabla>
                            </thead>
                            <tbody>
                            {data?.results.map((juego) => (
                                <FilaTabla key={juego.id}>
                                    <td>{juego.titulo}</td>
                                    <td>{juego.genero}</td>
                                    <td>{juego.plataformas.join(", ")}</td>
                                    <td>{juego.precio} €</td>
                                    <td>{juego.puntuacion}</td>
                                    <td>
                                        <Acciones>
                                            <BotonAccion type="button"
                                                         onClick={() => navigate(`/juegos/editar/${juego.id}`)}>
                                                Editar
                                            </BotonAccion>
                                            <BotonRojo type="button">
                                                Eliminar
                                            </BotonRojo>
                                        </Acciones>
                                    </td>
                                </FilaTabla>
                            ))}
                            </tbody>
                        </Tabla>
                    </Centrado>

                    {data && (
                        <Paginacion pagina={pagina} anterior={data.previous} siguiente={data.next}
                                    onCambiar={Pagina}/>
                    )}
                </>
            )}
        </>
    );
}

export default ListaJuegos;