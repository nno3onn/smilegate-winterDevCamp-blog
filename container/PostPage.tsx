import styled from "styled-components";
import Comment from "../components/comment";
import PostItems from "../components/post/items";

const PostPage = () => {
  return (
    <PostContainer>
      <PostItems />
      <Comment />
    </PostContainer>
  );
};

const PostContainer = styled.div`
  margin-top: 5.5rem;
  max-width: 768px;
  display: flex;
  flex-direction: column;
`;
export default PostPage;
