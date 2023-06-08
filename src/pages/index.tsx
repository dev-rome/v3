import { useState } from "react";

import Head from "next/head";
import WelcomePage from "@/components/WelcomePage";
import HomePage from "@/components/HomePage";

export default function Welcome() {
  const [homeView, setHomeView] = useState(true);

  const handleEnterClick = () => {
    setHomeView(!homeView);
  }

  return (
    <>
      <Head>
        <title>Jerome Haynes</title>
        <meta
          name="description"
          content="Hello and welcome to my portfolio website! As a frontend/software engineer, I'm passionate about the power of the web to connect people, solve problems, and create amazing experiences. With a thirst for knowledge, I'm always learning and experimenting with new technologies to stay ahead of the curve. Whether it's designing a responsive website or building a complex software application, I take pride in my ability to turn ideas into reality. Explore my portfolio to see some of my latest projects and get inspired by what's possible. Let's connect and discuss how we can work together to achieve your goals."
        />
        <meta name="author" content="Jerome Haynes" />
      </Head>

       {homeView ? (
        <WelcomePage onClick={handleEnterClick} />
      ) : (
        <HomePage />
      )}
    </>
  );
}
