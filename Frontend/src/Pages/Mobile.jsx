
import React, { useState, useEffect } from "react";
import styles from "./Mobile.module.css";
import Reliance112 from "../assets/Images/Reliance112.png";
import Reliance113 from "../assets/Images/Reliance113.png";
import Reliance114 from "../assets/Images/Reliance114.png";
import Reliance115 from "../assets/Images/Reliance115.png";
import Reliance116 from "../assets/Images/Reliance116.png";
import Reliance117 from "../assets/Images/Reliance117.png";
import Reliance118 from "../assets/Images/Reliance118.png";
import Reliance119 from "../assets/Images/Reliance119.png";
import Reliance120 from "../assets/Images/Reliance120.png";
import Reliance121 from "../assets/Images/Reliance121.png";
import Reliance122 from "../assets/Images/Reliance122.png";
import Reliance123 from "../assets/Images/Reliance123.png";
import Reliance124 from "../assets/Images/Reliance124.png";
import Reliance125 from "../assets/Images/Reliance125.png";
import Reliance126 from "../assets/Images/Reliance126.png";
import Reliance127 from "../assets/Images/Reliance127.png";
import Reliance128 from "../assets/Images/Reliance128.png";
import Reliance129 from "../assets/Images/Reliance129.png";
import Reliance130 from "../assets/Images/Reliance130.png";
import Reliance131 from "../assets/Images/Reliance131.png";
import Reliance132 from "../assets/Images/Reliance132.png";
import Reliance133 from "../assets/Images/Reliance133.png";
import Reliance134 from "../assets/Images/Reliance134.png";
import Reliance135 from "../assets/Images/Reliance135.png";
import Reliance136 from "../assets/Images/Reliance136.png";
import Reliance137 from "../assets/Images/Reliance137.png";
import Reliance138 from "../assets/Images/Reliance138.png";
import Reliance139 from "../assets/Images/Reliance139.png";
import Reliance140 from "../assets/Images/Reliance140.png";
import Reliance141 from "../assets/Images/Reliance141.png";
import Reliance142 from "../assets/Images/Reliance142.png";
import Reliance143 from "../assets/Images/Reliance143.png";
import Reliance144 from "../assets/Images/Reliance144.png";
import Reliance145 from "../assets/Images/Reliance145.png";

