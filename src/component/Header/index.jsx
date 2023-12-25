import { useEffect, useState } from "react";
import "./index.css";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logoName">
          <div className="logo">A-Cart</div>
          <div className="logoname">Shopping site...</div>
        </div>
        <div className="headerRight">
          <div>
            <FaShoppingCart className="cart" />
          </div>
          <div className="user">
            <img src="./images/avatar.png" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
