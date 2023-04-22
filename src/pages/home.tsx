import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import MobileMenu from "@/components/navbar/MobileMenu";
import ThemeToogle from "@/components/ThemeToggle";

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
      </Layout>
    </motion.div>
  );
}

export default Home;
