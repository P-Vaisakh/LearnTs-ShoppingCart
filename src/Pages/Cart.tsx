// import React from "react";
import { shoppingItem, useShoppingCart } from "../Context/ShoppingCartContext";
import Product from "../Components/Product";
import { useContext } from "react";

const Cart = () => {
  const { cartItem } = useShoppingCart();
  const { products } = useContext(shoppingItem);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 px-8 gap-4">
      {cartItem.map((item) => {
        const product = products.find((i) => i.id === item.id);
        if (product) {
          return <Product {...product} key={item.id} />;
        }
      })}
    </div>
  );
};

export default Cart;
