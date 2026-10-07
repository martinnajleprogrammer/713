import { useState, useEffect, useCallback } from "react";

type SetValue<T> = (value: T | ((prev: T) => T)) => void;

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
  options?: { serialize?: (value: T) => string; deserialize?: (value: string) => T }
): [T, SetValue<T>, () => void] => {

  const serialize = options?.serialize ?? JSON.stringify;
  const deserialize = options?.deserialize ?? JSON.parse;

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (deserialize(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  },
  );

  const setValue: SetValue<T> = useCallback(
    (value) => {
      try {
        setStoredValue((prev) => {
          const resolved =
            value instanceof Function ? value(prev) : value;
          if (typeof window !== "undefined") {
            window.localStorage.setItem(key, serialize(resolved));
          }
          return resolved;
        });
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, serialize]
  );

  const removeValue = useCallback(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e: StorageEvent) => {
      if (e.key !== key) return;
      if (e.newValue === null) {
        setStoredValue(initialValue);
        return;
      }
      try {
        setStoredValue(deserialize(e.newValue) as T);
      } catch {
        // ignore malformed
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key, initialValue, deserialize]);

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;