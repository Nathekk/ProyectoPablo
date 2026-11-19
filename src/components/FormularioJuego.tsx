import styled from "@emotion/styled";
import type {Videojuego, CrearJuego} from "../Typescript/Videojuego.ts";
import {useNavigate} from "react-router";
import {type FormEvent, useState} from "react";

const Contenedor = styled.div`
    font-family: Arial, serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
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

    label {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 15px;
        color: #000000;
        font-weight: bold;
    }

    input, textarea, select {
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
        border: 1px solid #c2c2c2;
        border-radius: 10px;
        background-color: white;
        color: #000000;
        font-family: Arial, serif;
        font-size: 15px;
    }
`;

const Titulo = styled.h1`
    margin: 0;
    text-align: center;
`;

const Fila = styled.div`
    display: grid;
    gap: 15px;
`;

const BotonesFormulario = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 5px;

    button {
        flex: 1;
        padding: 12px;
        border-radius: 10px;
        font-size: 15px;
        cursor: pointer;
    }
`;
const BotonCancelar = styled.button`
    background-color: white;
    color: #727272;
    border: 1px solid #c2c2c2;

    &:hover {
        background-color: #f5f5f5;
    }
`;
const BotonGuardar = styled.button`
    background-color: #2563eb;
    color: white;
    border: none;

    &:hover {
        background-color: #1d4fd8;
    }`

const MensajeError = styled.p`
    margin: 0;
    color: red;
    text-align: center;
`;

interface Props {
    videojuegoObtenido?: Videojuego | null;
    onGuardar: (datos: CrearJuego) => void;
    isLoading?: boolean;
    error?: string | null;
}

// FORMULARIO DE VIDEOJUEGO
function FormularioVideojuego({videojuegoObtenido, onGuardar, isLoading = false, error = null}: Props) {
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState(videojuegoObtenido?.titulo ?? "");
    const [descripcion, setDescripcion] = useState(videojuegoObtenido?.descripcion ?? "");
    const [genero, setGenero] = useState(videojuegoObtenido?.genero ?? "");
    const [plataformas, setPlataformas] = useState(videojuegoObtenido?.plataformas?.join(", ") ?? "");    const [precio, setPrecio] = useState(videojuegoObtenido?.precio?.toString() ?? "");
    const [puntuacion, setPuntuacion] = useState(videojuegoObtenido?.puntuacion?.toString() ?? "");
    const [stock, setStock] = useState(videojuegoObtenido?.stock?.toString() ?? "");
    const [trailer, setTrailer] = useState(videojuegoObtenido?.trailer ?? "");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onGuardar({
            titulo,
            trailer,
            descripcion,
            genero,
            plataformas,
            precio: Number(precio),
            puntuacion: Number(puntuacion),
            stock: Number(stock),
        });
    }

    return (
        <Contenedor>
            <Formulario onSubmit={handleSubmit}>
                <Titulo>
                    {videojuegoObtenido ? "Editar videojuego" : "Añadir videojuego"}
                </Titulo>

                <label>
                    Título
                    <input type="text" required value={titulo} onChange={(e) => setTitulo(e.target.value)}
                           placeholder="Introduce el título del videojuego"/>
                </label>

                <label>
                    Trailer
                    <input type="url" required value={trailer} onChange={(e) => setTrailer(e.target.value)}
                           placeholder="https://www.youtube.com/watch?v=..."/>
                </label>

                <label>
                    Descripción
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
                              placeholder="Describe el videojuego..."/>
                </label>

                <Fila>
                    <label>
                        Género
                        <select required value={genero} onChange={(e) => setGenero(e.target.value)}>
                            <option value="" disabled>Selecciona un género</option>
                            <option value="accion">Acción</option>
                            <option value="aventura">Aventura</option>
                            <option value="rpg">RPG</option>
                            <option value="deportes">Deportes</option>
                            <option value="estrategia">Estrategia</option>
                            <option value="simulacion">Simulación</option>
                            <option value="terror">Terror</option>
                            <option value="puzzle">Puzzle</option>
                            <option value="otros">Otros</option>
                        </select>
                    </label>
                    <label>
                        Plataformas
                        <input type="text" required value={plataformas} onChange={(e) => setPlataformas(e.target.value)}
                               placeholder="(válidas: pc, ps5, ps4, xbox, switch, movil)"/>
                    </label>
                </Fila>

                <Fila>
                    <label>
                        Precio (€)
                        <input type="number" required min="0" step="0.01" value={precio}
                               onChange={(e) => setPrecio(e.target.value)}
                               placeholder="Ej: 49.99"/>
                    </label>
                    <label>
                        Puntuación
                        <input type="number" min="0" max="10" step="0.1" required value={puntuacion}
                               onChange={(e) => setPuntuacion(e.target.value)}
                               placeholder="Ej: 9.5"/>
                    </label>
                </Fila>

                <label>
                    Stock
                    <input type="number" required min="0" value={stock} onChange={(e) => setStock(e.target.value)}
                           placeholder="Cantidad disponible"/>
                </label>
                {error && <MensajeError>Error: {error}</MensajeError>}
                <BotonesFormulario>
                    <BotonCancelar type="button" onClick={() => navigate("/juegos")}>Cancelar</BotonCancelar>
                    <BotonGuardar type="submit" disabled={isLoading}>
                        {isLoading ? "Guardando.." : videojuegoObtenido ? "Guardar cambios" : "Añadir videojuego"}
                    </BotonGuardar>
                </BotonesFormulario>
            </Formulario>
        </Contenedor>
    );
}

export default FormularioVideojuego;
