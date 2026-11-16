import styled from "@emotion/styled";
import type {Videojuego} from "../Typescript/Videojuego.ts";
import {useNavigate} from "react-router";

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


interface Props {
    videojuegoObtenido?: Videojuego | null;
}

// FORMULARIO DE VIDEOJUEGO
function FormularioVideojuego({videojuegoObtenido}: Props) {
    const navigate = useNavigate();
    return (
        <Contenedor>
            <Formulario onSubmit={(e) => e.preventDefault()}>
                <Titulo>
                    {videojuegoObtenido ? "Editar videojuego" : "Añadir videojuego"}
                </Titulo>

                <label>
                    Título
                    <input type="text" placeholder="Introduce el título del videojuego"/>
                </label>

                <label>
                    Descripción
                    <textarea placeholder="Describe el videojuego..."/>
                </label>

                <Fila>
                    <label>
                        Género
                        <select>
                            <option value="" disabled>
                                Selecciona un género
                            </option>
                            <option value="Acción">Acción</option>
                            <option value="Aventura">Aventura</option>
                            <option value="RPG">RPG</option>
                            <option value="Deportes">Deportes</option>
                            <option value="Estrategia">Estrategia</option>
                            <option value="Simulación">Simulación</option>
                            <option value="Terror">Terror</option>
                            <option value="Carreras">Carreras</option>
                        </select>
                    </label>
                    <label>
                        Plataformas
                        <input type="text" placeholder="Ej: PC, PS5, Xbox"/>
                    </label>
                </Fila>

                <Fila>
                    <label>
                        Precio (€)
                        <input type="number" min="0" step="0.01" placeholder="Ej: 49.99"/>
                    </label>
                    <label>
                        Puntuación
                        <input type="number" min="0" max="10" step="0.1" placeholder="Ej: 9.5"/>
                    </label>
                </Fila>

                <label>
                    Stock
                    <input type="number" min="0" placeholder="Cantidad disponible"/>
                </label>

                <BotonesFormulario>
                    <BotonCancelar onClick={() => navigate("/juegos")}>Cancelar</BotonCancelar>
                    <BotonGuardar type="submit" onClick={() => navigate("/juegos")}>
                        {videojuegoObtenido ? "Guardar cambios" : "Añadir videojuego"}
                    </BotonGuardar>
                </BotonesFormulario>
            </Formulario>
        </Contenedor>
    );
}

export default FormularioVideojuego;
