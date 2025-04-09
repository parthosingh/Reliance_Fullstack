import {Link} from "react-router-dom"
import styles from "./LowNavbar.module.css"
import Reliance102 from "../assets/Images/Reliance102.png"
import Reliance103 from "../assets/Images/Reliance103.png"
import Reliance104 from "../assets/Images/Reliance104.png"
import Reliance105 from "../assets/Images/Reliance105.png"
import Reliance106 from "../assets/Images/Reliance106.png"
import Reliance107 from "../assets/Images/Reliance107.png"
import Reliance108 from "../assets/Images/Reliance108.png"
import Reliance109 from "../assets/Images/Reliance108.png"
import Reliance110 from "../assets/Images/Reliance110.png"
import Reliance111 from "../assets/Images/Reliance111.png"
function LowNavbar(){
    return(
        <>
          <div className={styles.navbar}>
           <Link to="/">Home</Link>
           <Link to="/mobile" className={styles.display}><img src={Reliance102}/> <span >Mobile</span> </Link>
           <Link to="/airConditioner" className={styles.display}><img src={Reliance103}/><span >Air Conditioners </span></Link>
           <Link to="/airCooler"  className={styles.display}><img src={Reliance104}/><span >Air Coolers</span></Link>
           <Link to="/refrigerator"  className={styles.display}><img src={Reliance105}/><span >Refrigerators</span></Link>
           <Link to="/television"  className={styles.display}><img src={Reliance106}/><span >Televisions</span></Link>
           <Link to="/laptop"  className={styles.display}><img src={Reliance107}/><span >Laptops</span></Link>
           <Link to="/earphone"  className={styles.display}><img src={Reliance108}/><span >Earphones</span></Link>
           <Link to="/smartwatch"  className={styles.display}><img src={Reliance109}/><span >Smart Watches</span></Link>
           <Link to="/tablet"  className={styles.display}><img src={Reliance110}/><span >Tablets</span></Link>
           <Link to="/washingMachine"  className={styles.display}><img src={Reliance111}/><span >Washing Machine</span></Link>
          </div>
        </>
    )
}

export default LowNavbar