import styled from "@emotion/styled";
import iconoCarga from "../../assets/carga.gif";

const ImagenCarga = styled.img`
    width: 80px;
    height: auto;
    display: block;
    margin: 50px auto 0;
`;

function Cargando() {
    return <ImagenCarga src={iconoCarga} alt="Cargando..."/>;
}

export default Cargando;