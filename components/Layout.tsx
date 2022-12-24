import NavLayout from "./nav/NavLayout";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <NavLayout />
      {children}
    </>
  );
};

export default Layout;
