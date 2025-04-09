import React,{useState} from "react";
import styles from "./Laptops.module.css"
import Reliance445 from "../assets/Images/Reliance445.png";
import Reliance446 from "../assets/Images/Reliance446.png";
import Reliance447 from "../assets/Images/Reliance447.png";
import Reliance448 from "../assets/Images/Reliance448.png";
import Reliance449 from "../assets/Images/Reliance449.png";
import Reliance450 from "../assets/Images/Reliance450.png";
import Reliance451 from "../assets/Images/Reliance451.png";
import Reliance452 from "../assets/Images/Reliance452.png";
import Reliance453 from "../assets/Images/Reliance453.png";
import Reliance454 from "../assets/Images/Reliance454.png";
import Reliance455 from "../assets/Images/Reliance455.png";
import Reliance456 from "../assets/Images/Reliance456.png";
import Reliance457 from "../assets/Images/Reliance457.png";
import Reliance458 from "../assets/Images/Reliance458.png";
import Reliance459 from "../assets/Images/Reliance459.png";
import Reliance460 from "../assets/Images/Reliance460.png";
import Reliance461 from "../assets/Images/Reliance461.png";
import Reliance462 from "../assets/Images/Reliance462.png";
import Reliance463 from "../assets/Images/Reliance463.png";
import Reliance464 from "../assets/Images/Reliance464.png";
import Reliance465 from "../assets/Images/Reliance465.png";
import Reliance466 from "../assets/Images/Reliance466.png";
import Reliance467 from "../assets/Images/Reliance467.png";
import Reliance468 from "../assets/Images/Reliance468.png";
import Reliance469 from "../assets/Images/Reliance469.png";
import Reliance470 from "../assets/Images/Reliance470.png";
import Reliance471 from "../assets/Images/Reliance471.png";
import Reliance472 from "../assets/Images/Reliance472.png";
import Reliance473 from "../assets/Images/Reliance473.png";
import Reliance474 from "../assets/Images/Reliance474.png";
import Reliance475 from "../assets/Images/Reliance475.png";
import Reliance476 from "../assets/Images/Reliance476.png";
import Reliance477 from "../assets/Images/Reliance477.png";
import Reliance478 from "../assets/Images/Reliance478.png";
import Reliance479 from "../assets/Images/Reliance479.png";
import Reliance480 from "../assets/Images/Reliance480.png";
import Reliance481 from "../assets/Images/Reliance481.png";
import Reliance482 from "../assets/Images/Reliance482.png";
import Reliance483 from "../assets/Images/Reliance483.png";
import Reliance484 from "../assets/Images/Reliance484.png";
import Reliance485 from "../assets/Images/Reliance485.png";
import Reliance486 from "../assets/Images/Reliance486.png";
import Reliance487 from "../assets/Images/Reliance487.png";
import Reliance488 from "../assets/Images/Reliance488.png";
import Reliance489 from "../assets/Images/Reliance489.png";
import Reliance490 from "../assets/Images/Reliance490.png";
import Reliance491 from "../assets/Images/Reliance491.png";
import Reliance492 from "../assets/Images/Reliance492.png";
import Reliance493 from "../assets/Images/Reliance493.png";
import Reliance494 from "../assets/Images/Reliance494.png";
import Reliance495 from "../assets/Images/Reliance495.png";
import Reliance496 from "../assets/Images/Reliance496.png";
import Reliance497 from "../assets/Images/Reliance497.png";
import Reliance498 from "../assets/Images/Reliance498.png";
import Reliance499 from "../assets/Images/Reliance499.png";
import Reliance500 from "../assets/Images/Reliance500.png";
import Reliance501 from "../assets/Images/Reliance501.png";
import Reliance502 from "../assets/Images/Reliance502.png";
import Reliance503 from "../assets/Images/Reliance503.png";
import Reliance504 from "../assets/Images/Reliance504.png";

