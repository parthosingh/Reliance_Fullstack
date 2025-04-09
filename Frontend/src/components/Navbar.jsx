import {Link} from "react-router-dom"
import LowNavbar from "./LowNavbar"
import TopNavbar from "./TopNavbar"
function Navbar(){
    return(
        <>
          <div>
             <TopNavbar/>
             <LowNavbar/>
             
          </div>
        </>
    )
}

export default Navbar