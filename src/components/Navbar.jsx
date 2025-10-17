import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

function Navbar({ cart = [] }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">HomeDecor</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <div className="relative">
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
