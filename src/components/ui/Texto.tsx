import styled from "@emotion/styled";

export const Titulo = styled.h1`
    margin: 0;
    text-align: center;
`;

export const Enunciado = styled.p`
    font-size: 15px;
    color: ${({ theme }) => theme.color.texto};
    margin: 0;
    font-weight: bold;
`;

export const MensajeError = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.rojo};
    text-align: center;
`;