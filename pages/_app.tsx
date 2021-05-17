import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Confidential | CV@Chula (2020-2)</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
