import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CommentList from "./CommentList";
import CommentTextArea from "./CommentTextArea";
import CommentCreateButton from "./CommentCreateButton";
import createComment from "../../util/api/createComment";
import getCommentsByPostId from "../../util/api/getCommentsByPostId";
import deleteComment from "../../util/api/deleteComment";
import { UserType } from "../../store/modules/user";

const Comment = () => {
  const user = useSelector(({ user }: { user: UserType }) => user);
  const router = useRouter();
  const { post_id } = router.query;
  const [commentList, setCommentList] = useState([]);
  const commentRef = useRef(null);

  const handleDeleteComment = async (comment_id: number) => {
    console.log(comment_id);
    const res = await deleteComment(comment_id);
    if (res) {
      getComments();
    }
  };

  const getComments = async () => {
    const res = await getCommentsByPostId(post_id);
    setCommentList(res.reverse());
  };

  useEffect(() => {
    getComments();
  }, []);

  const onCreateComment = async () => {
    const content = commentRef.current?.value;
    if (!content) {
      return alert("댓글을 입력해주세요.");
    }
    const { post_id } = router.query;
    const { user_id } = user;
    await createComment({ post_id: Number(post_id), content, user_id });
    getComments();
    commentRef.current.value = "";
  };

  return (
    <>
      <CommentHeader>{commentList.length}개의 댓글</CommentHeader>
      {user && (
        <InputContainer>
          <CommentTextArea myRef={commentRef} defaultValue="" />
          <CommentCreateButton onClick={onCreateComment} />
        </InputContainer>
      )}
      <CommentList commentList={commentList} handleDeleteComment={handleDeleteComment} />
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
export default Comment;
