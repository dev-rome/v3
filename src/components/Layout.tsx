import ThemeToogle from "./ThemeToggle";
import NavMenu from "./navbar/NavMenu";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section className="grid grid-cols-12">
      <div className="hidden md:block col-span-1">
        <NavMenu />
      </div>
      <div className="col-start-1 col-span-12 md:col-start-2 pt-20 px-4 md:pl-24">
        {children}
      </div>
    </section>
  );
}

export default Layout;
