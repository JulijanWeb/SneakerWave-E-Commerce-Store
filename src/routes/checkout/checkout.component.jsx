import "./checkout.styles.scss";
import useCartStore from "../../shop/cart-store.store";
import { FaTrash } from "react-icons/fa";

const Checkout = () => {
  const { removeFromCart, decreaseCartItemQuantity, increaseCartItemQuantity } =
    useCartStore();
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="no-items-container">
      {cart.length === 0 ? (
        <p className="no-items">No items in the cart</p>
      ) : (
        <table className="checkout-table">
          <thead>
            <tr className="checkout-info">
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((cartItem) => {
              const { id, imageUrl, name, price, cSize } = cartItem;
              return (
                <tr className="checkout-item-container" key={id}>
                  <td className="image-container">
                    <img src={imageUrl} alt={name} />
                  </td>
                  <td className="name">{name}</td>
                  <td className="price">Price: {price} $</td>
                  <td>Size: {cSize}</td>
                  <td>
                    Quantity:{" "}
                    <span className="quantity">{cartItem.quantity}</span>
                  </td>
                  <td>
                    <button onClick={() => decreaseCartItemQuantity(cartItem)}>
                      Decrease
                    </button>
                    <button onClick={() => increaseCartItemQuantity(cartItem)}>
                      Increment
                    </button>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(cartItem)}
                    >
                      <FaTrash className="end" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Checkout;
