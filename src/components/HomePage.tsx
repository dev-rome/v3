import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import MobileMenu from "@/components/navbar/MobileMenu";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
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
        <MobileMenu />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </Layout>
    </motion.div>
  );
}
