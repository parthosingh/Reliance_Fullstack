import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css"
function Cart(){
  const navigate = useNavigate();
  function handleClick(){
    navigate("/")
}
    return(
        <>
          <div className={styles.Cart}>
            <img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/organization/60b75618d9b9b8ffabe828a3/theme/assets/empty_cart_view.8ef43a39716d74ea901e000cf94f363b.svg"/>
            <h4>Empty Cart</h4>
            <p>Browse items and add them to your cart</p>
            
            <button className={styles.button} onClick={handleClick}>Contine Shopping</button>
          </div>
        </>
    )
}

export default Cart