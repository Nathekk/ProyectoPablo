import Navbar from "./components/Navbar.tsx";
import {Routes, Route, Navigate} from 'react-router';
import ListaJuegos from "./components/ListaJuegos.tsx";
import Inicio from "./pages/Inicio.tsx";
import Login from "./pages/Login.tsx";
import Footer from "./components/Footer.tsx";
import styled from "@emotion/styled";
import Registro from "./pages/Registro.tsx";

function App() {
    const Pagina = styled.div`
        background-color: #f3f5ff;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    `;
    const Contenido = styled.main`
        flex: 1;
    `;
    return (
        <>
            <Pagina>
                <Navbar></Navbar>
                <Contenido>
                    <Routes>
                        <Route path="/" element={<Navigate to="/inicio"/>}/>
                        <Route path="/inicio" element={<Inicio/>}/>
                        <Route path="/juegos" element={<ListaJuegos/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/registro" element={<Registro/>}/>
                        {/*            <Route path="/juegos/nueva" element={<NuevoJuego />} />
            <Route path="/usuarios/:id/editar" element={<ListaUsuarios />} />
            <Route path="/perfil/:id" element={<Perfil/>} />
            <Route path="*" element={<PaginaNoEncontrada />} />*/}
                    </Routes>
                </Contenido>

                <Footer/>
            </Pagina>

        </>
    )
}

export default App
