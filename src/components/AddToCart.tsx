"use client";
import {  toast } from "react-toastify";
import styles from "../styles/Home.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";

export default function AddToCart({ title }: { title: string }) {
  const notify = () => toast(`Product ${title} added to cart!`);

  const cart = useContext(CartContext);
  if (!cart) {
    return null;
  }
  const { addProduct, count } = cart;

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <button
        className={styles.productButton}
        onClick={() => {
          addProduct();
          notify();
        }}
      >
        Add to cart
      </button>

      
    </>
  );
}
