import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home.jsx"
import Mobile from "../Pages/Mobile.jsx"
import AirConditoners from "../Pages/AirConditioners.jsx"
import AirCooler from "../Pages/AirCoolers.jsx"
import Refrigerators from "../Pages/Refrigerators.jsx"
import Televisions from "../Pages/Televisions.jsx"
import Laptops from "../Pages/Laptops.jsx"
import Earphones from "../Pages/Earphones.jsx"
import SmartWatches from "../Pages/SmartWatches.jsx"
import Tablets from "../Pages/Tablets.jsx"
import WashingMachine from "../Pages/WashingMachines.jsx"
import Profile from "./Profile.jsx"
import Wishlist from "./Wishlist";
import Cart from "./Cart.jsx"
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"
function AllRoutes(){
    return(
        <Routes>
             <Route path= "/" element ={<Home/>} />
             <Route path="/mobile" element={<Mobile/>}/>
             <Route path="/airConditioner" element={<AirConditoners/>}/>
             <Route path="/airCooler" element={<AirCooler/>}/>
             <Route path="/refrigerator" element={<Refrigerators/>}/>
             <Route path="/television" element={<Televisions/>}/>
             <Route path="/laptop" element={<Laptops/>}/>
             <Route path="/earphone" element={<Earphones/>}/>
             <Route path="/smartwatch" element={<SmartWatches/>}/>
             <Route path="/tablet" element={<Tablets/>}/>
             <Route path="/washingMachine" element={<WashingMachine/>}/>
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/cart" element={<Cart/>} />
             <Route path="/wishlist" element={<Wishlist />}/>
             <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<Signup/>} />
        </Routes>
    )
}

export default AllRoutes