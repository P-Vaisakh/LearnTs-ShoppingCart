import { useContext, useEffect } from "react";
import Product from "../Components/Product";
import { shoppingItem } from "../Context/ShoppingCartContext";

type Rating = {
  count: number;
  rate: number;
};

export type ProductItem = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

const Store = () => {
  const { products, fetchProducts } = useContext(shoppingItem);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 px-8 gap-4">
      {products.map((item) => (
        <Product {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Store;
