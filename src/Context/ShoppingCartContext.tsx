import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductItem } from "../Pages/Store";
type Props = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItem: CartItem[];
  cartQuantity: number;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingItem={
  products:ProductItem[];
  fetchProducts:any
}

const shoppingCartContext = createContext({} as ShoppingCartContext);
export const shoppingItem = createContext({} as ShoppingItem);

export const useShoppingCart = () => {
  return useContext(shoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: Props) => {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);

  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartItem?.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItem((currentItems) => {
      if (currentItems?.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          item.id === id;
          return { ...item, quantity: item.quantity + 1 };
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItem((currentItems) => {
      if (currentItems?.find((item) => item.id === id) == null) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItem((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const fetchProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  };

  

  return (
    <shoppingItem.Provider value={{products,fetchProducts}}>
      <shoppingCartContext.Provider
        value={{
          cartQuantity,
          cartItem,
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
        }}
      >
        {children}
      </shoppingCartContext.Provider>
    </shoppingItem.Provider>
  );
};

export default ShoppingCartProvider;
