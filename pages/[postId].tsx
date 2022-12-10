import styled from "styled-components";
import PostPage from "../container/PostPage";

const Post = () => {
  return (
    <Container>
      <PostPage />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Post;
