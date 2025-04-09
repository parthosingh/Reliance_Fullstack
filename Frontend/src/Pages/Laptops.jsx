import React,{useState} from "react";
import styles from "./Laptops.module.css"
import Reliance265 from "../assets/Images/Reliance265.png"
import Reliance266 from "../assets/Images/Reliance266.png"
import Reliance267 from "../assets/Images/Reliance267.png"
import Reliance268 from "../assets/Images/Reliance268.png"
import Reliance269 from "../assets/Images/Reliance269.png"
import Reliance270 from "../assets/Images/Reliance270.png"
import Reliance271 from "../assets/Images/Reliance271.png"
import Reliance272 from "../assets/Images/Reliance272.png"
import Reliance273 from "../assets/Images/Reliance273.png"
import Reliance274 from "../assets/Images/Reliance274.png"
import Reliance275 from "../assets/Images/Reliance275.png"
import Reliance276 from "../assets/Images/Reliance276.png"
import Reliance277 from "../assets/Images/Reliance277.png"
import Reliance278 from "../assets/Images/Reliance278.png"
import Reliance279 from "../assets/Images/Reliance279.png"
import Reliance280 from "../assets/Images/Reliance280.png"
import Reliance281 from "../assets/Images/Reliance281.png"
import Reliance282 from "../assets/Images/Reliance282.png"
import Reliance283 from "../assets/Images/Reliance283.png"
import Reliance284 from "../assets/Images/Reliance284.png"
import Reliance285 from "../assets/Images/Reliance285.png"
import Reliance286 from "../assets/Images/Reliance286.png"
import Reliance287 from "../assets/Images/Reliance287.png"
import Reliance288 from "../assets/Images/Reliance288.png"
import Reliance289 from "../assets/Images/Reliance289.png"
import Reliance290 from "../assets/Images/Reliance290.png"
import Reliance291 from "../assets/Images/Reliance291.png"
import Reliance292 from "../assets/Images/Reliance292.png"
import Reliance293 from "../assets/Images/Reliance293.png"
import Reliance294 from "../assets/Images/Reliance294.png"
import Reliance295 from "../assets/Images/Reliance295.png"
import Reliance296 from "../assets/Images/Reliance296.png"
import Reliance297 from "../assets/Images/Reliance297.png"
import Reliance298 from "../assets/Images/Reliance298.png"
import Reliance299 from "../assets/Images/Reliance299.png"
import Reliance300 from "../assets/Images/Reliance300.png"
import Reliance301 from "../assets/Images/Reliance301.png"
import Reliance302 from "../assets/Images/Reliance302.png"
import Reliance303 from "../assets/Images/Reliance303.png"
import Reliance304 from "../assets/Images/Reliance304.png"
import Reliance305 from "../assets/Images/Reliance305.png"
import Reliance306 from "../assets/Images/Reliance306.png"
import Reliance307 from "../assets/Images/Reliance307.png"
import Reliance308 from "../assets/Images/Reliance308.png"
import Reliance309 from "../assets/Images/Reliance309.png"
import Reliance310 from "../assets/Images/Reliance310.png"
import Reliance311 from "../assets/Images/Reliance311.png"
import Reliance312 from "../assets/Images/Reliance312.png"
import Reliance313 from "../assets/Images/Reliance313.png"
import Reliance314 from "../assets/Images/Reliance314.png"
import Reliance315 from "../assets/Images/Reliance315.png"
import Reliance316 from "../assets/Images/Reliance316.png"
import Reliance317 from "../assets/Images/Reliance317.png"
import Reliance318 from "../assets/Images/Reliance318.png"
import Reliance319 from "../assets/Images/Reliance319.png"
import Reliance320 from "../assets/Images/Reliance320.png"
import Reliance321 from "../assets/Images/Reliance321.png"
import Reliance322 from "../assets/Images/Reliance322.png"
import Reliance323 from "../assets/Images/Reliance323.png"

