import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const savedValuepur = localStorage.getItem(key);
  if (savedValuepur) {
    try {
      const savedValue = JSON.parse(savedValuepur);

      if (savedValue) {
        return savedValue;
      }
    } catch (error) {}
  }

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
