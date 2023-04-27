import { useState } from "react";
import Head from "next/head";
import Welcome from "@/components/Welcome";
import Home from "@/components/Home";



export default function WelcomePage() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnterClick = () => {
    setShowWelcome(false);
  };

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

      {showWelcome ? (
        <Welcome onEnterClick={handleEnterClick} />
      ) : (
       <Home />
      )}
    </>
  );
}
