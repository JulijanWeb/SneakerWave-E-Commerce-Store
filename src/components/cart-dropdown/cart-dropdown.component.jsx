import Button from "../../components/button/button.component";
import { FiRefreshCcw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import useCartStore from "../../shop/cart-store.store";

const CartDropdown = () => {
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const resetCart = useCartStore((state) => state.resetCart);
  const countCart = cart.length;
  const [isMouseLeft, setIsMouseLeft] = useState(false);

  const handleOnBlur = () => {
    if (!isMouseLeft) {
      return;
    }
    closeCartDropdown();
  };

  const handleOnMouseEnter = () => {
    setIsMouseLeft(true);
  };

  const handleOnMouseLeave = () => {
    setIsMouseLeft(false);
  };

  return (
    <div
      onBlur={handleOnBlur}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className="cart-dropdown-container"
    >
      {countCart >= 0 ? (
        <div className="fi-flex">
          <p>Your cart: {countCart} items</p>
          <button className="removeAll" onClick={resetCart}>
            <FiRefreshCcw />
          </button>
        </div>
      ) : (
        <p className="empty-cart">Empty Cart</p>
      )}

      <div className="cart-items">
        {cart.map((product, index) => (
          <CartItem
            key={index}
            cartItem={product}
            removeItem={() => removeFromCart(product)}
          />
        ))}
      </div>
      <Button
        onClick={goToCheckout}
        buttonType={cart.length === 0 ? "checkout" : "inverted"}
      >
        Go to checkout!
      </Button>
    </div>
  );
};

export default CartDropdown;
