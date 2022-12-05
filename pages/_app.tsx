import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}
