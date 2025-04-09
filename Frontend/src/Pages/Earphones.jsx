import React,{useState} from "react";
import styles from "./Laptops.module.css"
import Reliance324 from "../assets/Images/Reliance324.png"
import Reliance325 from "../assets/Images/Reliance325.png"
import Reliance326 from "../assets/Images/Reliance326.png"
import Reliance327 from "../assets/Images/Reliance327.png"
import Reliance328 from "../assets/Images/Reliance328.png"
import Reliance329 from "../assets/Images/Reliance329.png"
import Reliance330 from "../assets/Images/Reliance330.png"
import Reliance331 from "../assets/Images/Reliance331.png"
import Reliance332 from "../assets/Images/Reliance332.png"
import Reliance333 from "../assets/Images/Reliance333.png"
import Reliance334 from "../assets/Images/Reliance334.png"
import Reliance335 from "../assets/Images/Reliance335.png"
import Reliance336 from "../assets/Images/Reliance336.png"
import Reliance337 from "../assets/Images/Reliance337.png"
import Reliance338 from "../assets/Images/Reliance338.png"
import Reliance339 from "../assets/Images/Reliance339.png"
import Reliance340 from "../assets/Images/Reliance340.png"
import Reliance341 from "../assets/Images/Reliance341.png"
import Reliance342 from "../assets/Images/Reliance342.png"
import Reliance343 from "../assets/Images/Reliance343.png"
import Reliance344 from "../assets/Images/Reliance344.png"
import Reliance345 from "../assets/Images/Reliance345.png"
import Reliance346 from "../assets/Images/Reliance346.png"
import Reliance347 from "../assets/Images/Reliance347.png"
import Reliance348 from "../assets/Images/Reliance348.png"
import Reliance349 from "../assets/Images/Reliance349.png"
import Reliance350 from "../assets/Images/Reliance350.png"
import Reliance351 from "../assets/Images/Reliance351.png"
import Reliance352 from "../assets/Images/Reliance352.png"
import Reliance353 from "../assets/Images/Reliance353.png"
import Reliance354 from "../assets/Images/Reliance354.png"
import Reliance355 from "../assets/Images/Reliance355.png"
import Reliance356 from "../assets/Images/Reliance356.png"
import Reliance357 from "../assets/Images/Reliance357.png"
import Reliance358 from "../assets/Images/Reliance358.png"
import Reliance359 from "../assets/Images/Reliance359.png"
import Reliance360 from "../assets/Images/Reliance360.png"
import Reliance361 from "../assets/Images/Reliance361.png"
import Reliance362 from "../assets/Images/Reliance362.png"
import Reliance363 from "../assets/Images/Reliance363.png"
import Reliance364 from "../assets/Images/Reliance364.png"
import Reliance365 from "../assets/Images/Reliance365.png"
import Reliance366 from "../assets/Images/Reliance366.png"
import Reliance367 from "../assets/Images/Reliance367.png"
import Reliance368 from "../assets/Images/Reliance368.png"
import Reliance369 from "../assets/Images/Reliance369.png"
import Reliance370 from "../assets/Images/Reliance370.png"
import Reliance371 from "../assets/Images/Reliance371.png"
import Reliance372 from "../assets/Images/Reliance372.png"
import Reliance373 from "../assets/Images/Reliance373.png"
import Reliance374 from "../assets/Images/Reliance374.png"
import Reliance375 from "../assets/Images/Reliance375.png"
import Reliance376 from "../assets/Images/Reliance376.png"
import Reliance377 from "../assets/Images/Reliance377.png"
import Reliance378 from "../assets/Images/Reliance378.png"
import Reliance379 from "../assets/Images/Reliance379.png"
import Reliance380 from "../assets/Images/Reliance380.png"
import Reliance381 from "../assets/Images/Reliance381.png"
import Reliance382 from "../assets/Images/Reliance382.png"
import Reliance383 from "../assets/Images/Reliance383.png"
const initialData = [
   {
      id:1,
      image: Reliance324,
      name: "pTron InTunes Classic Bluetooth 5.2 Wireless Neckband Earphon",
      price: "₹394.00",
      discount: "79% OFF",
      mrp: "₹1,899.00",
   },
   {
      id:2,
      image: Reliance325,
      name: "UNIGEN UNIPODS True Wireless Earbuds Bluetooth Headphones",
      price: "₹1,099.00",
      discount: "53% OFF",
      mrp: "₹1,999.00"
   },
   {
      id:3,
      image: Reliance326,
      name: "Redmi 3 Pro True Wireless Earbuds with Smart In-Ear...",
      price: "₹2,699.00",
      discount: "55% OFF",
      mrp: "₹5,999.00"
   },
   {
      id:4,
      image: Reliance327,
      name: "Boompods Boombud GO True Wireless Bluetooth Earphone IPX...",
      price: "₹2,529.00",
      discount: "49% OFF",
      mrp: "₹4,999.00"
   },
   {
      id:5,
      image: Reliance328,
      name: "pTron Bassbuds Joy In-Ear TWS Earbuds with Stereo Sound, 34...",
      price: "₹699.00",
      discount: "73% OFF",
      mrp: "₹12,599.00"
   },
   {
      id:6,
      image: Reliance329,
      name: "iGear Atom True Wireless Earbuds, White... ",
      price: "₹707.00 ",
      discount: "62% OFF",
      mrp: "₹1,850.00"
   },
   {
      id:7,
      image: Reliance330,
      name: "Noise TWS Air Buds Nano with 15 hours of Playtime, Tru Bass, Full",
      price: "₹1,121.00",
      discount: "63% OFF",
      mrp: "2,999.00"
   },
   {
      id: 8,
      image: Reliance331,
      name: "Crossloop Joy Zee TWS Earbuds with Mic, White, Touch Control,..",
      price: "₹399.00",
      discount: "87% OFF",
      mrp: "₹2,999.00",
    },
    {
      id: 9,
      image: Reliance332,
      name: "pTron Bassbuds Duo Pro TWS Earbuds with TruTalk AI-ENC Calls,..",
      price: "₹899.00",
      discount: "69% OFF",
      mrp: "₹2,899.00",
    },
    {
      id: 10,
      image: Reliance333,
      name: "Apple Beats TWS ANC Powerbeats Pro 2, Jet Black",
      price: "₹29,990.00",
      discount: null,
      mrp: null
    },
    {
      id: 11,
      image: Reliance334,
      name: "Riversong Air X5+ True Wireless Earbuds with 3-4 Hours Playback...",
      price: "₹1,009.00",
      discount: "60% OFF",
      mrp: "₹2,499.00"
    },
    {
      id: 12,
      image: Reliance335,
      name: "OnePlus Nord Buds 3 Truly Wireless Bluetooth Earbuds with...",
      price: "₹2,299.00",
      discount: "23% OFF",
      mrp: "₹2,999.00",
    },

   //  ---------------------------------------------

   {
      id:13,
      image: Reliance336,
      name: "boAt Airdopes 148 True Wireless Airdopes, White Purity... ",
      price: "₹1,299.00",
      discount: "71% OFF",
      mrp: "₹4,490.00"
   },
   {
      id:14,
      image: Reliance337,
      name: "JNoise Pure Pods Truly Wireless Bluetooth Earbuds, AirWavep...",
      price: "₹2,999.00",
      discount: "57% OFF",
      mrp: "₹6,999.00"
   },
   {
      id:15,
      image: Reliance338,
      name: "Realme Air 6 Pro TWS Bluetooth Earbuds with 11 mm Dynamic..",
      price: "₹4,999.00",
      discount: "38% OFF",
      mrp:"₹7,999.00"
   },
   {
      id:16,
      image: Reliance339,
      name: "Zebronics Zeb-Sound Bomb 2 True Wireless Earbuds, 14 hours ...",
      price: "₹990.00",
      discount: "60% OFF",
      mrp: "₹2,499.00"
   },
   {
      id:17,
      image: Reliance340,
      name: "boAt Nirvana Ion ANC Truly Wireless in-Ear Earbuds with Up to...",
      price: "₹1,799.00"
   },
   {
      id:18,
      image: Reliance341,
      name: "boAt Airdopes 181 Pro with 100 HRS Playback, 4 Mics ENx...",
      price: "₹1,199.00 ",
      discount: "76% OFF",
      mrp: "₹4,490.00"
   },
   {
      id:19,
      image: Reliance342,
      name: "JBL Live Pro 2 Premium In Ear Wireless TWS Earbuds, ANC",
      price: "₹6,999.00",
      discount: "59% OFF",
      mrp: "16,999.00"
   },
   {
      id: 20,
      image: Reliance343,
      name: "Boult Audio C Charge Wireless in Ear Bluetooth Neckband with ENC",
      price: "₹999.00",
      discount: "44% OFF",
      mrp: "₹1,799.00",
    },
    {
      id: 21,
      image: Reliance344,
      name: "Boult Audio K45 with Quad Mic ENC, 50H Battery Life, Low.",
      price: "₹1,599.00"
    },
    {
      id: 22,
      image: Reliance345,
      name: "Realme Buds Air 5 Pro In-ear Wirless Earphone, Upto 38 hrs of...",
      price: "₹4,999.00",
      discount: "38% OFF",
      mrp: "₹7,999.00",
    },
    {
      id: 23,
      image: Reliance346,
      name: "Reconnect Pro Buds 2 Wireless Earphone, IPX4 Level sweat",
      price: "₹699.00",
      discount: "65% OFF",
      mrp: "₹1,999.00",
    },
    {
      id: 24,
      image: Reliance347,
      name: "Noise Flair In-Ear Wireless Touch Enabled Neckband with Swiftcaller",
      price: "₹1,299.00",
      discount: "65% OFF",
      mrp: "₹3,999.00",
    },

    //  ---------------------------------------------
   
   {
      id:25,
      image: Reliance348,
      name: "JBL C50HI, Wired in Ear Headphones with Mic, One Button...",
      price: "₹499.00",
      discount: "50% OFF",
      mrp: "₹999.00"
   },
   {
      id:26,
      image: Reliance349,
      name: "realme Buds T310 TWS Bluetooth Earbuds with 12.4 mm Dynamic",
      price: "₹1,999.00"
   },
   {
      id:27,
      image: Reliance350,
      name: "pTron InTunes Classic Bluetooth 5.2 Wireless Neckband Earphones wit...",
      price: "₹399.00",
      discount: "79% OFF",
      mrp:"₹1,899.00"
   },
   {
      id:28,
      image: Reliance351,
      name: "OnePlus Buds 3 Truly Wireless Bluetooth Earbuds with Upto 49dB..",
      price: "₹5,999.00",
      discount: "15% OFF",
      mrp: "₹6,499.00"
   },
   {
      id:29,
      image: Reliance352,
      name: "Bose New QuietComfort Wireless Noise Cancelling Earbuds, Lifestyl...",
      price: "₹14,999",
      discount:"11% OFF",
      mrp:"₹16,900.00"
   },
   {
      id:30,
      image: Reliance353,
      name: "Philips SHB1805WT Wireless Headphone, bluetooth 4.0, upto 4...",
      price: "₹863.00 ",
      discount: "62% OFF",
      mrp: "₹2,299.00"
   },
   {
      id:31,
      image: Reliance354,
      name: "GOVO Go Buds 900 True Wireless Earbuds with Up to 20 Hours...",
      price: "₹1,609.00",
      discount: "73% OFF",
      mrp: "5,999.00"
   },
   {
      id: 32,
      image: Reliance355,
      name: "realme Buds wireless 3 Neo Bluetooth Neckband with 13.4 mm",
      price: "₹1,099.00",
      discount: "56% OFF",
      mrp: "₹2,499.00",
    },
    {
      id: 33,
      image: Reliance356,
      name: "Crossloop Daily Fashion Series Wired in Ear Earphone with Mic, 2x..",
      price: "₹249.00",
      discount:"79% OFF",
      mrp: "₹1,199"
    },
    {
      id: 34,
      image: Reliance357,
      name: "Itek BEB012_BL Wireless Bluetooth Headphone with Mic, Black...",
      price: "₹1,117.00",
      discount: "44% OFF",
      mrp: "₹1,999.00",
    },
    {
      id: 35,
      image: Reliance358,
      name: "Noise TWS In-Ear Air Buds Plus with 20 Hour Playtime and.",
      price: "₹1,323.00",
      discount: "78% OFF",
      mrp: "₹5,999.00",
    },
    {
      id: 36,
      image: Reliance359,
      name: "Zebronics Zeb-Buds 10 Wired Earphones with Mic and a Multi-...",
      price: "₹379.00",
      discount: "46% OFF",
      mrp: "₹699.00",
    },

     //  ---------------------------------------------
   
   {
      id:37,
      image: Reliance360,
      name: "Aiwa ESBT-460 Bluetooth Wireless Neckband Earphones with Quad...",
      price: "₹2,242.00",
      discount: "55% OFF",
      mrp: "₹4,999.00"
   },
   {
      id:38,
      image: Reliance361,
      name: "Jabra Elite 3True Wireless Earbuds with Two Microphones, 28 hrs total...",
      price: "₹4,499.00",
      discount:"36% OFF",
      mrp: "₹6,999.00"
   },
   {
      id:39,
      image: Reliance362,
      name: "Skullcandy Smokin Buds In-Ear Wireless Earbuds, 20 Hr Battery...",
      price: "₹2,699.00",
      discount: "64% OFF",
      mrp:"₹7,999.00"
   },
   {
      id:40,
      image: Reliance363,
      name: "pTron PlayBuds 2 TruTalk AI-ENC HD Calls In-Ear TWS Earbuds,...",
      price: "₹1,499.00",
      discount: "63% OFF",
      mrp: "₹3,999.00"
   },
   {
      id:41,
      image: Reliance364,
      name: "Zebronics Zeb Sound Bomb 3 TWS Wireless Earbuds, upto 12 hrs of...",
      price: "₹1,090.00",
      discount:"69% OFF",
      mrp:"₹3,499.00"
   },
   {
      id:42,
      image: Reliance365,
      name: "Inbase Urban X4 In-Ear Wireless Neckband, Black...",
      price: "₹939.00 "
   },
   {
      id:43,
      image: Reliance366,
      name: "boAt Rockerz Trinity in Ear Earphones with 150 H Playtime,...",
      price: "₹1,099.00",
      discount: "56% OFF",
      mrp: "2,999.00"
   },
   {
      id: 44,
      image: Reliance367,
      name: "Samsung Galaxy Buds2 Pro True Wireless Earbud with Active Noise...",
      price: "₹15,990.00",
      discount: "20% OFF",
      mrp: "₹19,999.00",
    },
    {
      id: 45,
      image: Reliance368,
      name: "Apple AirPods (2nd Generation) with Charging Case, Hands-free Hey S...",
      price: "₹7,999.00",
      discount:"38% OFF",
      mrp: "₹12,900.00"
    },
    {
      id: 46,
      image: Reliance369,
      name: "JBL Tune Buds In Ear Wireless TWS Earbuds with Mic, ANC Earbuds...",
      price: "₹4,499.00",
      discount: "36% OFF",
      mrp: "₹6,999.00",
    },
    {
      id: 47,
      image: Reliance370,
      name: "Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen...",
      price: "₹1,299.00",
      discount: "68% OFF",
      mrp: "₹3,999.00",
    },
    {
      id: 48,
      image: Reliance371,
      name: "JBL Tune 310 Wired in-Ear Type C Headphones, Hi-Res Audio with...",
      price: "₹1,499.00",
      discount: "25% OFF",
      mrp: "₹1,999.00",
    },

     //  ---------------------------------------------
   
   {
      id:49,
      image: Reliance372,
      name: "Noise TWS Buds VS204 In-Ear Wireless Earbuds with 50 Hour To..",
      price: "₹1,890.00",
      discount: "13% OFF",
      mrp: "₹1,900.00"
   },
   {
      id:50,
      image: Reliance373,
      name: "Boult Audio ProBass Fcharge with upto 40 hrs of Playtime, ENC,14.2...",
      price: "₹1,299.00"
   },
   {
      id:51,
      image: Reliance374,
      name: "JBL Tune 215 TWS Earbuds, Up to 25 Hours Battery Life, Pure Bass...",
      price: "₹4,070.00",
      discount: "42% OFF",
      mrp:"₹6,999.00"
   },
   {
      id:52,
      image: Reliance375,
      name: "JBL C50HI, Wired in Ear Headphones with Mic, One Button-..",
      price: "₹499.00",
      discount: "50% OFF",
      mrp: "₹999.00"
   },
   {
      id:53,
      image: Reliance376,
      name: "Redmi Buds 5A, Active Noise Cancelling True Wireless Earbuds,...",
      price: "₹1,499.00",
      discount:"50% OFF",
      mrp:"₹2,999.00"
   },
   {
      id:54,
      image: Reliance377,
      name: "Mivi Duopods N4 True Wireless TWS Earbuds, Upto 50 hrs of...",
      price: "₹1,099.00",
      discount: "63% OFF",
      mrp: "₹2,999.00"
   },
   {
      id:55,
      image: Reliance378,
      name: "Marshall Minor III True Wireless Earbuds, 25 hrs of playtime, Intutiv..",
      price: "₹8,999.00",
      discount: "25% OFF",
      mrp: "11,999.00"
   },
   {
      id: 56,
      image: Reliance379,
      name: "Mivi Duopods N5 True Wireless TWS Earbuds, Upto 50 hrs of...",
      price: "₹1,399.00",
      discount: "65% OFF",
      mrp: "₹3,999.00",
    },
    {
      id: 57,
      image: Reliance380,
      name: "Zebronics Zeb Sound Bomb 3 TWS Wireless Earbuds, upto 12 hrs of...",
      price: "₹1,090.00",
      discount:"69% OFF",
      mrp: "₹3,499.00"
    },
    {
      id: 58,
      image: Reliance381,
      name: "Crossloop Bliss Podz True Wireless Earbuds with Mic, Black, Touch...",
      price: "₹399.00",
      discount: "87% OFF",
      mrp: "₹2,999.00",
    },
    {
      id: 59,
      image: Reliance382,
      name: "boAt Airdopes 170 ANC TWS Earbuds with 35 dB Active Noise..",
      price: "₹1,299.00",
      discount: "78% OFF",
      mrp: "₹5,990.00",
    },
    {
      id: 60,
      image: Reliance383,
      name: "Arrow A11 Wireless Bluetooth Wireless Neckband Earphone,.",
      price: "₹162.00",
      discount: "86% OFF",
      mrp: "₹1,199.00",
    },
]

function Earphones(){
   
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
                  <div className={styles.title}>Earphones</div>
                  
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

export default Earphones