import styled from "styled-components";
import Nav from "../components/nav";
import PostPage from "../container/PostPage";

const Post = () => {
  return (
    <Container>
      <Nav />
      <PostPage />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Post;
