import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { GetServerSideProps } from "next";
import { type Product, type ProductResponse } from "@/types/productType";

export const getServerSideProps: GetServerSideProps<
  ProductResponse
> = async () => {
  try {
    const res = await fetch(
      "https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.API_KEY || "",
        },
      },
    );

    if (!res.ok) throw new Error("Błąd pobierania");

    const products: ProductResponse = await res.json();
    const sortedProducts = products.products;

    return {
      props: { products: sortedProducts },
    };
  } catch (error) {
    console.error(error);
    return { props: { products: [] } };
  }
};

export default function Home({ products }: { products: Product[] }) {
  return (
    <>
      <Head>
        <title>Columbus products</title>
        <meta name="description" content="Product catalog for Columbus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/columbusglobal_logo.ico" />
      </Head>
      <div className={`${styles.page}`}>
        <Header />
        <main className={styles.main}>
          <h1>List of Products:</h1>
          <ul className={styles.productList}>
            {products.map((product) => (
              <li
                key={product.articleNumber}
                style={{ listStyle: "none", margin: "2rem" }}
              >
                <ProductCard data={product} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
