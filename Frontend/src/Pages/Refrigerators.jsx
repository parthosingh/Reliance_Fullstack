// 
import React from "react";
import styles from "./Refrigerators.module.css";
import Reliance2 from "../assets/Images/Reliance2.png";
import Reliance196 from "../assets/Images/Reliance196.png";
import Reliance197 from "../assets/Images/Reliance197.png";
import Reliance198 from "../assets/Images/Reliance198.png";
import Reliance199 from "../assets/Images/Reliance199.png";
import Reliance200 from "../assets/Images/Reliance200.png";
import Reliance201 from "../assets/Images/Reliance201.png";
import Reliance202 from "../assets/Images/Reliance202.png";
import Reliance203 from "../assets/Images/Reliance203.png";
import Reliance204 from "../assets/Images/Reliance204.png";
import Reliance205 from "../assets/Images/Reliance205.png";
import Reliance206 from "../assets/Images/Reliance206.png";
import Reliance207 from "../assets/Images/Reliance207.png";
import Reliance208 from "../assets/Images/Reliance208.png";
import Reliance209 from "../assets/Images/Reliance209.png";

function Refrigerators() {
  return (
    <>
      {/* Main Container */}
      <div style={{ backgroundColor: "#F5F5F5" }}>
        {/* Top Banner */}
        <div className={styles.ParentRefrigerator}>
          <img src={Reliance2} alt="Refrigerator Banner" />
        </div>
        <br />
        {/* Shop by Type Section */}
        <div className={styles.ParentShopbyType}>
          <div className={styles.titleParentShopbyType}>Shop by Type</div>
          <div className={styles.ShopbyType}>
            <div><img src={Reliance196} alt="Type 1" /></div>
            <div><img src={Reliance197} alt="Type 2" /></div>
            <div><img src={Reliance198} alt="Type 3" /></div>
            <div><img src={Reliance199} alt="Type 4" /></div>
          </div>
        </div>

        {/* Brand Banner Section */}
        <div className={styles.BrandBanner}>
          <div><img src={Reliance200} alt="LG Brand" /></div>
          <div><img src={Reliance201} alt="Samsung Brand" /></div>
          <div><img src={Reliance202} alt="Godrej Brand" /></div>
          <div><img src={Reliance203} alt="Whirlpool Brand" /></div>
          <div><img src={Reliance204} alt="Haier Brand" /></div>
        </div>

        {/* Brand Names */}
        <div className={styles.BrandName}>
          <div>LG</div>
          <div>Samsung</div>
          <div>Godrej</div>
          <div>Whirlpool</div>
          <div>Haier</div>
        </div>
      </div>

      {/* Product Listing Section */}
      <div style={{ backgroundColor: "#E8E8FC" }}>
        <div className={styles.RefrigeratorPrice}>
          <div className={styles.Pricetag}>Starting From Just Rs. 30490/-*</div>
          <div>View All ›</div>
        </div>
        <div>Refrigerators above 300 Litres</div>

        <div className={styles.Refrigerator}>
          <div>
            <img src={Reliance205} alt="Samsung 465L Refrigerator" />
            <p>
              Samsung 465 L 2 Star Frost Free <br /> Double Door Refrigerator, Black
            </p>
            <h3>
              ₹60,990.00 <sup>24% OFF</sup>
            </h3>
            <p>
              MRP <span>₹79,999.00</span>
            </p>
          </div>
          <div>
            <img src={Reliance206} alt="LG 322L Refrigerator" />
            <p>
              LG 322 litres 2 star Frost Free <br /> Double Door Refrigerator, Shiny
            </p>
            <h3>
              ₹37,990.00 <sup>21% OFF</sup>
            </h3>
            <p>
              MRP <span>₹47,999.00</span>
            </p>
          </div>
          <div>
            <img src={Reliance207} alt="LG 446L Refrigerator" />
            <p>
              LG 446 L 1 Star Frost Free <br /> Double Door Refrigerator, Shiny
            </p>
            <h3>
              ₹51,990.00 <sup>16% OFF</sup>
            </h3>
            <p>
              MRP <span>₹61,999.00</span>
            </p>
          </div>
          <div>
            <img src={Reliance208} alt="Samsung 419L Refrigerator" />
            <p>
              Samsung 419 L 2 Star Frost Free <br /> Double Door Refrigerator, Shiny
            </p>
            <h3>
              ₹53,990.00 <sup>23% OFF</sup>
            </h3>
            <p>
              MRP <span>₹69,999.00</span>
            </p>
          </div>
          <div>
            <img src={Reliance209} alt="LG 343L Refrigerator" />
            <p>
              LG 343 litres 3 star Double Door <br /> Refrigerator, Shiny Steel GL-
            </p>
            <h3>
              ₹45,990.00 <sup>23% OFF</sup>
            </h3>
            <p>
              MRP <span>₹59,499.00</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refrigerators;