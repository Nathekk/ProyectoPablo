import styled from "@emotion/styled";

export const Campo = styled.input`
    padding: ${({ theme }) => theme.espaciado.md};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    font-size: 15px;
    font-family: inherit;
`;