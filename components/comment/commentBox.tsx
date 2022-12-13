import { useState } from "react";
import styled from "styled-components";
import getYYYYMMDD from "../../util/getYYYYMMDD";
import CommentDeleteModal from "../modal/comment/delete";

const CommentBox = ({ data }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { profileImg, userId, date, content } = data;

  return (
    <>
      {deleteModal && <CommentDeleteModal onClick={() => setDeleteModal(false)} />}
      <CommentContainer>
        <HeaderWrapper>
          <LeftWrapper>
            <ImageWrapper src={profileImg} alt="comment-user-thumbnail" />
            <InfoWrapper>
              <IDWrapper>{userId}</IDWrapper>
              <DateWrapper>{getYYYYMMDD(date)}</DateWrapper>
            </InfoWrapper>
          </LeftWrapper>
          <RightWrapper>
            <CommentBtn>수정</CommentBtn>
            <CommentBtn onClick={() => setDeleteModal(true)} style={{ marginLeft: "0.5rem" }}>
              삭제
            </CommentBtn>
          </RightWrapper>
        </HeaderWrapper>
        <ContentWrapper> {content}</ContentWrapper>
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
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageWrapper = styled.img`
  width: 3.375rem;
  height: 3.375rem;
  display: block;
  border-radius: 50%;
  object-fit: cover;
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
const CommentBtn = styled.span`
  color: #868e96;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;
const ContentWrapper = styled.div`
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
