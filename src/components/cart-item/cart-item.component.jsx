import useCartStore from "../../shop/cart-store.component";
import { FaTrash } from "react-icons/fa";
import "./cart-item.styles.scss";
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, id, price, cSize } = cartItem;
  const { removeFromCart } = useCartStore();

  return (
    <div>
      <p
        style={{
          fontFamily: "Open Sans Condensed",
          textTransform: "uppercase",
          fontWeight: "bolder",
        }}
      >
        {name}
      </p>
      <div className="cart-details-container">
        <div className="flex-img">
          <img src={imageUrl} alt={id} />
        </div>
        <div className="flex-info">
          <span>Price: {price} $</span>
          <p>Size: {cSize}</p>
        </div>

        <div className="flex-cart">
          <button
            className="remove-button"
            onClick={() => removeFromCart(cartItem)}
          >
            <FaTrash className="end" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
