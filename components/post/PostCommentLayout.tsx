import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import PostCommentTextArea from "./PostCommentTextArea";
import PostCommentList from "./PostCommentList";
import PostCommentCreateButton from "./PostCommentCreateButton";
import createComment from "../../util/api/createComment";
import getCommentsByPostId from "../../util/api/getCommentsByPostId";
import deleteComment from "../../util/api/deleteComment";
import { UserState } from "../../store/modules/userSlice";

const PostCommentLayout = () => {
  const { user } = useSelector(({ user }: { user: UserState }) => user);
  const router = useRouter();
  const { post_id } = router.query;
  const [comments, setComments] = useState([]);
  const commentRef = useRef(null);

  const handleDeleteComment = async (comment_id: number) => {
    const res = await deleteComment(comment_id);
    if (res) {
      getComments();
    }
  };

  const getComments = async () => {
    const res = await getCommentsByPostId(post_id);
    setComments(res.reverse());
  };

  useEffect(() => {
    getComments();
  }, [post_id]);

  const onCreateComment = async () => {
    const content = commentRef.current?.value;
    if (!content) {
      return alert("댓글을 입력해주세요.");
    }
    const { post_id } = router.query;
    const { user_id } = user;
    await createComment({ post_id: Number(post_id), content, user_id });
    getComments();
    commentRef.current?.value = "";
  };

  return (
    <>
      <CommentHeader>{comments.length}개의 댓글</CommentHeader>
      {user && (
        <InputContainer>
          <PostCommentTextArea myRef={commentRef} defaultValue="" />
          <PostCommentCreateButton onClick={onCreateComment} />
        </InputContainer>
      )}
      <PostCommentList commentList={comments} handleDeleteComment={handleDeleteComment} />
    </>
  );
};

const CommentHeader = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-top: 8rem;
  margin-bottom: 1rem;
`;
const InputContainer = styled.div`
  width: 100%;
`;
export default PostCommentLayout;
