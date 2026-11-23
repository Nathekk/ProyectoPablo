export const theme = {
    color: {
        azul: "#2563eb",
        azulHover: "#1856de",
        azulSecundario: "#153059",
        fondo: "#f3f5ff",
        blanco: "#ffffff",
        texto: "#000000",
        textoGris: "#444444",
        textoMuteado: "#727272",
        border: "#c2c2c2",
        borderClaro: "#dddddd",
        rojo: "#ff0000",
        rojoHover: "#c00000",
        disabled: "#9ca3af",
        hoverClaro: "#f5f5f5",
        tablaFila: "#dce7f5",
    },
    espaciado: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "15px",
        xl: "20px",
        xxl: "40px",
    },
    radius: {
        md: "10px",
        lg: "15px",
    },
    sombras: {
        card: "0 3px 10px rgba(0, 0, 0, 0.25)",
        nav: "0 3px 10px rgb(0 0 0 / 0.29)",
        footer: "0 -3px 10px rgb(0 0 0 / 0.15)",
    },
    fuentes: {
        body: "Arial, sans-serif",
    },
};

export type AppTheme = typeof theme;