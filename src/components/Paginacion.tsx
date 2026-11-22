import styled from "@emotion/styled";

const Contenedor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 20px 0;
    font-family: Arial, sans-serif;
`;

const BotonPagina = styled.button`
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background-color: #1856de;
    }

    &:disabled {
        background-color: #9ca3af;
        cursor: not-allowed;
    }
`;

interface PaginacionProps {
    pagina: number;
    anterior: string | null;
    siguiente: string | null;
    onCambiar: (url: string, nuevaPagina: number) => void;
}

function Paginacion({pagina, anterior, siguiente, onCambiar}: PaginacionProps) {
    return (
        <Contenedor>
            <BotonPagina type="button" disabled={!anterior}
                         onClick={() => anterior && onCambiar(anterior, pagina - 1)}>Anterior</BotonPagina>
            <span>Página {pagina}</span>
            <BotonPagina type="button" disabled={!siguiente}
                         onClick={() => siguiente && onCambiar(siguiente, pagina + 1)}>Siguiente</BotonPagina>
        </Contenedor>
    );
}

export default Paginacion;