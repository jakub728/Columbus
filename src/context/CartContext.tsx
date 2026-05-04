"use client";
import { createContext, useState, useEffect } from "react";

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

  useEffect(() => {
    const savedCount = localStorage.getItem("cart_count");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart_count", count.toString());
  }, [count]);

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
