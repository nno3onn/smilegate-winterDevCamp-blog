import Nav from "./nav/Nav";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
