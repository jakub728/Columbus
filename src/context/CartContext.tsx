"use client";
import { createContext, useState, useEffect } from "react";
import { type CartProduct, type Cart } from "@/types/productType";

export const CartContext = createContext<Cart | undefined>(undefined);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setProducts(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  function addProduct(product: CartProduct) {
    setProducts((prev) => [...prev, product]);
  }
  function emptyCart() {
    setProducts([]);
  }

  return (
    <CartContext.Provider
      value={{ count: products.length, products, addProduct, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
