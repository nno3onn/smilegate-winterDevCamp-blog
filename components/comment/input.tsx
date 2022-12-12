import styled from "styled-components";

const CommentInput = () => {
  return (
    <InputContainer>
      <Input placeholder="댓글을 작성하세요" />
      <BtnWrapper>
        <CreateBtn>댓글 작성</CreateBtn>
      </BtnWrapper>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
`;
const Input = styled.textarea`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid #f1f3f5;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: #212529;
  line-height: 1.75;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CreateBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  outline: none;
  border: none;
  background: #12b886;
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
  cursor: pointer;
`;

export default CommentInput;
