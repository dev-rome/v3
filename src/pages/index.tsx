import Head from "next/head";
import WelcomePage from "@/components/WelcomePage";

export default function Welcome() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charSet="UTF-8" />
        <meta name="language" content="english" />
        <meta name="robots" content="index" /> 
        <meta
          name="description"
          content="Welcome to Jerome Haynes' portfolio website. Jerome is a Frontend/Software Engineer with expertise in web development."
        />
        <meta name="author" content="Jerome Haynes" />

        <meta
          property="og:title"
          content="Jerome Haynes - Frontend/Software Engineer"
        />
        <meta
          property="og:description"
          content="Welcome to Jerome Haynes' portfolio website. Jerome is a Frontend/Software Engineer with expertise in web development."
        />
        <meta property="og:url" content="https://jeromehaynes.com/" />
        <meta property="og:type" content="website" />
        <title>Jerome Haynes - Frontend/Software Engineer</title>
      </Head>

      <WelcomePage />
    </>
  );
}
