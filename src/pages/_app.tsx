import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CartProvider from "@/context/CartContext";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop
        pauseOnHover
      />
    </CartProvider>
  );
}