function Mobile() {
  const images = [
    Reliance113,
    Reliance114,
    Reliance115,
    Reliance116,
    Reliance117,
    Reliance118,
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

  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div className={styles.ParentMobileImage}>
          <img src={Reliance112} />
        </div>
        <div>
          <img
            className={styles.container}
            src={images[currentSlide]}
            alt={`Reliance ${currentSlide + 1}`}
          />
          <div className={styles.dotContainerStyles}>
            {images.map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={styles.dotStyles}
                onClick={() => goToSlide(slideIndex)}
              >
                ○
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: "#F5F5F5", paddingBottom: "3%" }}>
          <h2>Latest Mobiles</h2>
          <div className={styles.displayMobile}>
            <div>
              <img src={Reliance119} />
            </div>
            <div>
              <img src={Reliance120} />
            </div>
            <div>
              <img src={Reliance121} />
            </div>
            <div>
              <img src={Reliance122} />
            </div>
            <div>
              <img src={Reliance123} />
            </div>
            <div>
              <img src={Reliance124} />
            </div>
            <div>
              <img src={Reliance125} />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "white" }}>
          <div className={styles.Smartphoneheading}>
            <div className={styles.heading}>Best Selling Smartphones</div>
            <div>View All ›</div>
          </div>
          <div className={styles.mobile}>
            <div>
              <div className={styles.titlediscount}>Offer Price - Rs.11391*</div>
              <div>
                <img src={Reliance126} />
                <p>
                  Oppo K12x 5G 128 GB,6 GB <br /> RAM, Breeze Blue, Mobile Phone
                </p>
                <h3>
                  ₹12,999.00 <sup>24% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹16,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>Offer Price - Rs.10415*</div>
              <div>
                <img src={Reliance127} />
                <p>
                  Vivo T3 Lite 5G 128 GB, 6 GB <br /> RAM, GReen, Mobile Phone
                </p>
                <h3>₹11,499.00 </h3>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>Offer Price - Rs.10787*</div>
              <div>
                <img src={Reliance128} />
                <p>
                  Realme Narzo N65 5G 128 GB, 6 <br /> GB RAM, Amber Gold, Mobile
                </p>
                <h3>₹12,494.00</h3>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>₹1K Inst Disc Multi Bank*</div>
              <div>
                <img src={Reliance129} />
                <p>
                  OnePlus Nord CE4 Lite 5G 128 <br /> GB, 8 GB RAM, Super Silver,...
                </p>
                <h3>
                  ₹17,999.00 <sup>14% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹20,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance130} />
                <p>
                  Google Pixel 7 128 GB, 8 GB <br /> RAM, Lemongrass, Mobile...
                </p>
                <h3>
                  ₹28,998.00 <sup>52% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹59,999.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div style={{ backgroundColor: "white" }}>
          <div className={styles.Smartphoneheading}>
            <div className={styles.heading}>5G Smartphones</div>
            <div>View All ›</div>
          </div>
          <div className={styles.mobile}>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance131} />
                <p>
                  Oppo Reno 13 5G 256 GB, 8 GB <br /> RAM, Luminous Blue, Mobile...
                </p>
                <h3>
                  ₹39,999.00 <sup>9% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹43,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>Offer Price - Rs.18413*</div>
              <div>
                <img src={Reliance132} />
                <p>
                  Vivo T3 Lite 5G 128 GB, 8 GB RAM ,<br /> Cosmic Blue, Mobile Phone
                </p>
                <h3>₹20,499.00 </h3>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>₹1K off on ₹15K+ BOB CC</div>
              <div>
                <img src={Reliance133} />
                <p>
                  Apple iPhone 15 Plus 128 GB, <br /> Black
                </p>
                ⭐⭐⭐⭐ (14)
                <h3>
                  ₹74,900.00 <sup>6% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹79,900.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>6 Month NCEMI Multi Bank*</div>
              <div>
                <img src={Reliance134} />
                <p>
                  OnePlus Nord CE4 8 GB RAM, <br /> 128 GB, Celadon Marble, Mobil..
                </p>
                ⭐⭐⭐⭐⭐ (13)
                <h3>
                  ₹22,999.00 <sup>8% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹24,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance135} />
                <p>
                  Redmi 14C 5G 128 GB, 4 GB <br /> RAM, Purple, Mobile Phone
                </p>
                <h3>
                  ₹10,999.00 <sup>21% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹13,999.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div style={{ backgroundColor: "white" }}>
          <div className={styles.Smartphoneheading}>
            <div className={styles.heading}>Affordable Mobile Phones</div>
            <div>View All ›</div>
          </div>
          <div className={styles.mobile}>
            <div>
              <div className={styles.titlediscount}>Offer Price - Rs.11391*</div>
              <div>
                <img src={Reliance136} />
                <p>
                  Oppo K12x 5G 128 GB, 6 GB <br /> RAM, Feather Pink, Mobile Phone
                </p>
                <h3>
                  ₹12,999.00 <sup>24% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹16,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>Offer Price - Rs.11252*</div>
              <div>
                <img src={Reliance137} />
                <p>
                  Vivo T3X 5G 128 GB, 4 GB RAM, <br /> Crimson Bliss, Mobile Phone
                </p>
                <h3>
                  ₹12,499.00 <sup>29% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹17,499.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>Offer Price - Rs.10787*</div>
              <div>
                <img src={Reliance138} />
                <p>
                  Realme Narzo N65 5G 128 GB, 6 <br /> GB RAM, Amber Gold, Mobile
                </p>
                <h3>
                  ₹13,499.00 <sup>16% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹15,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>₹1K Inst Disc Multi Bank*</div>
              <div>
                <img src={Reliance139} />
                <p>
                  OnePlus Nord CE4 Lite 5G 128 <br /> GB, 8 GB RAM, Mega Blue,...
                </p>
                <h3>
                  ₹17,999.00 <sup>14% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹20,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance140} />
                <p>
                  Google Pixel 9 Pro XL 256 GB, 16 <br /> GB RAM, Obsidian, Mobile...
                </p>
                <h3>₹1,24,994.00 </h3>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div style={{ backgroundColor: "white" }}>
          <div className={styles.Smartphoneheading}>
            <div className={styles.heading}>Best of Jio Phones</div>
            <div>View All ›</div>
          </div>
          <div className={styles.mobile}>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance141} />
                <p>
                  JioBharat J1 4G Keypad Phone <br /> with JioTV, JioCinema, JiCha..
                </p>
                <h3>
                  ₹1,799.00 <sup>40% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹2,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance142} />
                <p>
                  JioBharat V3 4G Keypad Phone <br /> with JioTV, JioCinema, JiSaav..
                </p>
                <h3>₹7,999.00 </h3>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance143} />
                <p>
                  JioBharat V3 4G Keypad Phone <br /> with JioTV, JioCinema, JiSaav..
                </p>
                <h3>
                  ₹7,999.00 <sup>60% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹1,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance144} />
                <p>
                  JioBharat V3 4G Keypad Phone <br /> with JioTV, JioCinema, JiSaav..
                </p>
                <h3>
                  ₹1,099.00 <sup>45% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹1,999.00</span>
                </p>
              </div>
            </div>
            <div>
              <div className={styles.titlediscount}>7% upto 15K Axis CC Disc</div>
              <div>
                <img src={Reliance145} />
                <p>
                  JioBharat V3 4G Keypad Phone <br /> with JioTV, JioCinema, JiSaav..
                </p>
                <h3>
                  ₹1,099.00 <sup>45% OFF</sup>
                </h3>
                <p>
                  MRP <span>₹1,999.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;