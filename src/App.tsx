import Navbar from "./components/Navbar.tsx";
import { Routes, Route, Navigate } from 'react-router';
import ListaJuegos from "./components/ListaJuegos.tsx";
import Inicio from "./pages/Inicio.tsx";
import Login from "./pages/Login.tsx";

function App() {

  return (
    <>
        <Navbar></Navbar>

        <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/juegos" element={<ListaJuegos />} />
            <Route path="/login" element={<Login/>} />
{/*            <Route path="/juegos/nueva" element={<NuevoJuego />} />
            <Route path="/usuarios/:id/editar" element={<ListaUsuarios />} />
            <Route path="/perfil/:id" element={<Perfil/>} />
            <Route path="*" element={<PaginaNoEncontrada />} />*/}
        </Routes>

    </>
  )
}

export default App
