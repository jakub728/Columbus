import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cart from "./CartIcon";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image
          src="/columbus_logo_blue.webp"
          alt="Columbus Logo"
          priority
          width={200}
          height={40}
        />
        <Cart />
      </div>
    </header>
  );
}
