import Callout from "@leafygreen-ui/callout";
import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default function LeafCallout({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", false);
  console.log(theme);

  return (
    <Callout darkMode={theme === "dark" ? true : false}>{children}</Callout>
  );
}
