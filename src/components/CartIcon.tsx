"use client";
import styles from "../styles/Home.module.css";
import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

export default function Cart() {
  const [showDelete, setShowDelete] = useState(false);

  const cart = useContext(CartContext);
  if (!cart) {
    return null;
  }
  const { count, emptyCart } = cart;

  return (
    <div
      className={styles.cart}
      onMouseEnter={() => {
        setShowDelete(true);
      }}
      onMouseLeave={() => {
        setShowDelete(false);
      }}
    >
      <ShoppingCart className={styles.cartIcon} />
      {count > 0 && (
        <>
          <p className={styles.cartState}>{count}</p>
          {showDelete && (
            <div className={styles.emptyCart}>
              <button onClick={emptyCart}>Empty cart</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
