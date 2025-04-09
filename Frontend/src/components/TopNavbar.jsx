import {Link} from "react-router-dom"
import Reliance570 from "../assets/Images/Reliance570.png"
import Reliance571 from "../assets/Images/Reliance571.png"
import styles from "./TopNavbar.module.css"
function TopNavbar(){
    return(
        <>
          <div className={styles.navbar}>
            <div>
              <Link to="/"><img src={Reliance570} style={{width:"200px", height:"50px"}}/></Link>
            </div>  
            <div className={styles.searchContainer}>
              <img src={Reliance571}/><input className={styles.searchinput} placeholder="Search products & Brand"/>
            </div>
            <div>
              <Link to="/profile">👤Profile</Link>
            </div>
            <div>
              <Link to="/cart">🛒Cart</Link>
            </div>
            <div>
              <Link to="/wishlist">🤍Wishlist</Link>
            </div>
            <div>
             <Link to="/login"> 👨🏾‍💼 Login</Link>
            </div>    
            <div>
             <Link to="/signup">signup</Link>
            </div>  
          </div>
        </>
    )
}

export default TopNavbar