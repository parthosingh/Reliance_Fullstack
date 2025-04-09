
import React, { useState, useEffect } from "react";
import styles from "./Discount.module.css"
import Reliance21 from "../assets/Images/Reliance21.png"
import Reliance22 from "../assets/Images/Reliance22.png"
import Reliance23 from "../assets/Images/Reliance23.png"
import Reliance24 from "../assets/Images/Reliance24.png"

 

function Discount(){
   
    const images = [
        Reliance21,
        Reliance22,
        Reliance23,
        Reliance24
      ];

     const [currentSlide, setCurrentSlide] = useState(0);
    
      
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(timer);
      }, []); 
    
      const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
      };

    return(
        <>
        <div style={{ textAlign: "center" ,cursor:"pointer"}}>
              <img className={styles.container} src={images[currentSlide]} alt={`Reliance ${currentSlide + 1}`} />
        
             
              <div className={styles.dotContainerStyles}>
                {images.map((_, slideIndex) => (
                  <div key={slideIndex} className={styles.dotStyles} onClick={() => goToSlide(slideIndex)}>
                    ○
                  </div>
                  
                ))}
              </div>
        </div>
        </>
    )
}

export default Discount