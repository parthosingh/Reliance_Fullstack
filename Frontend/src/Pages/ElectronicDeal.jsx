import React from "react";
import styles from "./Electronic.module.css"
import Reliance25 from "../assets/Images/Reliance25.png"
import Reliance26 from "../assets/Images/Reliance26.png"
import Reliance27 from "../assets/Images/Reliance27.png"
import Reliance28 from "../assets/Images/Reliance28.png"
import Reliance29 from "../assets/Images/Reliance29.png"
import Reliance30 from "../assets/Images/Reliance30.png"
import Reliance31 from "../assets/Images/Reliance31.png"
import Reliance32 from "../assets/Images/Reliance32.png"

function ElectronicDeal(){
    return(
        <>
          <div className={styles.ParentElectronicsDeal}>
            <h2>Great Deals On Electronics</h2>
            <div className={styles.ElectronicsDeal}>
                <div>  <img src={Reliance25}/> </div>
                <div>  <img src={Reliance26}/> </div>
                <div>  <img src={Reliance27}/> </div>
                <div>  <img src={Reliance28}/> </div>
                <div>  <img src={Reliance29}/> </div>
                <div>  <img src={Reliance30}/> </div>
                <div>  <img src={Reliance31}/> </div>
                <div>  <img src={Reliance32}/> </div>
            </div>
          </div>
        </>
    )
}

export default ElectronicDeal