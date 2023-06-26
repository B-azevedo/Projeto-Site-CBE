import React, { useEffect, useRef } from 'react';
import './letreiro.module.css';

const Letreiro = () => {
  const letreiroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      letreiroRef.current.scrollTo({
        left: letreiroRef.current.scrollLeft + 300,
        behavior: 'smooth',
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="letreiro" ref={letreiroRef}>
      <img src="foto1.jpg" alt="Foto 1" />
      <img src="foto2.jpg" alt="Foto 2" />
      <img src="foto3.jpg" alt="Foto 3" />
      <img src="foto4.jpg" alt="Foto 4" />
      <img src="foto5.jpg" alt="Foto 5" />
    </div>
  );
};

export default Letreiro;