const initialData = [
   {
      id:1,
      image: Reliance265,
      name: "Apple MW1M3HN/A MacBook Air (Apple M4 Chip/16 GB/512GB...",
      price: "₹1,44,900.00",
      discount: null,
      mrp: null
   },
   {
      id:2,
      image: Reliance266,
      name: "Lenovo IdeaPad Slim 3 12th Gen Intel Core i5-12450H 39.6 cm (15...",
      price: "₹75,490.00",
      discount: null,
      mrp: null
   },
   {
      id:3,
      image: Reliance267,
      name: "Dell Inspiron 3525 Laptop (AMD Ryzen  R5-5500/8 GB/512 GB...",
      price: "₹37,890.00",
      discount: "33% OFF",
      mrp: null
   },
   {
      id:4,
      image: Reliance268,
      name: "Apple MRYN3HN/A MacBppk Air (Apple M3 Chip/8GB/512 GB ...",
      price: "₹1,44,900.00",
      discount: null,
      mrp: null
   },
   {
      id:5,
      image: Reliance269,
      name: "HP Victus 15-fb0178AX Gaming Laptop (AMD Ryzen 5 56OOH/16...",
      price: "₹59,990.00",
      discount: "16% OFF",
      mrp: "₹71,758.00"
   },
   {
      id:6,
      image: Reliance270,
      name: "HP 15 15-fd0492TU Standard Laptop (intel Core i5-1334U/16... ",
      price: "₹56,999.00 ",
      discount: "15% OFF",
      mrp: "₹67,084.00"
   },
   {
      id:7,
      image: Reliance271,
      name: "Asus VivoBook S14 S5406SA-QD094WS Thin & Light Laptop...",
      price: "₹1,15,749.00",
      discount: "18% OFF",
      mrp: "1,40,990.00"
   },
   {
      id: 8,
      image: Reliance272,
      name: "Dell Inspiron 15 3530 Notebook Laptop (Intel Core i3-1305U/8 ...",
      price: "₹37,790.00",
      discount: "14% OFF",
      mrp: "₹43,592.00",
    },
    {
      id: 9,
      image: Reliance273,
      name: "Lenovo WXIN IdeaPad 3 Laptop (12th Gen Intel Core i3-1215U/8 ...",
      price: "₹30,499.00",
      discount: "47% OFF",
      mrp: "₹57,590.00",
    },
    {
      id: 10,
      image: Reliance274,
      name: "Acer Aspire Lite AL15-52 Standard Laptop (Intel Core i7-1255U/DD...",
      price: "₹49,140.00",
      discount: "18% OFF",
      mrp: "₹59,990.00",
    },
    {
      id: 11,
      image: Reliance275,
      name: "Apple MC8M4HN/A MacBook Air 13 (8-Core Apple M3 Chip/24...",
      price: "₹1,29,900.00",
      discount: "16% OFF",
      mrp: "₹1,54,900.00",
    },
    {
      id: 12,
      image: Reliance276,
      name: "New Microsoft Surface Laptop 5 Intel 12th Gen EVO...",
      price: "₹1,82,990.00",
      discount: "3% OFF",
      mrp: "₹1,88,999.00",
    },

   //  ---------------------------------------------

   {
      id:13,
      image: Reliance277,
      name: "HP Pavilion EG3081TU Laptop (13th Gen Intel Core i5-..",
      price: "₹69,890.00",
      discount: "18% OFF",
      mrp: "₹84,835.00"
   },
   {
      id:14,
      image: Reliance278,
      name: "JioBook 11 with Lifetime Office/Android 4G Laptop...",
      price: "₹12,999.00",
      discount: "48% OFF",
      mrp: "₹25,000.00"
   },
   {
      id:15,
      image: Reliance279,
      name: "Dell Inspiron 14 5441 Notebook Laptop (Qualcomm Snapdragon...",
      price: "₹80,190.00",
      discount: "18% OFF",
      mrp:"₹98,236.00"
   },
   {
      id:16,
      image: Reliance280,
      name: "Lenovo LOQ 4KIN Laptop (Processor AMD Ryzen 7 784OH...",
      price: "₹84,799.00",
      discount: "45% OFF",
      mrp: "₹1,53,890.00"
   },
   {
      id:17,
      image: Reliance281,
      name: "Apple MC6C4HN/A MacBook Air (AppleM4 Chip/24 GB/512 GB...",
      price: "₹1,39,990.00"
   },
   {
      id:18,
      image: Reliance281,
      name: "HP Victus 15 15-fb3036AX Gaming Laptop (AMD Ryzen 7 8845HS/1...",
      price: "₹91,749.00 ",
      discount: "8% OFF",
      mrp: "₹99,900.00"
   },
   {
      id:19,
      image: Reliance282,
      name: "Asus VivoBook Go 15 E1504FA-NJ549WS Standard Laptop (AM...",
      price: "₹41,499.00",
      discount: "30% OFF",
      mrp: "58,990.00"
   },
   {
      id: 20,
      image: Reliance283,
      name: "HP 15s-er 1501AU Standard Laptop (AMD Ryzen 3 3250U/8...",
      price: "₹36,999.00",
      discount: "10% OFF",
      mrp: "₹41,204.00",
    },
    {
      id: 21,
      image: Reliance284,
      name: "Lenovo LOQ Intel Core i5 12th Gen 12450HX (16 GB/512 GB...",
      price: "₹97,090.00"
    },
    {
      id: 22,
      image: Reliance285,
      name: "Acer Aspire Lite AL15-52 Standard Laptop (Intel Core i7-1255U/DD...",
      price: "₹49,140.00",
      discount: "18% OFF",
      mrp: "₹59,990.00",
    },
    {
      id: 23,
      image: Reliance286,
      name: "HP Pavilion X360 14-ek1010TU Laptop (13th Gen Intel 15-,..",
      price: "₹78,190.00",
      discount: "16% OFF",
      mrp: "₹92,746.00",
    },
    {
      id: 24,
      image: Reliance287,
      name: "Lenovo BSIN IdeaPad Silm 1 Laptop (AMD Ryzen R5-55OOU/8...",
      price: "₹35,990.00",
      discount: "43% OFF",
      mrp: "₹62,790.00",
    },

    //  ---------------------------------------------
   
   {
      id:25,
      image: Reliance288,
      name: "HP Envy X360 14-fcOO78TU 2-in-1 Laptop (14 inch (35.56 cm)/Intel...",
      price: "₹96,990.00",
      discount: "19% OFF",
      mrp: "₹1,19,832.00"
   },
   {
      id:26,
      image: Reliance289,
      name: "Apple MC6V4HN/A MacBook Air (AppleM4 Chip/24 GB/512GB...",
      price: "₹1,39,999.00"
   },
   {
      id:27,
      image: Reliance290,
      name: "Asus ROG 16 G614JV-N3474WS Gaming Laptop (13th Gen Intel...",
      price: "₹1,40,749.00",
      discount: "13% OFF",
      mrp:"₹1,24,900.00"
   },
   {
      id:28,
      image: Reliance291,
      name: "Apple MRYM3HN/A MacBook Air (AppleM3 Chip/8GB/256 GB...",
      price: "₹99,990.00",
      discount: "20% OFF",
      mrp: "₹1,24,900.00"
   },
   {
      id:29,
      image: Reliance292,
      name: "HP Omen 14-fbOO89TX Gaming Laptop (Intel Core Ultra 7-155H/...",
      price: "₹1,42,490",
      discount:"26% OFF",
      mrp:"₹1,91,968.00"
   },
   {
      id:30,
      image: Reliance293,
      name: "HP 15s-eq2182AU Standard Laptop (AMD Ryzan 5-55OOU/16...",
      price: "₹42,190.00 ",
      discount: "33% OFF",
      mrp: "₹63,420.00"
   },
   {
      id:31,
      image: Reliance294,
      name: "Apple MRYU3HN/A MAcBook Air (Apple M3 Chip/8GB/256GB...",
      price: "₹99,990.00",
      discount: "20% OFF",
      mrp: "1,24,990.00"
   },
   {
      id: 32,
      image: Reliance295,
      name: "HP 15s-er 1501AU Standard Laptop (AMD Ryzen 3 3250U/8...",
      price: "₹36,999.00",
      discount: "10% OFF",
      mrp: "₹41,204.00",
    },
    {
      id: 33,
      image: Reliance296,
      name: "HP 14-emO214AU Standard Laptop (AMD Ryzen 5 732OU/16 GB/512..",
      price: "₹46,190.00",
      discount:"33% OFF",
      mrp: "₹"
    },
    {
      id: 34,
      image: Reliance297,
      name: "HP Omen 16-WF1026TX Shadow Black, Laptop (Intel Core i7-...",
      price: "₹1,81,749.00",
      discount: "8% OFF",
      mrp: "₹1,98,410.00",
    },
    {
      id: 35,
      image: Reliance298,
      name: "Asus TUF A15 FA506NCR-HNO75WS Gaming Laptop (AMD..",
      price: "₹66,499.00",
      discount: "28% OFF",
      mrp: "₹91,990.00",
    },
    {
      id: 36,
      image: Reliance299,
      name: "Asus Zenbook UX3405MA-PZ962WS Standard Laptop (Intel...",
      price: "₹1,35,749.00",
      discount: "21% OFF",
      mrp: "₹1,70,990.00",
    },

     //  ---------------------------------------------
   
   {
      id:37,
      image: Reliance300,
      name: "Dell Inspiron 14 5440 Notebook Laptop (Intel i5-1334U/16 GB/51...",
      price: "₹63,590.00",
      discount: "36% OFF",
      mrp: "₹98,676.00"
   },
   {
      id:38,
      image: Reliance301,
      name: "Asus VivoBook Go 14 E1404FA-NK541WS Standard Laptop(AM...",
      price: "₹41,499.00",
      discount:"42% OFF",
      mrp: "₹70,990.00"
   },
   {
      id:39,
      image: Reliance302,
      name: "Lenovo EDIN IdeaPad Gaming 3 Gaming Laptop (11th Gen-Intel...",
      price: "₹50,799.00",
      discount: "54% OFF",
      mrp:"₹1,10,990.00"
   },
   {
      id:40,
      image: Reliance303,
      name: "Lenovo IdeaPad Slim5 /i5-135OOH/40.64 cm(16.0 inch)...",
      price: "₹70,499.00",
      discount: "32% OFF",
      mrp: "₹1,03,490.00"
   },
   {
      id:41,
      image: Reliance304,
      name: "Samsung Galaxy Book3 Pro 360 Gaming and Professional Laptop...",
      price: "₹1,41,690.00",
      discount:"11% OFF",
      mrp:"₹1,58,990.00"
   },
   {
      id:42,
      image: Reliance305,
      name: "Apple MX2H3N/A MacBook Pro (12-Core Apple M4 Pro Chip/24...",
      price: "₹1,99,900.00 "
   },
   {
      id:43,
      image: Reliance306,
      name: "Asus Vivobook S14 M54O6WA-PP962WS Standard Laptop (AM...",
      price: "₹1,05,749.00",
      discount: "31% OFF",
      mrp: "1,52,990.00"
   },
   {
      id: 44,
      image: Reliance307,
      name: "Samsung Galaxy Book3 Pro Standard Laptop (13th Gen Intel...",
      price: "₹1,26,490.00",
      discount: "12% OFF",
      mrp: "₹1,42,990.00",
    },
    {
      id: 45,
      image: Reliance308,
      name: "Apple MBA-13/MRXT3HNA MacBook Air (Apple M3 chip/8...",
      price: "₹84,990.00",
      discount:"19% OFF",
      mrp: "₹1,04,900"
    },
    {
      id: 46,
      image: Reliance309,
      name: "Samsung Galaxy Book4 Convertible Laptop (Intel Core5...",
      price: "₹63,690.00",
      discount: "31% OFF",
      mrp: "₹91,989.00",
    },
    {
      id: 47,
      image: Reliance310,
      name: "Acer Aspire 3 12th Gen Intel Core i3 Laptop (Windows 11 Home/ 8...",
      price: "₹30,499.00",
      discount: "39% OFF",
      mrp: "₹49,990.00",
    },
    {
      id: 48,
      image: Reliance311,
      name: "Dell Inspiron 15 3530 Notebook  Laptop (Intel COre-i5 1334U/16...",
      price: "₹62,690.00",
      discount: "33% OFF",
      mrp: "₹92,899.00",
    },

     //  ---------------------------------------------
   
   {
      id:49,
      image: Reliance312,
      name: "Apple MRX33HN/A MacBook Pro (Apple M3 Pro Chip/18GB..",
      price: "₹1,64,890.00",
      discount: "13% OFF",
      mrp: "₹1,89,900.00"
   },
   {
      id:50,
      image: Reliance313,
      name: "Lenovo Flex5 52IN Laptop (Intel Core i7, 16GB RAM/512 GB...",
      price: "₹78,490.00"
   },
   {
      id:51,
      image: Reliance314,
      name: "Lenovo IdeaPad Slim 5 Intel Core Ultra 5 125H Built-in AI 35.5 cm...",
      price: "₹1,02,090.00",
      discount: "13% OFF",
      mrp:"₹1,24,900.00"
   },
   {
      id:52,
      image: Reliance315,
      name: "Lenovo IP3 25IN Laptop (16 GB RAM/512 GB, 13 Gen Core i5-..",
      price: "₹57,190.00",
      discount: "31% OFF",
      mrp: "₹82,499.00"
   },
   {
      id:53,
      image: Reliance316,
      name: "Apple MC9J4HN/A MacBook Air 15 (8-Core Apple M3 Chip /24...",
      price: "₹1,54,900.00",
      discount:"11% OFF",
      mrp:"₹1,74,900.00"
   },
   {
      id:54,
      image: Reliance317,
      name: "Lenovo 3WIN IdeaPad Slim 5 Laptop (Intel Core i5-...",
      price: "₹59,190.00",
      discount: "34% OFF",
      mrp: "₹84,490.00"
   },
   {
      id:55,
      image: Reliance318,
      name: "HP Pavilion 15-eg3018TU, Intel i5-1335U, 16GB DDR4 2DM,..",
      price: "₹73,890.00",
      discount: "15% OFF",
      mrp: "87,095.00"
   },
   {
      id: 56,
      image: Reliance319,
      name: "Lenovo 4HIN IdeaPad Slim 3 Laptop (AMD Ryzen 7...",
      price: "₹45,999.00",
      discount: "40% OFF",
      mrp: "₹76,890.00",
    },
    {
      id: 57,
      image: Reliance320,
      name: "Apple MacBook Pro, M3 Chip 8 Core CPU, 10 Core GPU,...",
      price: "₹1,49,900.00",
      discount:"33% OFF",
      mrp: "₹1,91,990.00"
    },
    {
      id: 58,
      image: Reliance321,
      name: "HP 15-fcO156AU Standard Laptop (AMD Ryzen 5 752OU/16 GB...",
      price: "₹43,490.00",
      discount: "15% OFF",
      mrp: "₹50,999.00",
    },
    {
      id: 59,
      image: Reliance322,
      name: "Leno Legion 5 16IRX9 Intel Core i7-1465OHX Laptop (40.64 cm...",
      price: "₹1,42,090.00",
      discount: "29% OFF",
      mrp: "₹2,00,090.00",
    },
    {
      id: 60,
      image: Reliance323,
      name: "Apple MBA-13/MXCR3HNA MacBook Air (Apple M3 chip/16...",
      price: "₹1,04,390.00",
      discount: "23% OFF",
      mrp: "₹1,34,900.00",
    },
]

