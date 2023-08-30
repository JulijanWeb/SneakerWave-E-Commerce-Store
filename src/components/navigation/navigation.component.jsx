import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../core/utils/firebase.utils";
const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    alert("You signed out succesfully!");
    navigate("/shop");
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
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
