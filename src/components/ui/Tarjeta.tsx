import styled from "@emotion/styled";
import { css, type Theme } from "@emotion/react";

const estiloTarjeta = (theme: Theme) => css`
    background: ${theme.color.blanco};
    width: 100%;
    max-width: 500px;
    padding: ${theme.espaciado.xxl};
    border-radius: ${theme.radius.lg};
    box-shadow: ${theme.sombras.card};
    display: flex;
    flex-direction: column;
    gap: ${theme.espaciado.lg};
`;

export const Tarjeta = styled.div`
    ${({ theme }) => estiloTarjeta(theme)}
`;

export const TarjetaFormulario = styled.form`
    ${({ theme }) => estiloTarjeta(theme)}
`;