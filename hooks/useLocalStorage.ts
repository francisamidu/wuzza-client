import { useEffect, useState } from "react";

const PREFIX = "wuzza";

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = `${PREFIX}-${key}`;
  const [value, setValue] = useState(() => {
    if (process.browser) {
      const jsonValue = localStorage.getItem(prefixedKey);
      if (jsonValue !== null || jsonValue !== undefined) {
        return JSON.parse(jsonValue);
      }
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (process.browser) {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    }
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
