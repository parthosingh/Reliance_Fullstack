import React,{useState} from "react";
import styles from "./Laptops.module.css"
import Reliance505 from "../assets/Images/Reliance505.png"
import Reliance506 from "../assets/Images/Reliance506.png"
import Reliance507 from "../assets/Images/Reliance507.png"
import Reliance508 from "../assets/Images/Reliance508.png"
import Reliance509 from "../assets/Images/Reliance509.png"
import Reliance510 from "../assets/Images/Reliance510.png"
import Reliance511 from "../assets/Images/Reliance511.png"
import Reliance512 from "../assets/Images/Reliance512.png"
import Reliance513 from "../assets/Images/Reliance513.png"
import Reliance514 from "../assets/Images/Reliance514.png"
import Reliance515 from "../assets/Images/Reliance515.png"
import Reliance516 from "../assets/Images/Reliance516.png"
import Reliance517 from "../assets/Images/Reliance517.png"
import Reliance518 from "../assets/Images/Reliance518.png"
import Reliance519 from "../assets/Images/Reliance519.png"
import Reliance520 from "../assets/Images/Reliance520.png"
import Reliance521 from "../assets/Images/Reliance521.png"
import Reliance522 from "../assets/Images/Reliance522.png"
import Reliance523 from "../assets/Images/Reliance523.png"
import Reliance524 from "../assets/Images/Reliance524.png"
import Reliance525 from "../assets/Images/Reliance525.png"
import Reliance526 from "../assets/Images/Reliance526.png"
import Reliance527 from "../assets/Images/Reliance527.png"
import Reliance528 from "../assets/Images/Reliance528.png"
import Reliance529 from "../assets/Images/Reliance529.png"
import Reliance530 from "../assets/Images/Reliance530.png"
import Reliance531 from "../assets/Images/Reliance531.png"
import Reliance532 from "../assets/Images/Reliance532.png"
import Reliance533 from "../assets/Images/Reliance533.png"
import Reliance534 from "../assets/Images/Reliance534.png"
import Reliance535 from "../assets/Images/Reliance535.png"
import Reliance536 from "../assets/Images/Reliance536.png"
import Reliance537 from "../assets/Images/Reliance537.png"
import Reliance538 from "../assets/Images/Reliance538.png"
import Reliance539 from "../assets/Images/Reliance539.png"
import Reliance540 from "../assets/Images/Reliance540.png"
import Reliance541 from "../assets/Images/Reliance541.png"
import Reliance542 from "../assets/Images/Reliance542.png"
import Reliance543 from "../assets/Images/Reliance543.png"
import Reliance544 from "../assets/Images/Reliance544.png"
import Reliance545 from "../assets/Images/Reliance545.png"
import Reliance546 from "../assets/Images/Reliance546.png"
import Reliance547 from "../assets/Images/Reliance547.png"
import Reliance548 from "../assets/Images/Reliance548.png"
import Reliance549 from "../assets/Images/Reliance549.png"
import Reliance550 from "../assets/Images/Reliance550.png"
import Reliance551 from "../assets/Images/Reliance551.png"
import Reliance552 from "../assets/Images/Reliance552.png"
import Reliance553 from "../assets/Images/Reliance553.png"
import Reliance554 from "../assets/Images/Reliance554.png"
import Reliance555 from "../assets/Images/Reliance555.png"
import Reliance556 from "../assets/Images/Reliance556.png"
import Reliance557 from "../assets/Images/Reliance557.png"
import Reliance558 from "../assets/Images/Reliance558.png"
import Reliance559 from "../assets/Images/Reliance559.png"
import Reliance560 from "../assets/Images/Reliance560.png"
import Reliance561 from "../assets/Images/Reliance561.png"
import Reliance562 from "../assets/Images/Reliance562.png"
import Reliance563 from "../assets/Images/Reliance563.png"
import Reliance564 from "../assets/Images/Reliance564.png"
const initialData = [
   {
      id: 1,
      image: Reliance505,
      name: "LG TurboWash 360 8 kg Front Load Washing Machine",
      price: "₹42,499.00",
      discount: "15% OFF",
      mrp: "₹49,999.00"
   },
   {
      id: 2,
      image: Reliance506,
      name: "Samsung Eco Bubble 7.5 kg Top Load Washing Machine",
      price: "₹25,999.00",
      discount: null,
      mrp: null
   },
   {
      id: 3,
      image: Reliance507,
      name: "Whirlpool Stainwash Ultra 6.5 kg Fully Automatic Washer",
      price: "₹18,750.00",
      discount: "25% OFF",
      mrp: "₹25,000.00"
   },
   {
      id: 4,
      image: Reliance508,
      name: "Bosch Serie 6 9 kg Front Load Washing Machine",
      price: "₹38,299.00",
      discount: "10% OFF",
      mrp: "₹42,599.00"
   },
   {
      id: 5,
      image: Reliance509,
      name: "IFB TurboDry 7 kg Top Load Washing Machine",
      price: "₹22,499.00",
      discount: "20% OFF",
      mrp: "₹28,125.00"
   },
   {
      id: 6,
      image: Reliance510,
      name: "Haier AquaClean 8.5 kg Fully Automatic Washer",
      price: "₹29,999.00",
      discount: null,
      mrp: null
   },
   {
      id: 7,
      image: Reliance511,
      name: "Godrej Edge Pro 6 kg Semi-Automatic Washing Machine",
      price: "₹11,499.00",
      discount: "30% OFF",
      mrp: "₹16,427.00"
   },
   {
      id: 8,
      image: Reliance512,
      name: "Panasonic EcoWash 10 kg Front Load Washing Machine",
      price: "₹49,990.00",
      discount: "18% OFF",
      mrp: "₹60,963.00"
    },
    {
      id: 9,
      image: Reliance513,
      name: "Videocon AquaFresh 7.2 kg Top Load Washer",
      price: "₹19,899.00",
      discount: "22% OFF",
      mrp: "₹25,512.00"
    },
    {
      id: 10,
      image: Reliance514,
      name: "Electrolux SteamCare 8 kg Front Load Washing Machine",
      price: "₹35,499.00",
      discount: null,
      mrp: null
    },
    {
      id: 11,
      image: Reliance515,
      name: "Beko HydroForce 6.5 kg Fully Automatic Washer",
      price: "₹17,999.00",
      discount: "28% OFF",
      mrp: "₹24,998.00"
    },
    {
      id: 12,
      image: Reliance516,
      name: "Midea SmartWash 9.5 kg Top Load Washing Machine",
      price: "₹31,750.00",
      discount: "15% OFF",
      mrp: "₹37,353.00"
    },

   //  ---------------------------------------------

   {
      id: 13,
      image: Reliance517,
      name: "LG Inverter Direct Drive 7 kg Front Load Washer",
      price: "₹39,999.00",
      discount: null,
      mrp: null
   },
   {
      id: 14,
      image: Reliance518,
      name: "Samsung AddWash 8 kg Fully Automatic Washing Machine",
      price: "₹27,499.00",
      discount: "24% OFF",
      mrp: "₹36,183.00"
   },
   {
      id: 15,
      image: Reliance519,
      name: "Whirlpool FreshCare 6.2 kg Top Load Washer",
      price: "₹16,899.00",
      discount: "20% OFF",
      mrp: "₹21,123.00"
   },
   {
      id: 16,
      image: Reliance520,
      name: "Bosch EcoSilence 9 kg Front Load Washing Machine",
      price: "₹44,599.00",
      discount: "12% OFF",
      mrp: "₹50,680.00"
   },
   {
      id: 17,
      image: Reliance521,
      name: "IFB Aqua Energie 7.5 kg Fully Automatic Washer",
      price: "₹23,999.00",
      discount: null,
      mrp: null
   },
   {
      id: 18,
      image: Reliance522,
      name: "Haier TurboSpin 6 kg Semi-Automatic Washing Machine",
      price: "₹9,999.00",
      discount: "33% OFF",
      mrp: "₹14,924.00"
   },
   {
      id: 19,
      image: Reliance523,
      name: "Godrej PureWash 8 kg Top Load Washing Machine",
      price: "₹26,499.00",
      discount: "18% OFF",
      mrp: "₹32,316.00"
   },
   {
      id: 20,
      image: Reliance524,
      name: "Panasonic StainMaster 7 kg Front Load Washer",
      price: "₹33,299.00",
      discount: "14% OFF",
      mrp: "₹38,719.00"
    },
    {
      id: 21,
      image: Reliance525,
      name: "Videocon EcoDry 6.5 kg Fully Automatic Washing Machine",
      price: "₹18,499.00",
      discount: "25% OFF",
      mrp: "₹24,665.00"
    },
    {
      id: 22,
      image: Reliance526,
      name: "Electrolux AquaSave 9 kg Top Load Washer",
      price: "₹29,899.00",
      discount: null,
      mrp: null
    },
    {
      id: 23,
      image: Reliance527,
      name: "Beko SteamWash 7.8 kg Front Load Washing Machine",
      price: "₹36,999.00",
      discount: "20% OFF",
      mrp: "₹46,248.00"
    },
    {
      id: 24,
      image: Reliance528,
      name: "Midea QuickWash 8.2 kg Fully Automatic Washer",
      price: "₹24,750.00",
      discount: "17% OFF",
      mrp: "₹29,819.00"
    },

    //  ---------------------------------------------

   {
      id: 25,
      image: Reliance529,
      name: "LG Smart Inverter 6 kg Top Load Washing Machine",
      price: "₹15,999.00",
      discount: "27% OFF",
      mrp: "₹21,916.00"
   },
   {
      id: 26,
      image: Reliance530,
      name: "Samsung FlexWash 10 kg Front Load Washer",
      price: "₹52,499.00",
      discount: null,
      mrp: null
   },
   {
      id: 27,
      image: Reliance531,
      name: "Whirlpool PowerClean 7 kg Fully Automatic Washing Machine",
      price: "₹19,999.00",
      discount: "23% OFF",
      mrp: "₹25,973.00"
   },
   {
      id: 28,
      image: Reliance532,
      name: "Bosch ActiveWater 8.5 kg Top Load Washer",
      price: "₹31,499.00",
      discount: "16% OFF",
      mrp: "₹37,499.00"
   },
   {
      id: 29,
      image: Reliance533,
      name: "IFB EcoWash 6.8 kg Semi-Automatic Washing Machine",
      price: "₹12,499.00",
      discount: null,
      mrp: null
   },
   {
      id: 30,
      image: Reliance534,
      name: "Haier DeepClean 9 kg Front Load Washing Machine",
      price: "₹39,999.00",
      discount: "20% OFF",
      mrp: "₹49,998.00"
   },
   {
      id: 31,
      image: Reliance535,
      name: "Godrej TurboWash 7.5 kg Top Load Washer",
      price: "₹21,999.00",
      discount: "19% OFF",
      mrp: "₹27,159.00"
   },
   {
      id: 32,
      image: Reliance536,
      name: "Panasonic FoamWash 8 kg Fully Automatic Washing Machine",
      price: "₹28,499.00",
      discount: null,
      mrp: null
    },
    {
      id: 33,
      image: Reliance537,
      name: "Videocon SuperSpin 6.2 kg Semi-Automatic Washer",
      price: "₹10,999.00",
      discount: "31% OFF",
      mrp: "₹15,941.00"
    },
    {
      id: 34,
      image: Reliance538,
      name: "Electrolux EcoCare 9.5 kg Top Load Washing Machine",
      price: "₹32,999.00",
      discount: "15% OFF",
      mrp: "₹38,822.00"
    },
    {
      id: 35,
      image: Reliance539,
      name: "Beko AquaTech 7 kg Front Load Washer",
      price: "₹34,499.00",
      discount: null,
      mrp: null
    },
    {
      id: 36,
      image: Reliance540,
      name: "Midea UltraClean 8 kg Fully Automatic Washing Machine",
      price: "₹26,999.00",
      discount: "18% OFF",
      mrp: "₹32,925.00"
    },

     //  ---------------------------------------------

   {
      id: 37,
      image: Reliance541,
      name: "LG SteamDirect 6.5 kg Top Load Washer",
      price: "₹17,499.00",
      discount: "22% OFF",
      mrp: "₹22,434.00"
   },
   {
      id: 38,
      image: Reliance542,
      name: "Samsung BubbleWash 9 kg Front Load Washing Machine",
      price: "₹41,999.00",
      discount: null,
      mrp: null
   },
   {
      id: 39,
      image: Reliance543,
      name: "Whirlpool EcoSpin 7.2 kg Fully Automatic Washer",
      price: "₹20,499.00",
      discount: "25% OFF",
      mrp: "₹27,332.00"
   },
   {
      id: 40,
      image: Reliance544,
      name: "Bosch TurboClean 8 kg Top Load Washing Machine",
      price: "₹29,999.00",
      discount: "14% OFF",
      mrp: "₹34,883.00"
   },
   {
      id: 41,
      image: Reliance545,
      name: "IFB FreshWash 6 kg Semi-Automatic Washer",
      price: "₹11,999.00",
      discount: null,
      mrp: null
   },
   {
      id: 42,
      image: Reliance546,
      name: "Haier SmartClean 9.5 kg Front Load Washing Machine",
      price: "₹43,499.00",
      discount: "20% OFF",
      mrp: "₹54,373.00"
   },
   {
      id: 43,
      image: Reliance547,
      name: "Godrej AquaPulse 7 kg Top Load Washer",
      price: "₹18,999.00",
      discount: "24% OFF",
      mrp: "₹24,998.00"
   },
   {
      id: 44,
      image: Reliance548,
      name: "Panasonic PureClean 8.5 kg Fully Automatic Washing Machine",
      price: "₹31,499.00",
      discount: null,
      mrp: null
    },
    {
      id: 45,
      image: Reliance549,
      name: "Videocon HydroWash 6.8 kg Semi-Automatic Washer",
      price: "₹12,499.00",
      discount: "28% OFF",
      mrp: "₹17,359.00"
    },
    {
      id: 46,
      image: Reliance550,
      name: "Electrolux SteamFresh 9 kg Top Load Washing Machine",
      price: "₹34,999.00",
      discount: "16% OFF",
      mrp: "₹41,665.00"
    },
    {
      id: 47,
      image: Reliance551,
      name: "Beko DeepWash 7.5 kg Front Load Washer",
      price: "₹36,499.00",
      discount: null,
      mrp: null
    },
    {
      id: 48,
      image: Reliance552,
      name: "Midea PowerWash 8 kg Fully Automatic Washing Machine",
      price: "₹27,999.00",
      discount: "19% OFF",
      mrp: "₹34,566.00"
    },

     //  ---------------------------------------------

   {
      id: 49,
      image: Reliance553,
      name: "LG EcoDry 6.2 kg Top Load Washer",
      price: "₹16,499.00",
      discount: "23% OFF",
      mrp: "₹21,427.00"
   },
   {
      id: 50,
      image: Reliance554,
      name: "Samsung SmartWash 9.5 kg Front Load Washing Machine",
      price: "₹45,999.00",
      discount: null,
      mrp: null
   },
   {
      id: 51,
      image: Reliance555,
      name: "Whirlpool StainFree 7 kg Fully Automatic Washer",
      price: "₹19,999.00",
      discount: "20% OFF",
      mrp: "₹24,998.00"
   },
   {
      id: 52,
      image: Reliance556,
      name: "Bosch AquaGuard 8 kg Top Load Washing Machine",
      price: "₹30,499.00",
      discount: "15% OFF",
      mrp: "₹35,881.00"
   },
   {
      id: 53,
      image: Reliance557,
      name: "IFB SteamWash 6.5 kg Semi-Automatic Washer",
      price: "₹12,999.00",
      discount: null,
      mrp: null
   },
   {
      id: 54,
      image: Reliance558,
      name: "Haier TurboClean 9 kg Front Load Washing Machine",
      price: "₹41,999.00",
      discount: "18% OFF",
      mrp: "₹51,218.00"
   },
   {
      id: 55,
      image: Reliance559,
      name: "Godrej EcoPulse 7.8 kg Top Load Washer",
      price: "₹22,499.00",
      discount: "21% OFF",
      mrp: "₹28,480.00"
   },
   {
      id: 56,
      image: Reliance560,
      name: "Panasonic DeepWash 8.2 kg Fully Automatic Washing Machine",
      price: "₹29,999.00",
      discount: null,
      mrp: null
    },
     {
       id: 57,
       image: Reliance561,
       name: "Videocon AquaSpin 6 kg Semi-Automatic Washer",
       price: "₹11,499.00",
       discount: "30% OFF",
       mrp: "₹16,427.00"
     },
     {
       id: 58,
       image: Reliance562,
       name: "Electrolux PureWash 9.5 kg Top Load Washing Machine",
       price: "₹33,999.00",
       discount: "17% OFF",
       mrp: "₹40,951.00"
     },
     {
       id: 59,
       image: Reliance563,
       name: "Beko SmartClean 7 kg Front Load Washer",
       price: "₹35,499.00",
       discount: null,
       mrp: null
     },
     {
       id: 60,
       image: Reliance564,
       name: "Midea EcoWash 8.5 kg Fully Automatic Washing Machine",
       price: "₹28,499.00",
       discount: "20% OFF",
       mrp: "₹35,623.00"
     }
   ]
