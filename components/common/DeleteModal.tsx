import styled from "styled-components";
import Modal from "./DefaultModal";
import DefaultButton from "../common/DefaultButton";
import WhiteButton from "../common/WhiteButton";

const DeleteModal = ({ handleCancel, handleDeleteComment }) => (
  <Modal width="25rem" height="">
    <DeleteContainer>
      <Title>댓글 삭제</Title>
      <Message>댓글을 정말로 삭제하시겠습니까?</Message>
      <ButtonContainer>
        <WhiteButton text="취소" onClick={handleCancel} />
        <DefaultButton text="확인" onClick={handleDeleteComment} />
      </ButtonContainer>
    </DeleteContainer>
  </Modal>
);

const DeleteContainer = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1.5rem;
`;
const Title = styled.h3`
  margin: 0px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
`;
const Message = styled.div`
  line-height: 1.5;
  font-size: 1rem;
  color: #495057;
  margin-top: 1rem;
  /* margin-bottom: 1rem; */
  white-space: pre-wrap;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 2rem;
  gap: 12px;
`;
const Button = styled.button``;

export default DeleteModal;
