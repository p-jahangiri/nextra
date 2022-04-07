import type { NextPage } from "next";
import Head from "next/head";
import { Index } from "../components/Index";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Parviz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link href="https://v1.fontapi.ir/css/Vazir" rel="stylesheet" />
      </Head>
      <Index />
    </div>
  );
};

export default Home;
