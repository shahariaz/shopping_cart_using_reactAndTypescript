import { useContext, createContext, ReactNode, useState } from "react";

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
type CartItem = {
  id: number;
  quantity: number;
};
//create context
const ShoppingCartContext = createContext({} as ShoppingCartContxt);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartItem) {
  const [cartItems, setCartItems] = useState<CartItem[]>({});
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
