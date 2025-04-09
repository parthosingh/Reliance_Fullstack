
import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Discount from './Discount.jsx'
import ElectronicDeal from "./ElectronicDeal.jsx";
import Refrigeratorcooling from "./Refrigeratorcooling.jsx";
import Trendingelectronics from "./TrendingElectronics.jsx";
import Reliance1 from "../assets/Images/Reliance1.png"
import Reliance2 from "../assets/Images/Reliance2.png";
import Reliance3 from "../assets/Images/Reliance3.png";
import Reliance4 from "../assets/Images/Reliance4.png";
import Reliance5 from "../assets/Images/Reliance5.png";
import Reliance6 from "../assets/Images/Reliance6.png";
import Reliance7 from "../assets/Images/Reliance7.png";
import Reliance8 from "../assets/Images/Reliance8.png";
import Reliance9 from "../assets/Images/Reliance9.png";
import Reliance10 from "../assets/Images/Reliance10.png"
import Reliance11 from "../assets/Images/Reliance11.png"
import Reliance12 from "../assets/Images/Reliance12.png"
import Reliance13 from "../assets/Images/Reliance13.png"
import Reliance14 from "../assets/Images/Reliance14.png"
import Reliance16 from "../assets/Images/Reliance16.png"
import Reliance17 from "../assets/Images/Reliance17.png"
import Reliance18 from "../assets/Images/Reliance18.png"
import Reliance19 from "../assets/Images/Reliance19.png"
import Reliance20 from "../assets/Images/Reliance20.png"
function Home() {
 
  const images = [
    Reliance1,
    Reliance2,
    Reliance3,
    Reliance4,
    Reliance5,
    Reliance6,
    Reliance7,
    Reliance8,
    Reliance9
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []); 

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
    <div style={{backgroundColor: "#F5F5F5"}} >
      <div style={{textAlign:"center"}}> 
      <img className={styles.container} src={images[currentSlide]} alt={`Reliance ${currentSlide + 1}`} />

     
       <div className={styles.dotContainerStyles}>
        {images.map((_, slideIndex) => (
          <div key={slideIndex} className={styles.dotStyles} onClick={() => goToSlide(slideIndex)}>
            ○
          </div>
          
        ))}
       </div>
      </div>
     <br/>
     {/* Earphone */}
     <div className={styles.ParentEarphone}>
        <div className={styles.headingEarphone}>
          <div className={styles.heading}>Upto 80% off on Best Sellers</div>
          <div className={styles.para}>View All ›</div>
        </div>

    <div className={styles.Earphone}>
        <div>
            <img src={Reliance10} />
            <p>
                Apple USB Type C Earpods with <br />
                mic, Sweat and Water Resistant...
            </p>
            <h3>₹1,649.00 <sup>18% OFF</sup></h3>
            <p>MRP <span>₹2,000.00</span></p>
        </div>
        <div>
            <img src={Reliance11} />
            <p>
                boat Nirvana Ion ANC Truly <br />
                Wireless in-Ear Earbuds with U...
            </p>
            <p>⭐⭐⭐⭐(110)</p>
            <h3>₹1,8999.00 <sup>81% OFF</sup></h3>
            <p>MRP <span>₹9,900.00</span></p>
        </div>
        <div>
            <img src={Reliance12} />
            <p>
                Realme Buds Air 5 in-ear Wireless <br />
                Earphone, Upto 38 hrs of...
            </p>
            <h3>₹2,299.00 <sup>62% OFF</sup></h3>
            <p>MRP <span>₹5,999.00</span></p>
        </div>
        <div>
            <img src={Reliance13} />
            <p>
                boAt Stone 358 Bluetooth <br />
                Speaker with 10 W RMS Stereo...
            </p>
            <p>⭐⭐⭐⭐ (25)</p>
            <h3>₹1,299.00 <sup>63% OFF</sup></h3>
            <p>MRP <span>₹3,490.00</span></p>
        </div>
        <div>
            <img src={Reliance14} />
            <p>
                OnePlus Bullets Z2 Bluetooth <br />
                Wireless in-Ear Earphones with...
            </p>
            <p>⭐⭐⭐⭐ (372)</p>
            <h3>₹1,599.00 <sup>30% OFF</sup></h3>
            <p>MRP <span>₹2,290.00</span></p>
        </div>
    </div>
       <br />
    </div>
     <br/>

    {/* AirConditioner */}
    <div className={styles.ParentAirConditioners}> {/*headingAirConditioners */}
       <div className={styles.headingAirConditioners}>
          <div className={styles.heading}>Air Conditioners</div>
          <div className={styles.para}>View All ›</div>
        </div>    
    <div className={styles.AirConditioners}>
        <div>
            <img src={Reliance16} />
            <p>
                BLUESTAR 1.5 Ton 3 Star 5 in 1 <br />
                convertible Inverter Split AC -...
            </p>
            <h3>₹39,490.00 <sup>38% OFF</sup></h3>
            <p>MRP <span>₹63,500.00</span></p>
        </div>
        <div>
            <img src={Reliance17} />
            <p>
              BLUESTAR 1.5 Ton 3 Star 5 in 1 <br />
              Convertible Inverter Split...
            </p>
            <h3>₹34,990.00 <sup>45% OFF</sup></h3>
            <p>MRP <span>₹63,500.00</span></p>
        </div>
        <div>
            <img src={Reliance18} />
            <p>
                Voltas 1.5 Ton 5 Star 5-in-1  <br />
                Convertible Inverter Split AC,...
            </p>
            <h3>₹46,990.00 <sup>37% OFF</sup></h3>
            <p>MRP <span>₹74,500.00</span></p>
        </div>
        <div>
            <img src={Reliance19} />
            <p>
            BLUESTAR 1.5 Ton 3 Star 5 in 1<br />
            Convertible Inverter Split AC,...
            </p>
            <h3>₹46,990.00 <sup>37% OFF</sup></h3>
            <p>MRP <span>₹74,500.00</span></p>
        </div>
        <div>
            <img src={Reliance20} />
            <p>
            Voltas 1.5 Ton 3 Star 4-in-1  <br />
            Convertible Inverter Split AC,...
            </p>
            <h3>₹37,990.00 <sup>42% OFF</sup></h3>
            <p>MRP <span>₹64,990.00</span></p>
        </div>
    </div>
       <br />
    </div>
     <br/>
      <Discount/>
      <br/>
     <ElectronicDeal/> 
      <br/>
      <Refrigeratorcooling/>
    <br/>
      <Trendingelectronics/>
    </div>
    </>
  );
}
export default Home;
