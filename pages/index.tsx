import styled from "styled-components";
import MainPage from "../container/MainPage";

export default function Home() {
  return (
    <Container>
      <MainPage />
    </Container>
  );
}
const Container = styled.div`
  background-color: #f8f9fa;
`;
