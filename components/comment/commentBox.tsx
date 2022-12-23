import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CommentTextArea from "./CommentTextArea";
import CommentUpdateButton from "./CommentUpdateButton";
import getUserNameByUserId from "../../util/api/getUserNameByUserId";
import updateComment from "../../util/api/updateComment";
import getYYYYMMDD from "../../util/getYYYYMMDD";
import DeleteModal from "../common/DeleteModal";
import TextButton from "../common/TextButton";
import { UserState } from "../../store/modules/userSlice";

const CommentBox = ({ data, handleDeleteComment }) => {
  const { user_id, created_at, content, comment_id } = data;
  const user = useSelector(({ user }: { user: UserState }) => user);
  const [username, setUsername] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState(content);
  const commentRef = useRef(null);

  const getUserName = async () => {
    const name = await getUserNameByUserId(user_id);
    setUsername(name);
  };

  const handleDelete = () => {
    setDeleteModal(false);
    handleDeleteComment(comment_id);
  };

  const handleUpdateComment = async () => {
    await updateComment({
      content: commentRef.current?.value,
      comment_id,
    });
    setComment(commentRef.current?.value);
    setIsEditing(false);
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <>
      {deleteModal && <DeleteModal handleCancel={() => setDeleteModal(false)} handleDeleteComment={() => handleDelete()} />}
      <CommentContainer>
        <HeaderWrapper>
          <LeftWrapper>
            <ImageWrapper />
            <InfoWrapper>
              <IDWrapper>{username}</IDWrapper>
              <DateWrapper>{getYYYYMMDD(created_at)}</DateWrapper>
            </InfoWrapper>
          </LeftWrapper>
          <RightWrapper>
            {user?.user_id === user_id && !isEditing && <TextButton text="수정" onClick={() => setIsEditing(true)} />}
            {(user?.isAdmin || user?.user_id === user_id) && <TextButton text="삭제" onClick={() => setDeleteModal(true)} />}
          </RightWrapper>
        </HeaderWrapper>
        {isEditing ? (
          <>
            <CommentTextArea myRef={commentRef} defaultValue={content} />
            <CommentUpdateButton handleCancel={() => setIsEditing(false)} handleUpdate={() => handleUpdateComment()} />
          </>
        ) : (
          <ContentWrapper>{comment}</ContentWrapper>
        )}
      </CommentContainer>
    </>
  );
};

const CommentContainer = styled.div`
  border-bottom: 1px solid #f1f3f5;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  &:last-child {
    border-bottom: none;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const ImageWrapper = styled.div`
  width: 3.375rem;
  height: 3.375rem;
  display: block;
  border-radius: 50%;
  object-fit: cover;
  background-image: url("/default.png");
  background-position: center;
  background-size: cover;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  line-height: 1;
`;
const IDWrapper = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
const DateWrapper = styled.div`
  line-height: 1;
  color: #868e96;
  margin-top: 0.5rem;
`;
const ContentWrapper = styled.pre`
  margin-top: 1.5rem;
  /* margin-bottom: 1.5rem; */
  font-size: 1.125rem;
  color: #212529;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export default CommentBox;
