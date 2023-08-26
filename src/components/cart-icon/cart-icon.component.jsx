import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import useCartStore from "../../shop/cart-store.store";
import "./cart-icon.styles.scss";

const CartIcon = ({onClick}) => {
  const cart = useCartStore((state) => state.cart);
  const countCart = cart.length;

  return (
    <div className="cart-icon-container" onClick={onClick}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{countCart}</span>
    </div>
  );
};
export default CartIcon;
