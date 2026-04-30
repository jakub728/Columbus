import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image src="/next.svg" alt="Next Logo" width={120} height={40} />
        <div className={styles.headerCart}>
          <ShoppingCart className={styles.headerCartIcon} />
          <p className={styles.headerCartState}>0</p>
        </div>
      </div>
    </header>
  );
}
