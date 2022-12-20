import styled from "styled-components";
import Cards from "../components/main/Cards";

const MainPage = () => {
  return (
    <MainContainer>
      <Cards />
    </MainContainer>
  );
};

const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const MainContainer = styled.div`
  width: 132rem;
  min-height: calc(100vh - 4rem);
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1919)} {
    width: 88rem;
  }
  ${mediaQuery(1440)} {
    width: 66rem;
  }
  ${mediaQuery(1072)} {
    width: 44rem;
  }
`;

export default MainPage;
