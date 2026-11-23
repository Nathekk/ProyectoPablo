import styled from "@emotion/styled";

export const Boton = styled.button`
    padding: ${({ theme }) => theme.espaciado.md};
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: 15px;
    font-family: inherit;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.azul};
    color: ${({ theme }) => theme.color.blanco};
    border: none;

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.color.azulHover};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.color.disabled};
        cursor: not-allowed;
    }
`;

export const BotonRojo = styled(Boton)`
    background-color: ${({ theme }) => theme.color.rojo};

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.color.rojoHover};
    }
`;

export const BotonBlanco = styled(Boton)`
    background-color: ${({ theme }) => theme.color.blanco};
    color: ${({ theme }) => theme.color.textoMuteado};
    border: 1px solid ${({ theme }) => theme.color.border};

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.color.hoverClaro};
    }
`;