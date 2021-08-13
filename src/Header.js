import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
       <Link to='/home' className="underline">
       <span           >
           <h4 className="header__logo"
>  GANESAN TEXTILES</h4>
         </span>


       </Link>
        
      <div className="header__search">
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} className="underline">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders' className="underline">
          <div className="header__option">
            <span className="header__optionLineOne">About</span>
            <span className="header__optionLineTwo">& Contact</span>
          </div>
        </Link>
        

        <Link to="/checkout" className="underline">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
