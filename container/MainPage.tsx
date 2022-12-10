import styled from "styled-components";
import Cards from "../components/main/cards";

const MainPage = () => {
  return (
    <MainContainer>
      <Cards />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export default MainPage;
