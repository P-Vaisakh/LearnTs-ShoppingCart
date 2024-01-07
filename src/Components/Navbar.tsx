import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <div className="w-full h-16 bg-[#272727] shadow-xl text-white flex items-center justify-between gap-8 px-8 sticky top-0">
      <div className=" flex items-center justify-start gap-8">
        <Link to={"/"} className="font-bold">
          Home
        </Link>
        <Link to={"/store"} className="font-bold">
          Store
        </Link>
        <Link to={"/about"} className="font-bold">
          About
        </Link>
      </div>
      <Link to={"/cart"} className="font-bold relative">
        <div className="bg-red-600 px-0 w-4 absolute -right-4 -top-1 h-4 text-xs rounded-full text-center">
          {cartQuantity}
        </div>
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
