import { useEffect, useReducer } from "react";

const hashReducer = (hash: string, value: string) => {
  try {
    const newHash = value[0] === "#" ? value : `#${value}`;
    if (hash === newHash) return hash;

    window.location.hash = newHash;
    return newHash;
  } catch (error) {
    console.warn("Error updating hash:", error);
    return hash;
  }
};

const useHash = () => {
  const [hash, dispatchHash] = useReducer(hashReducer, window.location.hash);
  useEffect(() => {
    const handleHashChange = () => {
      try {
        dispatchHash(window.location.hash);
      } catch (error) {
        console.warn("Error handling hash change:", error);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return [hash.split("#")[1] ?? "", dispatchHash] as const;
};

export default useHash;
