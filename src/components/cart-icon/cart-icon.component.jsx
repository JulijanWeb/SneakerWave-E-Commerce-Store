import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { useCartStore } from "../../shop/cart-dropdown-store";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;
