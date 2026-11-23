import {useEffect, useRef, useState} from "react";

export function usePost<T, B>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return () => controllerRef.current?.abort();
    }, []);

    async function post(body: B): Promise<T | null> {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;

        setIsLoading(true);
        setError(null);
        setData(null);

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
                signal: controller.signal,
            });
            if (!res.ok) {
                const texto = await res.text();
                throw new Error(`HTTP ${res.status}: ${texto}`);
            }
            const json: T = await res.json();
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

    return {data, isLoading, error, post};
}