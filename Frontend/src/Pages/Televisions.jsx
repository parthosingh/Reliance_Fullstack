import React,{useState, useEffect} from "react";
import styles from "./Televisions.module.css"
import Reliance210 from "../assets/Images/Reliance210.png";
import Reliance211 from "../assets/Images/Reliance211.png";
import Reliance212 from "../assets/Images/Reliance212.png";
import Reliance213 from "../assets/Images/Reliance213.png";
import Reliance214 from "../assets/Images/Reliance214.png";
import Reliance215 from "../assets/Images/Reliance215.png";
import Reliance216 from "../assets/Images/Reliance216.png";
import Reliance217 from "../assets/Images/Reliance217.png";
import Reliance218 from "../assets/Images/Reliance218.png";
import Reliance219 from "../assets/Images/Reliance219.png";
import Reliance220 from "../assets/Images/Reliance220.png";
import Reliance221 from "../assets/Images/Reliance221.png";
import Reliance222 from "../assets/Images/Reliance222.png";
import Reliance223 from "../assets/Images/Reliance223.png";
import Reliance224 from "../assets/Images/Reliance224.png";
import Reliance225 from "../assets/Images/Reliance225.png";
import Reliance226 from "../assets/Images/Reliance226.png";
import Reliance227 from "../assets/Images/Reliance227.png";
import Reliance228 from "../assets/Images/Reliance228.png";
import Reliance229 from "../assets/Images/Reliance229.png";
import Reliance230 from "../assets/Images/Reliance230.png";
import Reliance231 from "../assets/Images/Reliance231.png";
import Reliance232 from "../assets/Images/Reliance232.png";
import Reliance233 from "../assets/Images/Reliance233.png";
import Reliance234 from "../assets/Images/Reliance234.png";
import Reliance235 from "../assets/Images/Reliance235.png";
import Reliance236 from "../assets/Images/Reliance236.png";
import Reliance237 from "../assets/Images/Reliance237.png";
import Reliance238 from "../assets/Images/Reliance238.png";
import Reliance239 from "../assets/Images/Reliance239.png";
import Reliance240 from "../assets/Images/Reliance240.png";
import Reliance241 from "../assets/Images/Reliance241.png";
import Reliance242 from "../assets/Images/Reliance242.png";
import Reliance243 from "../assets/Images/Reliance243.png";
import Reliance244 from "../assets/Images/Reliance244.png";
import Reliance245 from "../assets/Images/Reliance245.png";
import Reliance246 from "../assets/Images/Reliance246.png";
import Reliance247 from "../assets/Images/Reliance247.png";
import Reliance248 from "../assets/Images/Reliance248.png";
import Reliance249 from "../assets/Images/Reliance249.png";
import Reliance250 from "../assets/Images/Reliance250.png";
import Reliance251 from "../assets/Images/Reliance251.png";
import Reliance252 from "../assets/Images/Reliance252.png";
import Reliance253 from "../assets/Images/Reliance253.png";
import Reliance254 from "../assets/Images/Reliance254.png";
import Reliance258 from "../assets/Images/Reliance258.png";
import Reliance259 from "../assets/Images/Reliance259.png";
import Reliance260 from "../assets/Images/Reliance260.png";
import Reliance261 from "../assets/Images/Reliance261.png";
import Reliance262 from "../assets/Images/Reliance262.png";
import Reliance263 from "../assets/Images/Reliance263.png";
import Reliance264 from "../assets/Images/Reliance264.png";

