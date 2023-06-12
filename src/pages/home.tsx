import Head from "next/head";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jerome Haynes</title>
        <meta
          name="description"
          content="Passionate frontend/software engineer leveraging the web to connect people, create amazing experiences, and turn ideas into reality. Explore my portfolio and let's achieve your goals together."
        />
        <meta name="author" content="Jerome Haynes" />

        <meta property="og:title" content="Jerome Haynes" />
        <meta
          property="og:description"
          content="Passionate frontend/software engineer leveraging the web to connect people, create amazing experiences, and turn ideas into reality. Explore my portfolio and let's achieve your goals together."
        />
        <meta property="og:url" content="https://jeromehaynes.com/" />
        <meta property="og:type" content="website" />
        <title>Jerome Haynes</title>
      </Head>
      <HomePage />
    </>
  );
}
