import NavLayout from "./nav/NavLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavLayout />
      {children}
    </>
  );
};

export default Layout;
