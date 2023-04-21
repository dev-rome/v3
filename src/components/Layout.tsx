import ThemeToogle from "./ThemeToggle";
import NavMenu from "./navbar/NavMenu";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <section className="grid grid-cols-12">
      <div className="hidden sm:block col-span-1">
        <NavMenu />
      </div>
      <div className="col-start-2 sm:col-start-4 col-span-8 pt-20">
        {children}
      </div>
      <div className="col-start-12 flex items-start pt-8">
        <ThemeToogle />
      </div>
    </section>
  );
}

export default Layout;
