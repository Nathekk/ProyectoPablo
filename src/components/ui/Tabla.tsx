import styled from "@emotion/styled";

export const Tabla = styled.table`
    background-color: ${({ theme }) => theme.color.blanco};
    border-collapse: collapse;
    width: 70%;
    border-radius: ${({ theme }) => theme.radius.md};
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.sombras.nav};

    th, td {
        border: 1px solid ${({ theme }) => theme.color.borderClaro};
        text-align: center;
        padding: ${({ theme }) => theme.espaciado.sm};
    }

    th {
        background-color: ${({ theme }) => theme.color.azulSecundario};
        color: ${({ theme }) => theme.color.blanco};
    }
`;

export const FilaTabla = styled.tr`
    &:nth-of-type(even) {
        background-color: ${({ theme }) => theme.color.tablaFila};
    }
`;

export const Acciones = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.espaciado.md};
    justify-content: center;
    align-items: center;
`;