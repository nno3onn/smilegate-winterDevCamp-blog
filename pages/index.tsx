import styled from "styled-components";
import Nav from "../components/nav";
import MainPage from "../containers/MainPage";

export default function Home() {
  return (
    <Container>
      <Nav />
      <MainPage />
    </Container>
  );
}
const Container = styled.div`
  background-color: #f8f9fa;
`;
