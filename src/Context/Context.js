import { useState, useContext, createContext } from "react";
import all_product from "../Data/all_product";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(all_product);

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