function WashingMachine(){
   
   const [currentPage, setCurrentPage] = useState(1);
   const [rowsPerPage, setRowsPerPage] = useState(12) 
   const [sortedData, setSortedData] = useState([...initialData])
   const indexOfLastItem = currentPage * rowsPerPage; 
   const indexOfFirstItem = indexOfLastItem - rowsPerPage; 
   const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
   const totalPages = Math.ceil(sortedData.length/rowsPerPage) 
   
  const handlePrev= ()=> {
     setCurrentPage((prev) =>Math.max(prev-1, 1))
  }

 const handleNext = ()=> {
    setCurrentPage((prev) => Math.min(prev+1, totalPages))
 }

 const handlePageClick = (pageNumber)=> {
    setCurrentPage(pageNumber)
 }

 function selectchangehandler(e){
   const value = e.target.value;
   let newSortedData =[...initialData]
     if(value === "option1"){
      newSortedData.sort(function(a,b){
      const priceA = parseFloat(a.price.replace("₹", "").replace(/,/g, ""));
      const priceB = parseFloat(b.price.replace("₹", "").replace(/,/g, ""));
      return priceB - priceA;
   })
   }
    else if(value === "option2"){
      newSortedData.sort(function(a,b){
      const priceA = parseFloat(a.price.replace("₹", "").replace(/,/g, ""));
      const priceB = parseFloat(b.price.replace("₹", "").replace(/,/g, ""));
      return priceA - priceB;
    })
   }
   setSortedData(newSortedData) 
   setCurrentPage(1) 
 }
   return(
        <>
         <div style={{backgroundColor:"#F5F5F5"}}>
             <div className={styles.headers}>
                  <div className={styles.title}> WashingMachine</div>
                  
                  <div>
                    <select className={styles.sorting} onChange={selectchangehandler}>
                      <option >↑↓sort</option>
                      <option value="option1">Price (High To Low)</option>
                      <option value="option2">Price (Low To High)</option>
                     </select>
                  </div>
             </div>
             <div className={styles.ParentgridContainer}>
               {currentItems.map((laptop)=> (
                          <div key={laptop.id}>
                          <img src={laptop.image} alt={laptop.name}/>
                          <p>{laptop.name}</p>
                          <h3>{laptop.price} {laptop.discount && <sup>{laptop.discount}</sup>}</h3>
                        {laptop.mrp && <p>MRP <span>{laptop.mrp}</span></p>}
                      </div>
               ))}

               </div>
               <div className={styles.pagination}> 
                  <button onClick={handlePrev} disabled={currentPage===1}>Prev</button>
                  {Array.from({length:totalPages}, (_, index)=> (    
                     <button onClick={()=> handlePageClick(index+1)} className={currentPage === index + 1 ? styles.active : styles.button}>{index+1}</button> 
                  ))}
                  <button onClick={handleNext} disabled={currentPage===totalPages}>Next</button>
               </div>
          </div>
        </>
    )
}

export default WashingMachine