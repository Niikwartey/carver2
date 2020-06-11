import React, { useRef, useEffect } from 'react';
import './style.css';

const logoPath = "/piedpiper.svg";

function Brand({ show, metadata }) {
  const brandRef = useRef();
  
  useEffect(() => {
    const brand = brandRef.current;

    if(show) {
      setTimeout(() => {
        console.log("show");
        brand.style.display = "none";
      }, 3000);
      
      if(metadata) {
        setTimeout(() => {
          console.log("show again");
          brand.style.display = "block";
          brand.style.justifyContent= "flex-end";
        }, (metadata.duration * 1000) - 3000);
      }
    }
  }) 

  if(!show) {
    return null
  }

  return (
    <div className="Brand">
      <div className="logo" ref={brandRef}>
        <img src={logoPath} />
      </div>
    </div>
  );
}

export default Brand;