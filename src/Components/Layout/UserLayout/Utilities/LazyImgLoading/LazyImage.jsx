import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const LazyImage = ({
  src,
  alt,
  handleImgChange,
  customStyles = "rounded-lg object-cover w-[350px] h-[200px]",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imageRef} className='lazy-image-container'>
      {isVisible ? (
        <img
          className={`${customStyles} hover:scale-105 duration-300 ${
            isLoaded ? "visible" : "opacity-95 blur-sm"
          }`}
          src={src}
          alt={alt}
          loading='lazy'
          onLoad={handleImageLoaded}
          onMouseEnter={handleImgChange}
        />
      ) : (
        <div className='placeholder-pulse'></div>
      )}
    </div>
  );
};
LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  handleImgChange: PropTypes.func,
  customStyles: PropTypes.string,
};
export default LazyImage;
