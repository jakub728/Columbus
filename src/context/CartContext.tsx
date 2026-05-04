"use client";
import { createContext, useState } from "react";

export interface Cart {
  count: number;
  addProduct: () => void;
  emptyCart: () => void;
}

export const CartContext = createContext<Cart | undefined>(undefined);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState<number>(0);

  function addProduct() {
    setCount(count + 1);
  }
  function emptyCart() {
    setCount(0);
  }

  return (
    <CartContext.Provider value={{ count, addProduct, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
}
