import { useRef } from "react";

const useCache = () => {
  const cache = useRef(new Map());

  const get = (key) => {
    return cache.current.get(key);
  };

  const set = (key, value) => {
    cache.current.set(key, value);
  };

  return { get, set };
};

export default useCache;
