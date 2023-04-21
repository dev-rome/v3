import Layout from "@/components/Layout";
import ThemeToogle from "@/components/ThemeToggle";
import MobileMenu from "@/components/navbar/MobileMenu";

function Home() {
  return (
    <>
      <Layout>
        <MobileMenu />
        <div>home</div>
      </Layout>
    </>
  );
}

export default Home;
