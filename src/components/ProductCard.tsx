import Image from "next/image";
import { type Product } from "@/types/productType";
import styles from "@/styles/Home.module.css";
import { ToastContainer, toast } from "react-toastify";

export default function ProductCard({ data }: { data: Product }) {
  console.log(data.title, data.promotion);
  const notify = () => toast(`Product ${data.title} added to cart!`);

  return (
    <div className={styles.productCard}>
      <Image
        src={data.image.url}
        alt={data.image.altText}
        fill
        sizes="(max-width: 450px)"
        loading="eager"
        className={styles.productImage}
      />
      <div className={styles.productBrand}>
        <span>Brand:</span>
        <Image
          src={data.brandLogo}
          alt={data.brandName}
          width={75}
          height={25}
          loading="eager"
        />
      </div>
      <h2 className={styles.productTitle}>{data.title}</h2>

      <p className={styles.productDescription}>{data.description}</p>
      <section className={styles.productPriceSection}>
        {data.promotion?.percentage && (
          <p>${(data.price * (100 - data.promotion.percentage)) / 100}</p>
        )}
        {data.promotion ? (
          <p className={styles.productPriceDiscount}>${data.price}</p>
        ) : (
          <p className={styles.productPrice}>${data.price}</p>
        )}
      </section>
      <button
        className={styles.productButton}
        onClick={() => {
          notify();
        }}
      >
        Add to cart
      </button>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop
        pauseOnHover
      />
    </div>
  );
}
