import styled from "styled-components";
import Comment from "../components/comment/CommentLayout";
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
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
export default PostPage;
