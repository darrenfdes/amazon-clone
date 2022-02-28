import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>amazon-2.0</title>
        <meta
          name="description"
          content="amazon clone with nextjs and tailwindcss"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
