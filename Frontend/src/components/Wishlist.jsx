import { useNavigate } from "react-router-dom";
import styles from "./Wishlist.module.css";

function Wishlist() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.Cart}>
        <img
          src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/organization/60b75618d9b9b8ffabe828a3/theme/assets/empty_wishlist_view.4f7bdea4d7894e6f08a40cb05e1a65a5.svg"
          alt="Empty Wishlist"
        />
        <h4>Empty Wishlist</h4>
        <p>Explore more and add items to your wishlist</p>
        <button className={styles.button} onClick={handleClick}>
          Explore Products
        </button>
      </div>
    </>
  );
}

export default Wishlist;