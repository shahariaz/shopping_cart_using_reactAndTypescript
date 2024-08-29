import { useContext, createContext, ReactNode } from "react";

//type
type ShoppingCartItem = {
  children: ReactNode;
};
type ShoppingCartContxt = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
};

//create context
const ShoppingCartContext = createContext({} as ShoppingCartContxt);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartItem) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
