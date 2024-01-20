import { useState, useEffect } from 'react';


const ImageSlider = ({imageUrls}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === imageUrls.length - 1 ? 0 : current + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
      <img src={imageUrls[current]} alt="slider" className="w-full mx-auto" />
  );
};

export default ImageSlider;