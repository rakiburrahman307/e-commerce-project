import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (callback, options) => {
  const observerRef = useRef(null);
  const [targetRef, setTargetRef] = useState(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, options);

    if (targetRef) {
      observerRef.current.observe(targetRef);
    }

    return () => {
      if (targetRef) {
        observerRef.current.unobserve(targetRef);
      }
    };
  }, [callback, options, targetRef]);

  return setTargetRef;
};

export default useIntersectionObserver;
