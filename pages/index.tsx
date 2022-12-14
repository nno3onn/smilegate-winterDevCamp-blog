import type { NextPage } from "next";
import styled from "styled-components";
import Helmet from "../components/Helmet";
import NavLayout from "../components/nav/NavLayout";
import titleConfigs from "../configs/title";
import MainPage from "../containers/MainPage";

const Home: NextPage = () => {
  return (
    <>
      <Helmet title={titleConfigs.mainTitle} />
      <Container>
        <NavLayout />
        <MainPage />
      </Container>
    </>
  );
};
const Container = styled.div`
  background-color: #f8f9fa;
`;

export default Home;
