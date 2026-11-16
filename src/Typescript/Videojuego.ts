export interface Videojuego {
    id: string;
    titulo: string;
    descripcion: string;
    genero: string;
    plataformas: string;
    precio: number;
    puntuacion: number;
    stock: number;
}

//Habia paginacion y daba error con los datos
export interface RespuestaJuegos {
    count: number;
    next: string | null;
    previous: string | null;
    results: Videojuego[];
}

