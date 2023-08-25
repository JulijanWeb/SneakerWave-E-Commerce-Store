import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import useCartStore from "../../shop/cart-store.store";
import useDropDownStore from "../../shop/cart-dropdown-store";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const cart = useCartStore((state) => state.cart);
  const countCart = cart.length;
  const isCartOpen = useDropDownStore((state) => state.isCartOpen);
  const setIsCartOpen = useDropDownStore((state) => state.setIsCartOpen);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{countCart}</span>
    </div>
  );
};
export default CartIcon;
