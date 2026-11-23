import {useDelete} from "../hooks/useDelete.ts";
import {BotonRojo} from "./ui/Boton.tsx";

interface Props {
    idJuego: string;
    onEliminado: () => void;
}

function EliminarJuego({idJuego, onEliminado}: Props) {
    const {isLoading, error, remove} = useDelete(`http://localhost:3000/juegos/${idJuego}`);

    async function handleEliminar() {
        //MEJORAR, quiero hacerlo un modal
        if (!window.confirm("vas a eliminar este juego, uuu sure?")) return;

        const ok = await remove();
        if (ok) onEliminado();
    }

    return (
        <>
            <BotonRojo type="button" onClick={handleEliminar} disabled={isLoading}>
                {isLoading ? "Eliminando..." : "Eliminar"}
            </BotonRojo>
            {error && <>Error: {error}</>}
        </>
    );
}

export default EliminarJuego;