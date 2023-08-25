import "./checkout.styles.scss";
import useCartStore from "../../shop/cart-store.component";
import { FaTrash } from "react-icons/fa";

const Checkout = () => {
  const { addToCart, removeFromCart, decreaseCartItemQuantity } =
    useCartStore();
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="no-items-container">
      {cart.length === 0 ? (
        <p className="no-items">No items in the cart</p>
      ) : (
        <div>
          <div className="checkout-info">
            <div className="info">
              <span>Product</span>
              <span>Description</span>
              <span>Price</span>
              <span>Size</span>
              <span>quantity</span>
              <span>Remove</span>
            </div>
            <hr></hr>
          </div>

          {cart.map((cartItem) => {
            const { id, imageUrl, name, price, cSize } = cartItem;
            return (
              <div className="checkout-item-container" key={id}>
                <div className="image-container">
                  <img style={{ width: "100px" }} src={imageUrl} alt={name} />
                </div>
                <span className="name">{name}</span>
                <span className="price">Price: {price} $</span>
                <p>Size: {cSize}</p>
                <button onClick={() => decreaseCartItemQuantity(cartItem)}>
                  Decrease Quantity
                </button>
                <span onClick={() => addToCart(cartItem)}>increment</span>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(cartItem)}
                >
                  <FaTrash className="end" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Checkout;