function Televisions(){
    let Images=[
        Reliance218,
        Reliance219,
        Reliance220,
        Reliance221,
        Reliance222
    ] 

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=> {
        const timer = setInterval(()=> {
            setCurrentSlide((prevIndex)=> (prevIndex+1)% Images.length)
        },2000)
        return () => clearInterval(timer)
    })

    const goToslide = (slideIndex) => {
        setCurrentSlide(slideIndex+1)
    };
    
    return(
        <>
        <div style={{backgroundColor:"#F5F5F5"}}>
          <div className={styles.ParentTelevisionsBanner}>
             <div><img src={Reliance210}/></div>
             <div><img src={Reliance211}/></div>
             <div><img src={Reliance212}/></div>
             <div><img src={Reliance213}/></div>
             <div><img src={Reliance214}/></div>
             <div><img src={Reliance215}/></div>
             <div><img src={Reliance216}/></div>
             <div><img src={Reliance217}/></div>
          </div>
          <div className={styles.ParentNameTelevisionsBanner}>
            <div>Samsung</div>
            <div>LG</div>
            <div>Sony</div>
            <div>Xiaomi</div>
            <div>TCL</div>
            <div>Haier</div>
            <div>Foxsky</div>
            <div>Reconnect</div>
          </div>
          <div>
            <div style={{textAlign:"center"}}> 
            <img className={styles.container} src={Images[currentSlide]} alt={`Reliance ${currentSlide + 1}`} />
             <div className={styles.dotContainerStyles}>
                {Images.map((_, slideIndex) => (
                <div key={slideIndex} className={styles.dotStyles} onClick={() => goToSlide(slideIndex)}>
                     ○
                </div>
                    ))}
             </div>
            </div>
          </div>
          <br/>
           <div className={styles.ParentShopbysize}>
                    <div className={styles.titleParentShopbysize}>Shop By Size</div>
                    <div className={styles.Shopbysize}>
                      <div><img src={Reliance223} alt="Type 1" /></div>
                      <div><img src={Reliance224} alt="Type 2" /></div>
                      <div><img src={Reliance225} alt="Type 3" /></div>
                      <div><img src={Reliance226} alt="Type 4" /></div>
                    </div>
           </div>
           <br/>
           <div className={styles.ParentShopbyType}>
             <div className={styles.titleParentShopbyType}>Shop by Type</div>
             <div className={styles.ShopbyType}>
               <div><img src={Reliance227} width={250} height={153} alt="Size 1" /></div>
               <div><img src={Reliance228} width={250} height={153} alt="Size 2" /></div>
               <div><img src={Reliance229} width={250} height={153} alt="Size 3" /></div>
               <div><img src={Reliance230} width={250} height={153} alt="Size 4" /></div>
               <div><img src={Reliance231} width={250} height={153} alt="Size 5" /></div>
             </div>
          </div>  
          <br/>
           <div className={styles.ParentShopbyBudget}>
             <div className={styles.titleParentShopbyBudget}>Shop by Budget</div>
             <div className={styles.ShopbyBudget}>
               <div><img src={Reliance232} width={250} height={153} alt="Size 1" /></div>
               <div><img src={Reliance233} width={250} height={153} alt="Size 2" /></div>
               <div><img src={Reliance234} width={250} height={153} alt="Size 3" /></div>
               <div><img src={Reliance235} width={250} height={153} alt="Size 4" /></div>
               <div><img src={Reliance236} width={250} height={153} alt="Size 5" /></div>
             </div>
          </div> 
          <br/>
          <div style={{backgroundColor:"white"}}>
          <div className={styles.TelevisionDeals}>
            <div className={styles.heading}>Shop Now, Save Big!</div>
            <div>View All ›</div>
          </div>
          <div> 65 Inches TVs & Above  </div>
           <div className={styles.TV}>
             <div>
                <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance237}/>
                   <p>Samsung 163 cm (65 Inch) 4K <br/>
                      QLED  Smart TV...
                   </p>
                   <h3> ₹1,04,990.00 <sup>38% OFF</sup></h3>
                   <p>MRP <span>₹1,69,900.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance238}/>
                   <p>LG 163 cm (65 Inch) 4K  <br/>
                     HD Nanocell SmartTV, Black,...
                   </p>
                   <h3> ₹77,990.00 <sup>48% OFF</sup></h3>
                   <p>MRP <span>₹1,49,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 10% Bank Discount</div>
                <div>
                   <img src={Reliance239}/>
                   <p>Sony BRAVIA 3 Series 164 cm<br/>
                      (65 inches) 4K Ultra HD Smart..
                    </p>
                   <h3> ₹1,11,990.00 <sup>32% OFF</sup></h3>
                   <p>MRP <span>₹1,64,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance240}/>
                   <p>LG 165 cm (65 Inch) 4K Ultra<br/>
                     HD Smart LED TV, 65UT8050
                   </p>
                   <h3> ₹79,990.00 <sup>39% OFF</sup></h3>
                   <p>MRP <span>₹1,31,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Limited Time Deal </div>
                <div>
                   <img src={Reliance241}/>
                   <p>TCL 190.5cm (75 inch) Ultra HD <br/>
                      (4K) Google TV, 75P755 PRO,...
                   </p>
                   <h3> ₹69,990.00 <sup>73% OFF</sup></h3>
                   <p>MRP <span>₹2,59,990.00</span></p>
                </div>
             </div>
           </div>
          </div>
          <br/>
          <div style={{backgroundColor:"white"}}>
          <div className={styles.TelevisionDeals}>
            <div className={styles.heading}>Hot Deals</div>
            <div>View All ›</div>
          </div>
          <div> 55 Inches TVs  </div>
           <div className={styles.TV}>
             <div>
                <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance242}/>
                   <p>LG 139.7 cm (55 inch) 4K ultra <br/>
                     HD TV, Ashed Blue,...
                   </p>
                   <h3> ₹54,990.00 <sup>46% OFF</sup></h3>
                   <p>MRP <span>₹89,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance243}/>
                   <p>Samsung 138 cm (55 Inch) 4K <br/>
                      Ultra HD Smart TV...
                   </p>
                   <h3> ₹58,990.00 <sup>25% OFF</sup></h3>
                   <p>MRP <span>₹78,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 10% Bank Discount</div>
                <div>
                   <img src={Reliance244}/>
                   <p>Sony BRAVIA 2 139 cm (55 <br/>
                      inches) 4K Ultra HD Smart LED...
                   </p>
                   <h3> ₹68,990.00 <sup>31% OFF</sup></h3>
                   <p>MRP <span>₹99,900.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance245}/>
                   <p>Samsung 138 cm (55 Inch) 4K <br/>
                      Ultra HD Smart TV...
                   </p>
                   <h3> ₹55,490.00 <sup>19% OFF</sup></h3>
                   <p>MRP <span>₹68,900.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Best Seller </div>
                <div>
                   <img src={Reliance246}/>
                   <p>TCL 139.7 cm (55 inch) QLED <br/>
                      Smart Google TV, 55C655, Black
                   </p>
                   <h3> ₹40,990.00 <sup>66% OFF</sup></h3>
                   <p>MRP <span>₹1,21,900.00</span></p>
                </div>
             </div>
           </div>
          </div>
          <br/>
          <div style={{backgroundColor:"white"}}>
          <div className={styles.TelevisionDeals}>
            <div className={styles.heading}>Unbeatable Savings</div>
            <div>View All ›</div>
          </div>
          <div>50 Inches TVs </div>
           <div className={styles.TV}>
             <div>
                <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance247}/>
                   <p>Sony BRAVIA 2 Series 126 cm <br/>
                      (50 inches) 4K Ultra HD Smart..
                   </p>
                   <h3> ₹64,190.00 <sup>25% OFF</sup></h3>
                   <p>MRP <span>₹85,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance248}/>
                   <p>LG 127 cm (50 inch) 4K Ultra HD<br/>
                       TV, Ashed Blue , 50UT80506LA
                   </p>
                   <h3> ₹49,990.00 <sup>35% OFF</sup></h3>
                   <p>MRP <span>₹76,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 10% Bank Discount</div>
                <div>
                   <img src={Reliance249}/>
                   <p>Samsung 125 cm (50 inch) 4K<br/>
                      Ultra HD Smart TV...
                   </p>
                   <h3> ₹40,990.00 <sup>34% OFF</sup></h3>
                   <p>MRP <span>₹61,900.00</span></p>
                </div>
             </div>
             <div>
              <br/> <br/>
                <div>
                   <img src={Reliance250}/>
                   <p>Sony BRAVIA 2 Series 126 cm <br/>
                      (50 inches) 4K Ultra HD Smart..
                   </p>
                   <h3> ₹59,990.00 <sup>25% OFF</sup></h3>
                   <p>MRP <span>₹79,900.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Limited Time Deal </div>
                <div>
                   <img src={Reliance251}/>
                   <p>TCL 127 cm (50 inch) Ultra HD  <br/>
                      (4K) Google TV, 50P755 , Black
                   </p>
                   <h3> ₹30,990.00 <sup>54% OFF</sup></h3>
                   <p>MRP <span>₹66,990.00</span></p>
                </div>
             </div>
           </div>
          </div>
          <br/>
          <div style={{backgroundColor:"white"}}>
          <div className={styles.TelevisionDeals}>
            <div className={styles.heading}>Star Picks</div>
            <div>View All ›</div>
          </div>
          <div> 43 Inches TV's </div>
           <div className={styles.TV}>
             <div>
                <div className={styles.titlediscount}>Flat 5% Bank Discount</div>
                <div>
                   <img src={Reliance252}/>
                   <p>LG 139.7 cm (55 inch) 4K ultra <br/>
                     HD TV, Ashed Blue,...
                   </p>
                   <h3> ₹49,990.00 <sup>46% OFF</sup></h3>
                   <p>MRP <span>₹91,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 10% Bank Discount</div>
                <div>
                   <img src={Reliance253}/>
                   <p>LG 139.7 cm (55 inch) 4K ultra <br/>
                     HD TV, Ashed Blue,...
                   </p>
                   <h3> ₹49,990.00 <sup>46% OFF</sup></h3>
                   <p>MRP <span>₹91,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance254}/>
                   <p>LG 139.7 cm (55 inch) 4K ultra <br/>
                     HD TV, Ashed Blue,...
                   </p>
                   <h3> ₹49,990.00 <sup>46% OFF</sup></h3>
                   <p>MRP <span>₹91,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 10% Bank Discount</div>
                <div>
                   <img src={Reliance258}/>
                   <p>LG 139.7 cm (55 inch) 4K ultra <br/>
                     HD TV, Ashed Blue,...
                   </p>
                   <h3> ₹49,990.00 <sup>46% OFF</sup></h3>
                   <p>MRP <span>₹91,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Best Seller </div>
                <div>
                   <img src={Reliance259}/>
                   <p>LG 139.7 cm (55 inch) 4K ultra <br/>
                     HD TV, Ashed Blue,...
                   </p>
                   <h3> ₹49,990.00 <sup>46% OFF</sup></h3>
                   <p>MRP <span>₹91,990.00</span></p>
                </div>
             </div>
           </div>
          </div>
          <br/>
          <div style={{backgroundColor:"white"}}>
          <div className={styles.TelevisionDeals}>
            <div className={styles.heading}>Lowest Price Deals</div>
            <div>View All ›</div>
          </div>
          <div> 43 Inches TV's </div>
           <div className={styles.TV}>
             <div>
                <div className={styles.titlediscount}>Flat 5% Bank Discount</div>
                <div>
                   <img src={Reliance260}/>
                   <p>Samsung wondertainment 80 cm<br/>
                      (32 inch) HD Ready LED Smart..
                   </p>
                   <h3> ₹14,990.00 <sup>21% OFF</sup></h3>
                   <p>MRP <span>₹18,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 10% Bank Discount</div>
                <div>
                   <img src={Reliance261}/>
                   <p>Acer G plus Series 80.01 cm (32 <br/>
                      inch) HD Ready LED Smart...
                   </p>
                   <h3> ₹10,987.00 <sup>56% OFF</sup></h3>
                   <p>MRP <span>₹24,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 12.5% Bank Discount</div>
                <div>
                   <img src={Reliance262}/>
                   <p>Foxsky 80 cm (32 inch) HD <br/>
                      Ready LED Smart TV, 2K Series..
                   </p>
                     ⭐⭐⭐⭐ (48)
                   <h3> ₹7,499.00 <sup>64% OFF</sup></h3>
                   <p>MRP <span>₹920,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Flat 10% Bank Discount</div>
                <div>
                   <img src={Reliance263}/>
                   <p>NVY 80 cm (32 inch) HD<br/>
                      Smart Framless LED...
                   </p>
                   <h3> ₹8,999.00 <sup>57% OFF</sup></h3>
                   <p>MRP <span>₹20,990.00</span></p>
                </div>
             </div>
             <div>
             <div className={styles.titlediscount}>Best Seller </div>
                <div>
                   <img src={Reliance264}/>
                   <p>Xiaomi A Series 81.28 cm (32 <br/>
                      inches) HD Ready Smart Googl...
                   </p>
                   <h3> ₹12,494.00 <sup>50% OFF</sup></h3>
                   <p>MRP <span>₹24,999.00</span></p>
                </div>
             </div>
           </div>
          </div>
          <br/>
          </div>
        </>
    )
}

export default Televisions