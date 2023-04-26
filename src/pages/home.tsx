import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ThemeToogle from "@/components/ThemeToggle";
import MobileMenu from "@/components/navbar/MobileMenu";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Portfolio from "@/components/portfolio/Portfolio";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <Layout>
      <ThemeToogle />
        <MobileMenu />
        <Hero />
        <About />
        <Portfolio />
      </Layout>
    </motion.div>
  );
}

export default Home;
