import { useEffect, useReducer } from "react";

const hashReducer = (hash: string, value: string) => {
  const newHash = value[0] === "#" ? value : `#${value}`;
  if (hash === newHash) return hash;

  window.location.hash = newHash;
  return newHash;
};

const useHash = () => {
  const [hash, dispatchHash] = useReducer(hashReducer, window.location.hash);
  useEffect(() => {
    window.onhashchange = () => dispatchHash(window.location.hash);
    return () => {
      window.onhashchange = null;
    };
  }, []);

  return [hash.split("#")[1], dispatchHash] as const;
};

export default useHash;
