"use client";
import styles from "../styles/Home.module.css";
import { ShoppingBasket } from "lucide-react";
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
      onClick={() => {
        setShowDelete(!showDelete);
      }}
    >
      <ShoppingBasket className={styles.cartIcon} />
      {count > 0 && <p className={styles.cartState}>{count}</p>}
      {showDelete &&
        (count > 0 ? (
          <div className={styles.cartSlider}>
            {count > 1 ? (
              <p>You have {count} products in cart</p>
            ) : (
              <p>You have {count} product in cart</p>
            )}

            <button onClick={emptyCart} className={styles.emptyCartButton}>
              Empty cart
            </button>
          </div>
        ) : (
          <div className={styles.cartSlider}>
            <p>Cart is empty</p>
          </div>
        ))}
    </div>
  );
}
