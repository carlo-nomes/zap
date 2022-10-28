import { useCallback, useRef } from "react";

const useDebouncedCallback = <Args extends unknown[], R = unknown>(func: (...args: Args) => R, wait: number) => {
  const timeout = useRef<any>();

  return useCallback(
    (...args: Args) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
};

export default useDebouncedCallback;
