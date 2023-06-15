import Head from "next/head";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charSet="UTF-8" />
        <meta name="language" content="english" />
        <meta name="robots" content="index, follow" /> 
        <meta
          name="description"
          content="Passionate Frontend/Software Engineer based in New York, leveraging the web to connect people, create amazing experiences, and turn ideas into reality. Explore my portfolio and let's achieve your goals together."
        />
        <meta name="author" content="Jerome Haynes" />

        <meta property="og:title" content="Jerome Haynes" />
        <meta
          property="og:description"
          content="Passionate Frontend/Software Engineer based in New York, leveraging the web to connect people, create amazing experiences, and turn ideas into reality. Explore my portfolio and let's achieve your goals together."
        />
        <meta property="og:url" content="https://jeromehaynes.com/home" />
        <meta property="og:type" content="website" />
        <title>Jerome Haynes - Frontend/Software Engineer</title>
      </Head>
      <HomePage />
    </>
  );
}
