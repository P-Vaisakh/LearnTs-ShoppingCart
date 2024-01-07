import React from "react";
import { ProductItem } from "../Pages/Store";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const Product: React.FC<ProductItem
> = ({
  title,
  price,
  image,
  id,
}) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  return (
    <div
      className="flex 
     bg-gray-100 px-4 py-3 self-stretch rounded-md  flex-col justify-around"
    >
      <img src={image} alt="" className="rounded-md" />
      <div className="flex justify-between items-center gap-2">
        <h3 className="line-clamp-2 text-sm mt-2 font-bold ">{title}</h3>
        <h3>${price}</h3>
      </div>
      {getItemQuantity(id) === 0 ? (
        <button
          className="bg-blue-500 px-2 py-1 rounded-md text-white text-sm mt-3"
          onClick={() => increaseCartQuantity(id)}
        >
          Add to cart
        </button>
      ) : (
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mt-3 ">
            <button
              className="bg-blue-500 px-2 py-1 rounded-md text-white text-sm"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <p className="text-sm">{getItemQuantity(id)} item in cart</p>
            <button
              className="bg-blue-500 px-2 py-1 rounded-md text-white text-sm"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
          <button
            className="mt-2 rounded-md px-4 py-2 bg-red-700 text-white text-sm"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
