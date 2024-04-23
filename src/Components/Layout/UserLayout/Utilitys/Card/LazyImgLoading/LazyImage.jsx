import { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const imageRef = useRef();

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imageRef} className='lazy-image-container'>
      {isVisible ? (
        <img
          className={`h-[200px] w-[350px] rounded-lg object-cover hover:scale-105 duration-300 ${
            isLoaded ? "visible" : "opacity-95 blur-sm"
          }`}
          src={src}
          alt={alt}
          loading='lazy'
          onLoad={handleImageLoaded}
        />
      ) : (
        <div className={`placeholder-pulse`}></div>
      )}
    </div>
  );
};

export default LazyImage;
