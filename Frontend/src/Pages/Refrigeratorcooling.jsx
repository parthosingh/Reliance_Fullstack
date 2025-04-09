
import React, { useState, useEffect } from "react";
import styles from "./Refrigeratorcooling.module.css";

// Import Images
import Reliance33 from "../assets/Images/Reliance33.png";
import Reliance34 from "../assets/Images/Reliance34.png";
import Reliance35 from "../assets/Images/Reliance35.png";
import Reliance36 from "../assets/Images/Reliance36.png";
import Reliance37 from "../assets/Images/Reliance37.png";
import Reliance38 from "../assets/Images/Reliance38.png";
import Reliance39 from "../assets/Images/Reliance39.png";
import Reliance40 from "../assets/Images/Reliance40.png";
import Reliance41 from "../assets/Images/Reliance41.png";
import Reliance42 from "../assets/Images/Reliance42.png";
import Reliance43 from "../assets/Images/Reliance43.png";
import Reliance44 from "../assets/Images/Reliance44.png";
import Reliance45 from "../assets/Images/Reliance45.png";
import Reliance46 from "../assets/Images/Reliance46.png";
import Reliance47 from "../assets/Images/Reliance47.png";
import Reliance48 from "../assets/Images/Reliance48.png";
import Reliance49 from "../assets/Images/Reliance49.png";
import Reliance50 from "../assets/Images/Reliance50.png";
import Reliance51 from "../assets/Images/Reliance51.png";

function Refrigeratorcooling() {
  let images = [
    Reliance43,
    Reliance44,
    Reliance45,
    Reliance46,
    Reliance47,
    Reliance48,
    Reliance49,
    Reliance50,
    Reliance51,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      {/* Best Deals on Refrigerators Section */}
      <div className={styles.ParentRefrigeratorCooling}>
         <div className={styles.headingRefrigeratorCooling}>
            <div className={styles.heading}>Best Deals on Refrigerators</div>
            <div className={styles.para}>View All ›</div>
        </div>
        <p>From ₹18,750*</p>
        <div className={styles.RefrigeratorCooling}>
          <div>
            <img src={Reliance33} />
            <p>LG 288 L 2 Star <br /> Frost Free Double...</p>
            <h3>₹33,790.00 <sup>20% OFF</sup></h3>
            <p>MRP <span>₹41,999.00</span></p>
          </div>
          <div>
            <img src={Reliance34} />
            <p>LG 272 litres 2 <br /> Star Double Door...</p>
            <h3>₹29,990.00 <sup>21% OFF</sup></h3>
            <p>MRP <span>₹37,999.00</span></p>
          </div>
          <div>
            <img src={Reliance35} />
            <p>LG 240 L 2 Star <br /> Inverter Frost Free...</p>
            <h3>₹25,390.00 <sup>19% OFF</sup></h3>
            <p>MRP <span>₹31,499.00</span></p>
          </div>
          <div>
            <img src={Reliance36} />
            <p>Haier 240 litres 2 <br /> Star Double Door...</p>
            <h3>₹24,490.00 <sup>63% OFF</sup></h3>
            <p>MRP <span>₹3,490.00</span></p>
          </div>
          <div>
            <img src={Reliance37} />
            <p>Bajaj Shield Series Elevate 65 <br /> Desert Air Cooler...</p>
            <h3>₹13,190.00 <sup>27% OFF</sup></h3>
            <p>MRP <span>₹18,000.00</span></p>
          </div>
        </div>
        <br/>
      </div>
       <br/>
      {/* Beat the Heat Section */}
      <div className={styles.ParentRefrigeratorCooling}>
        <div className={styles.headingRefrigeratorCooling}>
            <div className={styles.heading}>Beat the Heat with Effortless Cooling</div>
            <div className={styles.para}>View All ›</div>
        </div>
        <p>Starting From ₹5,490</p>
        <div className={styles.RefrigeratorCooling}>
          <div>
            <img src={Reliance38} />
            <p>Havells Kace 80 Desert Cooler, <br /> 80 L, White & Grey</p>
            <h3>₹12,069.00 <sup>49% OFF</sup></h3>
            <p>MRP <span>₹23,599.00</span></p>
          </div>
          <div>
            <img src={Reliance39} />
            <p>Symphony Diet 3D 55i+ Desert <br /> Air Cooler, 55 Litre...</p>
            <p>⭐⭐⭐⭐(10)</p>
            <h3>₹13,199.00 <sup>3% OFF</sup></h3>
            <p>MRP <span>₹13,599.00</span></p>
          </div>
          <div>
            <img src={Reliance40} />
            <p>Havells Zurii 60 Tower Cooler, <br /> Black & Grey</p>
            <h3>₹12,690.00 <sup>47% OFF</sup></h3>
            <p>MRP <span>₹23,790.00</span></p>
          </div>
          <div>
            <img src={Reliance41} />
            <p>Symphony Sumo 75XL Desert Air <br /> Cooler with i-Pure Technology...</p>
            <p>⭐⭐⭐⭐(12)</p>
            <h3>₹14,169.00 <sup>9% OFF</sup></h3>
            <p>MRP <span>₹15,499.00</span></p>
          </div>
          <div>
            <img src={Reliance42} />
            <p>Bajaj Shield Series Elevate 65 <br /> Desert Air Cooler...</p>
            <h3>₹13,190.00 <sup>27% OFF</sup></h3>
            <p>MRP <span>₹18,000.00</span></p>
          </div>
        </div>
        <br/>
      </div>

      {/* Promotional Image Section */}
      <div className={styles.imageContainer}>
        <img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1738049165221.jpeg" />
      </div>

      {/* Image Slider Section */}
      <div style={{ textAlign: "center" }}>
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
  );
}

export default Refrigeratorcooling;
