import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import { useCartStore } from "../../shop/cart-dropdown-store";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    alert("You signed out succesfully!");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          SneakerWave
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
