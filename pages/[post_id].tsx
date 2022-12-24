import styled from "styled-components";
import Helmet from "../components/Helmet";
import NavLayout from "../components/nav/NavLayout";
import titleConfigs from "../configs/title";
import PostPage from "../containers/PostPage";

const Post = () => {
  return (
    <>
      <Helmet title={titleConfigs.postTitle} />
      <PostContainer>
        <NavLayout />
        <PostPage />
      </PostContainer>
    </>
  );
};

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Post;
