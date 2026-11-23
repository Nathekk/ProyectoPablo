import styled from "@emotion/styled";

export const Centrado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme }) => theme.espaciado.xxl};
    padding: 0 ${({ theme }) => theme.espaciado.xl};
`;