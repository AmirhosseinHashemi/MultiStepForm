import FormLevel from "./FormLevel";
import Main from "./Main";

function Layout({ children }) {
  return (
    <div className="mx-auto max-w-[375px]">
      <FormLevel />
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;
