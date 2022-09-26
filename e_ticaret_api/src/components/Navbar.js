import React from "react";
import { ShoppingBag } from "@mui/icons-material";
import "../styles/navbar.css";

function Navbar({ setShow, size }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <ShoppingBag />
          </span>
          <span className="cart_count">{size}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
