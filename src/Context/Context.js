import { useState, useContext, createContext } from "react";
import all_product from "../Data/all_product";

export const AppContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(all_product);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const updateCartAmount = (newAmount, itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: newAmount };
    });
  };

  const cartSubtotal = () => {
    let subTotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = products.find((Product) => Product.id === Number(item));
        subTotal += cartItems[item] * itemPrice.new_price;
      }
    }
    return subTotal;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateCartAmount,
        cartSubtotal,
        getTotalCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
