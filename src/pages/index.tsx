import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import AnimatedImageSVG from "@/components/AnimatedImageSVG";
import ThemeToogle from "@/components/ThemeToggle";

export default function WelcomePage() {
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

      <section className="h-screen grid grid-cols-12">
        <div className="pt-6 col-start-11">
          <ThemeToogle />
        </div>
        <div className="col-span-12 flex flex-col items-center gap-5">
          <AnimatedImageSVG width={400} height={400} />
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 3.9,
              },
            }}
          >
            <Link href="/home">
              <button className="bg-[#0D4373] dark:bg-[#7AB9F0] text-white rounded-sm py-1 px-5">
                Enter
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
