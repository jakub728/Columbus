import Image from "next/image";
import { type Product } from "../types/productType";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import AddToCart from "./AddToCart";

export default function ProductCard({ data }: { data: Product }) {
  const [imgSrc, setImgSrc] = useState(data.image.url);

  return (
    <div className={styles.productCard}>
      <Image
        src={imgSrc}
        alt={data.image.altText}
        width={750}
        height={500}
        loading="eager"
        className={styles.productImage}
        onError={() => setImgSrc("/No_photo.webp")}
        unoptimized
      />

      <section className={styles.productDescriptionSection}>
        <h2 className={styles.productTitle}>{data.title}</h2>
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
        <p className={styles.productDescription}>{data.description}</p>
      </section>

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

      <AddToCart title={data.title} />
    </div>
  );
}
