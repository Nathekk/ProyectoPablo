import {useEffect, useRef, useState} from "react";

export function useDelete(url: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return () => controllerRef.current?.abort();
    }, []);

    async function remove(): Promise<boolean> {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;

        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch(url, {
                method: "DELETE",
                signal: controller.signal,
            });
            if (!res.ok) {
                const texto = await res.text();
                throw new Error(`HTTP ${res.status}: ${texto}`);
            }
            return true;
        } catch (err) {
            if (!controller.signal.aborted)
                setError(err instanceof Error ? err.message : "Error");
            return false;
        } finally {
            if (!controller.signal.aborted) setIsLoading(false);
        }
    }

    return {isLoading, error, remove};
}