import Navbar from "./components/layout/Navbar.tsx";
import {Routes, Route, Navigate} from 'react-router';
import ListaJuegos from "./components/ListaJuegos.tsx";
import Inicio from "./pages/Inicio.tsx";
import Login from "./pages/Login.tsx";
import Footer from "./components/layout/Footer.tsx";
import styled from "@emotion/styled";
import Registro from "./pages/Registro.tsx";
import ListaUsuarios from "./components/ListaUsuarios.tsx";
import NuevoJuego from "./pages/NuevoJuego.tsx";
import NotFound from "./pages/NotFound.tsx";

const Pagina = styled.div`
    background-color: ${({theme}) => theme.color.fondo};
    font-family: ${({theme}) => theme.fuentes.body};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
`;

const Contenido = styled.main`
    flex: 1;
`;

function App() {
    return (
        <Pagina>
            <Navbar/>
            <Contenido>
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio"/>}/>
                    <Route path="/inicio" element={<Inicio/>}/>
                    <Route path="/juegos" element={<ListaJuegos/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registro" element={<Registro/>}/>
                    <Route path="/juegos/addJuego" element={<NuevoJuego/>}/>
                    {/*<Route path="/juegos/editar/:id" element={<EditarJuego/>}/>*/}
                    <Route path="/usuarios" element={<ListaUsuarios/>}/>
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Contenido>
            <Footer/>
        </Pagina>
    )
}

export default App