import styled from "styled-components";
import Nav from "../components/nav";
import PostPage from "../containers/PostPage";

const Post = () => {
  return (
    <PostContainer>
      <Nav />
      <PostPage />
    </PostContainer>
  );
};

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Post;
