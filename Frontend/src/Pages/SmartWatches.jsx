import React,{useState} from "react";
import styles from "./Laptops.module.css"
import Reliance385 from "../assets/Images/Reliance385.png"
import Reliance386 from "../assets/Images/Reliance386.png"
import Reliance387 from "../assets/Images/Reliance387.png"
import Reliance388 from "../assets/Images/Reliance388.png"
import Reliance389 from "../assets/Images/Reliance389.png"
import Reliance390 from "../assets/Images/Reliance390.png"
import Reliance391 from "../assets/Images/Reliance391.png"
import Reliance392 from "../assets/Images/Reliance392.png"
import Reliance393 from "../assets/Images/Reliance393.png"
import Reliance394 from "../assets/Images/Reliance394.png"
import Reliance395 from "../assets/Images/Reliance395.png"
import Reliance396 from "../assets/Images/Reliance396.png"
import Reliance397 from "../assets/Images/Reliance397.png"
import Reliance398 from "../assets/Images/Reliance398.png"
import Reliance399 from "../assets/Images/Reliance399.png"
import Reliance400 from "../assets/Images/Reliance400.png"
import Reliance401 from "../assets/Images/Reliance401.png"
import Reliance402 from "../assets/Images/Reliance402.png"
import Reliance403 from "../assets/Images/Reliance403.png"
import Reliance404 from "../assets/Images/Reliance404.png"
import Reliance405 from "../assets/Images/Reliance405.png"
import Reliance406 from "../assets/Images/Reliance406.png"
import Reliance407 from "../assets/Images/Reliance407.png"
import Reliance408 from "../assets/Images/Reliance408.png"
import Reliance409 from "../assets/Images/Reliance409.png"
import Reliance410 from "../assets/Images/Reliance410.png"
import Reliance411 from "../assets/Images/Reliance411.png"
import Reliance412 from "../assets/Images/Reliance412.png"
import Reliance413 from "../assets/Images/Reliance413.png"
import Reliance414 from "../assets/Images/Reliance414.png"
import Reliance415 from "../assets/Images/Reliance415.png"
import Reliance416 from "../assets/Images/Reliance416.png"
import Reliance417 from "../assets/Images/Reliance417.png"
import Reliance418 from "../assets/Images/Reliance418.png"
import Reliance419 from "../assets/Images/Reliance419.png"
import Reliance420 from "../assets/Images/Reliance420.png"
import Reliance421 from "../assets/Images/Reliance421.png"
import Reliance422 from "../assets/Images/Reliance422.png"
import Reliance423 from "../assets/Images/Reliance423.png"
import Reliance424 from "../assets/Images/Reliance424.png"
import Reliance425 from "../assets/Images/Reliance425.png"
import Reliance426 from "../assets/Images/Reliance426.png"
import Reliance427 from "../assets/Images/Reliance427.png"
import Reliance428 from "../assets/Images/Reliance428.png"
import Reliance429 from "../assets/Images/Reliance429.png"
import Reliance430 from "../assets/Images/Reliance430.png"
import Reliance431 from "../assets/Images/Reliance431.png"
import Reliance432 from "../assets/Images/Reliance432.png"
import Reliance433 from "../assets/Images/Reliance433.png"
import Reliance434 from "../assets/Images/Reliance434.png"
import Reliance435 from "../assets/Images/Reliance435.png"
import Reliance436 from "../assets/Images/Reliance436.png"
import Reliance437 from "../assets/Images/Reliance437.png"
import Reliance438 from "../assets/Images/Reliance438.png"
import Reliance439 from "../assets/Images/Reliance439.png"
import Reliance440 from "../assets/Images/Reliance440.png"
import Reliance441 from "../assets/Images/Reliance441.png"
import Reliance442 from "../assets/Images/Reliance442.png"
import Reliance443 from "../assets/Images/Reliance443.png"
import Reliance444 from "../assets/Images/Reliance444.png"
const initialData = [
   {
      id:1,
      image: Reliance385,
      name: "Itel ICON 3 Smartwatch with Single Chip BT Calling, 5.10 cm",
      price: "₹5,999.00",
      discount: null,
      mrp: null,
   },
   {
      id:2,
      image: Reliance386,
      name: "Apple Watch Series 10 GPS + Cellular 46 mm Jet Black",
      price: "₹59,099.00",
      discount: null,
      mrp: null
   },
   {
      id:3,
      image: Reliance387,
      name: "Noise NoiseFit Voyage India's first 4G eSIM calling Smart Watch , 3",
      price: "₹12,999.00",
      discount: "13% OFF",
      mrp: "₹15,000.00"
   },
   {
      id:4,
      image: Reliance388,
      name: "FireBoltt Ninja Call Pro Plus Smart Watch with Bluetooth Calling,",
      price: "₹1,199.00",
      discount: "94% OFF",
      mrp: "₹19,999.00"
   },
   {
      id:5,
      image: Reliance389,
      name: "pTron Force X10 Bluetooth Calling Smart Watch with 1-year warranty,...",
      price: "₹1,599.00",
      discount: "73% OFF",
      mrp: "₹15,999.00"
   },
   {
      id:6,
      image: Reliance390,
      name: "Noise Scout Kids Smartwatch with Assisted GPS Tracking, 4G Vide ",
      price: "₹5,999.00 ",
      discount: "25% OFF",
      mrp: "₹7,999.00"
   },
   {
      id:7,
      image: Reliance391,
      name: "boAt Enigma X500 with Bluetooth Calling, 3.63 cm (1.43 Inch...",
      price: "₹4,499.00",
      discount: "65% OFF",
      mrp: "12,999.00"
   },
   {
      id: 8,
      image: Reliance392,
      name: "Amazfit T-Rex Ultra Smartwatch, Black.",
      price: "₹45,999.00",
      discount: "23% OFF",
      mrp: "₹59,999.00",
    },
    {
      id: 9,
      image: Reliance393,
      name: "Fastrack Vivid Pro Smartwatch, Blue",
      price: "₹2,995.00",
      discount: "71% OFF",
      mrp: "₹7,995.00",
    },
    {
      id: 10,
      image: Reliance394,
      name: "Apple Watch Series 10 GPS 42 mm Silver Aluminium Case with Deni",
      price: "₹29,990.00",
      discount: null,
      mrp: null
    },
    {
      id: 11,
      image: Reliance395,
      name: "Titan Celestor Smartwatch with Advanced GPS, Altimeter,...",
      price: "₹9,995.00",
      discount: null,
      mrp: null
    },
    {
      id: 12,
      image: Reliance396,
      name: "Apple Watch Series 8 GPS 45mm Silver Aluminium Case with White...",
      price: "₹31,929.00",
      discount: "35% OFF",
      mrp: "₹48,989.00",
    },

   //  ---------------------------------------------

   {
      id:13,
      image: Reliance397,
      name: "Apple Watch Series 10 GPS 42 mm Jet Black Aluminium Case with... ",
      price: "₹46,299.00",
      discount: null,
      mrp: null
   },
   {
      id:14,
      image: Reliance398,
      name: "boAt Primia Celestial with 3.86 cm (1.52 Inch) HD Display, Advance...",
      price: "₹1,899.00",
      discount: "76% OFF",
      mrp: "₹7,999.00"
   },
   {
      id:15,
      image: Reliance399,
      name: "Maxima Max Pro Hunt 4.52 cm (1.78 inch) Super AMOLED Displac..",
      price: "₹1,899.00",
      discount: "79% OFF",
      mrp:"₹8,999.00"
   },
   {
      id:16,
      image: Reliance400,
      name: "Samsung Galaxy Watch 7 40 mm Bluetooth + LTE Smart Watch...",
      price: "₹33,499.00",
      discount: "9% OFF",
      mrp: "₹36,999.00"
   },
   {
      id:17,
      image: Reliance401,
      name: "boAt Ultima Call Max Smart Watch with 5.08 cm (2 inch) Big HD...",
      price: "₹2,499.00"
   },
   {
      id:18,
      image: Reliance401,
      name: "Crossbeats Ignite LYT SmartWatch,1.69 inch Full Touch...",
      price: "₹899.00 ",
      discount: "82% OFF",
      mrp: "₹4,499.00"
   },
   {
      id:19,
      image: Reliance403,
      name: "Maxima Max Pro Flash+ 4.85 cm (1.91 inch) UltraHD Display,C",
      price: "₹2,090.00",
      discount: "84% OFF",
      mrp: "12,995.00"
   },
   {
      id: 20,
      image: Reliance404,
      name: "Maxima Max Pro Hunt 4.52 cm (1.78 inch) Super AMOLED Disp",
      price: "₹1,899.00",
      discount: "79% OFF",
      mrp: "₹8,999.00",
    },
    {
      id: 21,
      image: Reliance405,
      name: "Inbase Urban Lite X Smart Watch, 1.6 inch, Up to 15 Days Runtime,",
      price: "₹2,099.00",
      discount: "65% OFF",
      mrp: "₹5,999.00"
    },
    {
      id: 22,
      image: Reliance406,
      name: "boAt Storm Call 3 with Turn-by-Turn Navigation, 4.64 cm (1.83.",
      price: "₹1,399.00",
      discount: "84% OFF",
      mrp: "₹8,499.00",
    },
    {
      id: 23,
      image: Reliance407,
      name: "boAt Enigma Switch Smart Watch with Switchable Case 3.53 cm",
      price: "₹2,999.00",
      discount: "80% OFF",
      mrp: "₹14,999.00",
    },
    {
      id: 24,
      image: Reliance408,
      name: "boAt Wave Fit Smartwatch, 4.29 cm (1.69 inch) HD Display, Upto 7 Days Battery, 100+ Watch Faces,",
      price: "₹2,799.00",
      discount: "60% OFF",
      mrp: "₹6,990.00",
    },

    //  ---------------------------------------------
   
   {
      id:25,
      image: Reliance409,
      name: "Noise Colorfit Victor Smartwatch, 4.62 cm (1.85 inch) TFT LCD..",
      price: "₹1,299.00",
      discount: "81% OFF",
      mrp: "₹6,999.00"
   },
   {
      id:26,
      image: Reliance410,
      name: "Maxima Max Pro Grand 4.64 cm (1.83 inch) Ultra HD Display",
      price: "₹1,299.00"
   },
   {
      id:27,
      image: Reliance411,
      name: "Samsung Galaxy Watch 4 LTE 44 mm Smartwatch with Bluetooth...",
      price: "₹31,399.00",
      discount: "9% OFF",
      mrp:"₹34,999.00"
   },
   {
      id:28,
      image: Reliance412,
      name: "Apple Watch Series 10 GPS 46 mm Silver Aluminium Case with Deni..",
      price: "₹49,990.00",
      discount: null,
      mrp: null
   },
   {
      id:29,
      image: Reliance413,
      name: "Google Pixel Watch 3 45 mm Smartwatch, Black Aluminum...",
      price: "₹43,999",
      discount:null,
      mrp:null
   },
   {
      id:30,
      image: Reliance414,
      name: "Dizo Watch R Talk Go by Real 4.57 cm Display with..",
      price: "₹3,499.00 ",
      discount: "42% OFF",
      mrp: "₹5,999.00"
   },
   {
      id:31,
      image: Reliance415,
      name: "Mobvoi TicWatch Pro 3 Smart Watch, Shadow Black..",
      price: "₹24,909.00",
      discount: "22% OFF",
      mrp: "31,999.00"
   },
   {
      id: 32,
      image: Reliance416,
      name: "Apple Watch Series 8 GPS + Cellular 41mm Case with White",
      price: "₹33,899.00",
      discount: "39% OFF",
      mrp: "₹55,900.00",
    },
    {
      id: 33,
      image: Reliance417,
      name: "Noise NoiseFit Halo Plus, AMOLED display with 466 X 46..",
      price: "₹3,499.00",
      discount:"62% OFF",
      mrp: "₹8,999"
    },
    {
      id: 34,
      image: Reliance418,
      name: "Fire-Boltt Celcius Smartwatch, 4.8 cm (1.91 inch) HD Display ,First Ever Body...",
      price: "₹1,699.00",
      discount: "83% OFF",
      mrp: "₹9,999.00",
    },
    {
      id: 35,
      image: Reliance419,
      name: "Noise NoiseFit Force Plus Smartwatch Mist Grey",
      price: "₹3,999.00",
      discount: "50% OFF",
      mrp: "₹7,999.00",
    },
    {
      id: 36,
      image: Reliance420,
      name: "Maxima Max Pro Flash+ 4.85 cm (1.91 inch)Interchangeable..",
      price: "₹2,099.00",
      discount: "84% OFF",
      mrp: "₹12,996.00",
    },

     //  ---------------------------------------------
   
   {
      id:37,
      image: Reliance421,
      name: "boAt Enigma X500 with Bluetooth Calling, 3.63 cm...",
      price: "₹2,242.00",
      discount: "55% OFF",
      mrp: "₹4,999.00"
   },
   {
      id:38,
      image: Reliance422,
      name: "JTitan Crest Smartwatch, Rose Gold & Rose Gold Mesh.",
      price: "₹4,499.00",
      discount:"36% OFF",
      mrp: "₹6,999.00"
   },
   {
      id:39,
      image: Reliance423,
      name: "Noise NoiseFit Crew Smart Watch, 3.50 cms (1.38 inch) Round Display with..",
      price: "₹2,699.00",
      discount: "64% OFF",
      mrp:"₹7,999.00"
   },
   {
      id:40,
      image: Reliance424,
      name: "Maxima Max Pro Raptor Interchangeable Case , 3.53 cm...",
      price: "₹1,499.00",
      discount: "63% OFF",
      mrp: "₹3,999.00"
   },
   {
      id:41,
      image: Reliance425,
      name: "Redmi Watch 3 Active, Charcoal Black...",
      price: "₹1,090.00",
      discount:"69% OFF",
      mrp:"₹3,499.00"
   },
   {
      id:42,
      image: Reliance426,
      name: "Samsung Galaxy Watch 5 44 mm Bluetooth Smart Watch with Sleep...",
      price: "₹939.00 ",
      discount:"69% OFF",
      mrp:"₹3,499.00"
   },
   {
      id:43,
      image: Reliance427,
      name: "Amazfit Bip U Smartwatch, 3.62 cm Color Screen, Blood-Oxyge...",
      price: "₹1,099.00",
      discount: "56% OFF",
      mrp: "2,999.00"
   },
   {
      id: 44,
      image: Reliance428,
      name: "Fitbit Sense Smart Watch with , Lunar White/Soft Gold..",
      price: "₹15,990.00",
      discount: "20% OFF",
      mrp: "₹19,999.00",
    },
    {
      id: 45,
      image: Reliance429,
      name: "boAt Enigma Z30 with 3.53 cm (1.39 inch) HD Display, Bluetooth.",
      price: "₹7,999.00",
      discount:"38% OFF",
      mrp: "₹12,900.00"
    },
    {
      id: 46,
      image: Reliance430,
      name: "Maxima Max Pro Grand 4.64 cm (1.83 inch) Bluetooth Calling...",
      price: "₹4,499.00",
      discount: "36% OFF",
      mrp: "₹6,999.00",
    },
    {
      id: 47,
      image: Reliance431,
      name: "Apple Watch Series 10 GPS 46 mm Jet Black with Black Spor.",
      price: "₹1,299.00",
      discount: "68% OFF",
      mrp: "₹3,999.00",
    },
    {
      id: 48,
      image: Reliance432,
      name: "Alt Vibe Smartwatch with Bluetooth Calling, 1.38 Inch TFT Screen, IP67..",
      price: "₹1,499.00",
      discount: "25% OFF",
      mrp: "₹1,999.00",
    },

     //  ---------------------------------------------
   
   {
      id:49,
      image: Reliance433,
      name: "Amazfit T-Rex 3 3.81 cm (1.5 inch) AMOLED Smart Watch, Onyx..",
      price: "₹1,890.00",
      discount: "13% OFF",
      mrp: "₹1,900.00"
   },
   {
      id:50,
      image: Reliance434,
      name: "boAt Lunar Peak Smart Watch with Curve 3.68 cm (1.45 inch) ...",
      price: "₹1,299.00"
   },
   {
      id:51,
      image: Reliance435,
      name: "Noise ColorFit Pro 2 Smart Watch, Jet Black...",
      price: "₹4,070.00",
      discount: "42% OFF",
      mrp:"₹6,999.00"
   },
   {
      id:52,
      image: Reliance436,
      name: "Apple Watch Ultra 2 GPS + Cellular 49 mm Black Titanium-..",
      price: "₹499.00",
      discount: "50% OFF",
      mrp: "₹999.00"
   },
   {
      id:53,
      image: Reliance437,
      name: "Samsung Galaxy Watch Ultra Smart Watch, Upto 100 H battery,...",
      price: "₹1,499.00",
      discount:"50% OFF",
      mrp:"₹2,999.00"
   },
   {
      id:54,
      image: Reliance438,
      name: "Dizo R Talk Smartwatch, 3.3 cm (1.3 inch) Round AMOLED ...",
      price: "₹1,099.00",
      discount: "63% OFF",
      mrp: "₹2,999.00"
   },
   {
      id:55,
      image: Reliance439,
      name: "Titan Zeal Premium Metal Smartwatch with 4.69 cm (..",
      price: "₹8,999.00",
      discount: "25% OFF",
      mrp: "11,999.00"
   },
   {
      id: 56,
      image: Reliance440,
      name: "Inbase Urban Lite Smart Watch, Champagne Gold..",
      price: "₹1,399.00",
      discount: "65% OFF",
      mrp: "₹3,999.00",
    },
    {
      id: 57,
      image: Reliance441,
      name: "Noise ColorFit Hexa , 4.97 cm (1.96 Inch) AMOLED Display,..",
      price: "₹1,090.00",
      discount:"69% OFF",
      mrp: "₹3,499.00"
    },
    {
      id: 58,
      image: Reliance442,
      name: "Maxima Max Pro Gravity 5.10 cm (2.01 inch) Ultra HD Display BT...",
      price: "₹399.00",
      discount: "87% OFF",
      mrp: "₹2,999.00",
    },
    {
      id: 59,
      image: Reliance443,
      name: "Noise NoiseFit Endure Smart Watch, Teal Green..",
      price: "₹1,299.00",
      discount: "78% OFF",
      mrp: "₹5,990.00",
    },
    {
      id: 60,
      image: Reliance444,
      name: "Fastrack Vivid Pro Smartwatch, Black.",
      price: "₹162.00",
      discount: "86% OFF",
      mrp: "₹1,199.00",
    },
]

function SmartWatches(){
   
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
                  <div className={styles.title}>SmartWatches</div>
                  
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

export default SmartWatches