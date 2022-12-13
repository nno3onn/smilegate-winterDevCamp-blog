import styled from "styled-components";
import DefaultButton from "../button";
import CommentTextArea from "../textarea/comment";

const CommentInput = () => {
  return (
    <InputContainer>
      <CommentTextArea placeholder="댓글을 작성하세요" />
      <BtnWrapper>
        <DefaultButton text="댓글 작성" />
      </BtnWrapper>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default CommentInput;
