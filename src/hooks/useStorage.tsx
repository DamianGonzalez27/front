import { useState } from "react";

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [storedValue, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  const setLocalStorage = (value: any) => {
    try {
      setValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
};

export default useLocalStorage;
