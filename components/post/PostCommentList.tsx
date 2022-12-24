import { v4 } from "uuid";
import styled from "styled-components";
import PostCommentBox from "./PostCommentBox";

const PostCommentList = ({ commentList, handleDeleteComment }) => {
  return (
    <CommentContainer>
      {commentList.map((v) => (
        <PostCommentBox data={v} key={v4()} handleDeleteComment={handleDeleteComment} />
      ))}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 4rem;
`;

export default PostCommentList;
