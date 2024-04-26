import React, { useState } from "react";
import "./style.css";

const ImageMagnifier = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div className='image-magnifier-container h-70 mx-auto bg-transparent'>
      <div
        className='image-container'
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: showMagnifier ? "none" : "auto" }}
      >
        <img src={src} alt={alt} className="h-72 w-96 object-contain mx-auto"/>
        {showMagnifier && (
          <div
            className='magnifier'
            style={{
              left: position.x * 100 + "%",
              top: position.y * 100 + "%",
              backgroundImage: `url(${src})`,
              backgroundPosition: `-${position.x * 800}px -${
                position.y * 600
              }px`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ImageMagnifier;
