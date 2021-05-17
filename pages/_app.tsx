import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Confidential Project | CV@Chula (2020-2)</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
