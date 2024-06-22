import Footer from "./Footer";
import FormLevel from "./FormLevel";
import Main from "./Main";

function Layout({ children }) {
  return (
    <div className="mx-auto max-w-[375px] pb-24">
      <FormLevel />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