function Laptops(){
   
   const [currentPage, setCurrentPage] = useState(1);
   const [rowsPerPage, setRowsPerPage] = useState(12) // how many data i should display per page is 12
   const [sortedData, setSortedData] = useState([...initialData])
   const indexOfLastItem = currentPage * rowsPerPage; //here we do this because we have total 60 data how will we finalise that 12 data 
   const indexOfFirstItem = indexOfLastItem - rowsPerPage; //here we do this because we have total 60 data how will we finalise that 12 data
   const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
   const totalPages = Math.ceil(sortedData.length/rowsPerPage) // how many total pages i need we will find using total records i have 60 and in 1 page 10 records are there we will divide them both
   
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
   setCurrentPage(1) // Reset to first page after sorting
 }
   return(
        <>
         <div style={{backgroundColor:"#F5F5F5"}}>
             <div className={styles.headers}>
                  <div className={styles.title}>Laptops</div>
                  
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
               <div className={styles.pagination}> {/* previous and next b/w them also there are many buttons, we will find that using total pages */}  
                  <button onClick={handlePrev} disabled={currentPage===1}>Prev</button>
                  {/* here we will make an array here 1st argument will tell array length and 2nd parameter will we index here (_,index) is by default syntax it is working as a placeholder */}
                  {Array.from({length:totalPages}, (_, index)=> (    
                     <button onClick={()=> handlePageClick(index+1)} className={currentPage === index + 1 ? styles.active : styles.button}>{index+1}</button> 
                  ))}
                  <button onClick={handleNext} disabled={currentPage===totalPages}>Next</button>
               </div>
          </div>
        </>
    )
}

export default Laptops