"use client";
import { toast } from "react-toastify";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function AddToCart({ title }: { title: string }) {
  const notify = () => toast(`Product ${title} added to cart!`);

  const cart = useContext(CartContext);
  if (!cart) {
    return null;
  }
  const { addProduct } = cart;

  return (
    <>
      <button
        className={styles.productButton}
        onClick={() => {
          addProduct({ title });
          notify();
        }}
      >
        Add to cart
        <ShoppingCart size={12} />
      </button>
    </>
  );
}
