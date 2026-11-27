import {useEffect, useRef, useState} from "react";

export function usePut<Respuesta, Cuerpo>(url: string) {
    const [data, setData] = useState<Respuesta | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return () => controllerRef.current?.abort();
    }, []);

    async function actualizar(body: Cuerpo): Promise<Respuesta | null> {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;

        setIsLoading(true);
        setError(null);
        setData(null);

        try {
            const res = await fetch(url, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
                signal: controller.signal,
            });
            if (!res.ok) {
                const texto = await res.text();
                throw new Error(`HTTP ${res.status}: ${texto}`);
            }
            const json: Respuesta = await res.json();
            if (!controller.signal.aborted) setData(json);
            return json;
        } catch (err) {
            if (!controller.signal.aborted)
                setError(err instanceof Error ? err.message : "Error");
            return null;
        } finally {
            if (!controller.signal.aborted) setIsLoading(false);
        }
    }

    return {data, isLoading, error, actualizar};
}