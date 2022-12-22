import type { NextPage } from "next";
import styled from "styled-components";
import Nav from "../components/nav/Nav";
import MainPage from "../containers/MainPage";

const Home: NextPage = () => {
  return (
    <Container>
      <Nav />
      <MainPage />
    </Container>
  );
};
const Container = styled.div`
  background-color: #f8f9fa;
`;

export default Home;