const initialData = [
   {
      id:1,
      image: Reliance445,
      name: "Redmi Pad SE 22.09 cm Tablet 4 GB RAM,Grey VHU4939IN",
      price: "₹10,999.00",
      discount: "35% OFF",
      mrp: "₹16,999.00"
   },
   {
      id:2,
      image: Reliance446,
      name: "Samsung Galaxy 27.94 cm Tablet 64 GB 4 GB Dark",
      price: "₹20,999.00",
      discount: "25% OFF",
      mrp: "₹27,999.00"
   },
   {
      id:3,
      image: Reliance447,
      name: "Apple iPad Pro 7th Gen  Wi-Fi Tablet, 2 TB, Space Black",
      price: "₹2,29,900.00",
      discount: null,
      mrp: null
   },
   {
      id:4,
      image: Reliance448,
      name: "iPad Mini A17 Pro 2024 21.08 cm, 256 GB, Space Grey",
      price: "₹59,990.00",
      discount: null,
      mrp: null
   },
   {
      id:5,
      image: Reliance449,
      name: "iPad Mini A17 Pro 2024 21.08 cm Tablet, 128 GB,...",
      price: "₹64,990.00",
      discount: null,
      mrp: null
   },
   {
      id:6,
      image: Reliance450,
      name: "Apple iPad Air 2024 27.59 cm Wi-Fi + Cellular Tablet, 512 GB, Blue ",
      price: "₹99,990.00 ",
      discount: "5% OFF",
      mrp: "₹1,04,900.00"
   },
   {
      id:7,
      image: Reliance451,
      name: "Samsung Galaxy Tab A7 Lite 22.05 cm  3 GB RAM, 32 GB..",
      price: "₹13,990.00",
      discount: "20% OFF",
      mrp: "17,500.00"
   },
   {
      id: 8,
      image: Reliance452,
      name: "OnePlus Pad Go 28.82 cm (11.35 inches) 8 GB  LTE",
      price: "₹20,999.00",
      discount: "13% OFF",
      mrp: "₹23,999.00",
    },
    {
      id: 9,
      image: Reliance453,
      name: "Apple iPad Air 5th Gen 2022 27.69 cm 64 GB,",
      price: "₹59,995.00",
      discount: null,
      mrp: null,
    },
    {
      id: 10,
      image: Reliance454,
      name: "iPad Mini A17 Pro 2024 21.08 cm 256 GB, Blue",
      price: "₹59,900.00",
      discount: null,
      mrp: null
    },
    {
      id: 11,
      image: Reliance455,
      name: "Apple iPad Air 1st Gen 2024 32.78 cm , 128 GB...",
      price: "₹90,990.00",
      discount: "4% OFF",
      mrp: "₹94,989.00"
    },
    {
      id: 12,
      image: Reliance456,
      name: "Samsung Galaxy Tab S9 27.81 cm 2X Display, R",
      price: "₹74,999.00",
      discount: "20% OFF",
      mrp: "₹93,999.00"
    },

   //  ---------------------------------------------

   {
    id: 13,
    image: Reliance457,
    name: "Redmi Pad SE 27.94 cm (11 inch) Tablet 6 GB RAM Grey VHU4661IN ",
    price: "₹13,999.00",
    discount: "18% OFF",
    mrp:  "₹16,999.00"
 },
 {
    id: 14,
    image: Reliance458,
    name: "Redmi Pad Pro 30.73 cm (12.1 inch) Tablet 6 GB RAM, ..",
    price: "₹21,899.00",
    discount: "12% OFF",
    mrp: "₹24,999.00"
 },
 {
    id: 15,
    image: Reliance459,
    name: "Samsung Galaxy 31.49 cm (12.4 inch) Wi-Fi + Cellular...",
    price: "₹58,899.00",
    discount: "26% OFF",
    mrp: "₹79,999.00"
 },
 {
    id: 16,
    image: Reliance460,
    name: "Samsung Tab S10+ 31.49 cm (12.4 inch) WiFi + ..",
    price: "₹1,04,999.00",
    discount: "11% OFF",
    mrp: "₹1,17,999.00"
 },
 {
    id: 17,
    image: Reliance461,
    name: "Apple iPad Pro 7th Gen 2024 33.02 cm (13 inch) Wi-Fi Tablet,...",
    price: "₹1,14,499.00"
 },
 {
    id: 18,
    image: Reliance462,
    name: "Lenovo Tab M10 (3rd Gen) 25.65 cm (10.1 Inch) Tablet 4 GB RAM, ...",
    price: "₹11,899.00 ",
    discount: "60% OFF",
    mrp: "₹30,000.00"
 },
 {
    id: 19,
    image: Reliance463,
    name: "Samsung Galaxy Tab S9 27.81 cm (11 inch) Dynamic AMOLED ..",
    price: "₹63,999.00",
    discount: "22% OFF",
    mrp: "81,999.00"
 },
 {
    id: 20,
    image: Reliance464,
    name: "Samsung Galaxy 31.49 cm (12.4 inch) Wi-Fi + Cellular T",
    price: "₹48,999.00",
    discount: "30% OFF",
    mrp: "₹69,999.00",
  },
  {
    id: 21,
    image: Reliance465,
    name: "Samsung Galaxy 27.94 cm (11.0 inch) Wi-Fi (Only) ",
    price: "₹16,999.00",
    discount: "39% OFF",
    mrp: "₹27,999.00"
  },
  {
    id: 22,
    image: Reliance466,
    name: "Apple iPad Air M3 27.59 cm (11 inch) Wi-Fi Tablet,",
    price: "₹59,990.00",
    discount: null,
    mrp: null,
  },
  {
    id: 23,
    image: Reliance467,
    name: "Samsung Galaxy 31.49 cm (12.4 inch) Wi-Fi (Only) ",
    price: "₹50,999.00",
    discount: "27% OFF",
    mrp: "₹69,999.00",
  },
  {
    id: 24,
    image: Reliance468,
    name: "iPad Mini A17 Pro 2024 21.08 cm (8.3 inch) ",
    price: "₹49,799.00",
    discount: null,
    mrp: null,
  },

  //  ---------------------------------------------
 
 {
    id: 25,
    image: Reliance469,
    name: "Apple iPad Air 1st Gen 2024 32.78 cm.",
    price: "₹90,299.00",
    discount: "4% OFF",
    mrp: "₹94,999.00"
 },
 {
    id: 26,
    image: Reliance470,
    name: "Apple iPad Air 2024 27.59 cm (11 inch)..",
    price: "₹85,299.00"
 },
 {
    id: 27,
    image: Reliance471,
    name: "Apple iPad 9th Gen 2021 25.91 cm (10.2 inch) Wi-Fi + ...",
    price: "₹45,399.00",
    discount: "19% OFF",
    mrp: "₹54,999.00"
 },
 {
    id: 28,
    image: Reliance472,
    name: "Samsung Galaxy Tab S9 27.81 cm (11 inch)..",
    price: "₹76,990.00",
    discount: null,
    mrp: null
 },
 {
    id: 29,
    image: Reliance473,
    name: "Apple iPad Pro 5th Gen 2024 28.22 cm (11 inch) Wi-Fi +...",
    price: "₹2,19,999",
    discount: null,
    mrp: null
 },
 {
    id: 30,
    image: Reliance474,
    name: "Apple iPad Pro 5th Gen 2024 28.22 cm (11 inch) Wi-Fi +..",
    price: "₹22,999.00 ",
    discount: "30% OFF",
    mrp: "₹32,999.00"
 },
 {
    id: 31,
    image: Reliance475,
    name: "OnePlus Pad Go 28.82 cm (11.35 inches) 8 GB ..",
    price: "₹16,999.00",
    discount: "15% OFF",
    mrp: "19,999.00"
 },
 {
    id: 32,
    image: Reliance476,
    name: "Apple iPad Air 2024 27.59 cm (11 inch) Wi-Fi Tablet,",
    price: "₹1,04,900.00",
    discount: "5% OFF",
    mrp: "₹1,09,900.00",
  },
  {
    id: 33,
    image: Reliance477,
    name: "Apple iPad Air 1st Gen 2024 32.78 cm (13 inch)..",
    price: "₹1,04,990.00",
    discount: "5% OFF",
    mrp: "₹1,09,900"
  },
  {
    id: 34,
    image: Reliance478,
    name: "Samsung Galaxy 27.68 cm (10.9 inch) Wi-Fi + Cellular ...",
    price: "₹49,999.00",
    discount: "19% OFF",
    mrp: "₹61,999.00",
  },
  {
    id: 35,
    image: Reliance479,
    name: "Apple iPad Air 1st Gen 2024 32.78 cm (13 inch) Wi-Fi ",
    price: "₹1,24,900.00",
    discount: "4% OFF",
    mrp: "₹1,29,999.00",
  },
  {
    id: 36,
    image: Reliance480,
    name: "Redmi Pad Pro 30.73 cm (12.1 inch) Tablet 6 GB RAM,..",
    price: "₹21,999.00",
    discount: "12% OFF",
    mrp: "₹24,996.00",
  },

   //  ---------------------------------------------
 
 {
    id: 37,
    image: Reliance481,
    name: "Samsung Galaxy 31.49 cm (12.4 inch) Wi-Fi + ..",
    price: "₹48,242.00",
    discount: null,
    mrp: null
 },
 {
    id: 38,
    image: Reliance482,
    name: "Apple iPad Pro 5th Gen 2024 28.22 cm (11 inch) Wi-Fi T.",
    price: "₹1,99,499.00",
    discount: null,
    mrp: null
 },
 {
    id: 39,
    image: Reliance483,
    name: "Samsung Galaxy Tab S9 27.81 cm (11 inch) ..",
    price: "₹9,999.00",
    discount: "36% OFF",
    mrp: "₹15,999.00"
 },
 {
    id: 40,
    image: Reliance484,
    name: "Redmi Pad SE 22.09 cm (8.7 inch) Tablet 4 GB R...",
    price: "₹1,499.00",
    discount: "63% OFF",
    mrp: "₹3,999.00"
 },
 {
    id: 41,
    image: Reliance485,
    name: "Apple iPad Air M3 27.59 cm (11 inch) Wi-Fi Tablet, ...",
    price: "₹69,090.00",
    discount: null,
    mrp: null
 },
 {
    id: 42,
    image: Reliance486,
    name: "Apple iPad Pro 5th Gen 2024 28.22 cm (11 inch)...",
    price: "₹1,19,900.00 ",
    discount: null,
    mrp: null
 },
 {
    id: 43,
    image: Reliance487,
    name: "Samsung Tab S10U 37.08 cm (14.6 inch) WiFi + 5G e...",
    price: "₹1,22,999.00",
    discount: "11% OFF",
    mrp: "1,37,,999.00"
 },
 {
    id: 44,
    image: Reliance488,
    name: "Apple iPad 10th Gen (2022) 27.69 cm (10.9 inch)..",
    price: "₹30,990.00",
    discount: "13% OFF",
    mrp: "₹34,990.00",
  },
  {
    id: 45,
    image: Reliance489,
    name: "Apple iPad Air 5th Gen 2022 27.69 cm (10.9 inch) Wi-Fi Tablet,",
    price: "₹59,990.00",
    discount: null,
    mrp: null
  },
  {
    id: 46,
    image: Reliance490,
    name: "Samsung Galaxy 22.09 cm (8.7 inch) Wi-Fi + Cellular T...",
    price: "₹14,499.00",
    discount: "25% OFF",
    mrp: "₹19,999.00",
  },
  {
    id: 47,
    image: Reliance491,
    name: "Samsung Tab S10+ 31.49 cm (12.4 inch) WiFi Tablet with S-Pen, .",
    price: "₹90,999.00",
    discount: "11% OFF",
    mrp: "₹1,01,999.00",
  },
  {
    id: 48,
    image: Reliance492,
    name: "Xiaomi Pad 7 28.44 cm (11.2 inch) WiFi Tablet, 128 ..",
    price: "₹27,999.00",
    discount: "20% OFF",
    mrp: "₹34,999.00",
  },

   //  ---------------------------------------------
 
 {
    id: 49,
    image: Reliance493,
    name: "Samsung Galaxy 27.68 cm (10.9 inch) Wi-Fi + Cellular..",
    price: "₹38,999.00",
    discount: "29% OFF",
    mrp: "₹54,999.00"
 },
 {
    id: 50,
    image: Reliance494,
    name: "Apple iPad Mini 6 2021 21.08 cm (8.3 inch) Wi-Fi +  ...",
    price: "₹79,299.00"
 },
 {
    id: 51,
    image: Reliance495,
    name: "Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch) Wi-Fi T...",
    price: "₹29,449.00",
    discount: "5% OFF",
    mrp: "₹30,999.00"
 },
 {
    id: 52,
    image: Reliance496,
    name: "Apple iPad Air 1st Gen 2024 32.78 cm (13 inch) Wi-Fi + -..",
    price: "₹90,999.00",
    discount: "4% OFF",
    mrp: "₹94,990.00"
 },
 {
    id: 53,
    image: Reliance497,
    name: "Redmi Pad Pro 5G 30.73 cm (12.1 inch) Tablet 8 GB RAM,...",
    price: "₹26,499.00",
    discount: "10% OFF",
    mrp: "₹29,990.00"
 },
 {
    id: 54,
    image: Reliance498,
    name: "Samsung Galaxy 27.68 cm (10.9 inch) Wi-Fi ...",
    price: "₹31,999.00",
    discount: "29% OFF",
    mrp: "₹44,999.00"
 },
 {
    id: 55,
    image: Reliance499,
    name: "Apple iPad Mini 6 2021 21.08 cm (8.3 inch) Wi-Fi +(..",
    price: "₹60,999.00",
    discount: null,
    mrp: null
 },
 {
    id: 56,
    image: Reliance500,
    name: "Lenovo Tab M7 7305X 17.78 cm (7 inch) Tablet 2 GB R.",
    price: "₹9,499.00",
    discount: "30% OFF",
    mrp: "₹13,999.00",
  },
  {
    id: 57,
    image: Reliance501,
    name: "Apple iPad Air 1st Gen 2024 32.78 cm (13 inch) Wi-Fi .",
    price: "₹1,01,990.00",
    discount: "3% OFF",
    mrp: "₹1,04,900.00"
  },
  {
    id: 58,
    image: Reliance502,
    name: "Apple iPad Air 2024 27.59 cm (11 inch) Wi-Fi Tablet,...",
    price: "₹55,900.00",
    discount: "7% OFF",
    mrp: "₹59,990.00",
  },
  {
    id: 59,
    image: Reliance503,
    name: "OnePlus Pad 2 30.73 cm (12.1 inch) 8 GB RAM, 128 .",
    price: "₹36,999.00",
    discount: "8% OFF",
    mrp: "₹39,999.00",
  },
  {
    id: 60,
    image: Reliance504,
    name: "Redmi Pad SE 22.09 cm (8.7 inch) Tablet 4 GB RAM, 1.",
    price: "₹10,999.00",
    discount: "35% OFF",
    mrp: "₹16,999.00",
  },
]

function Tablets(){
   
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
                  <div className={styles.title}>Tablets</div>
                  
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

export default Tablets