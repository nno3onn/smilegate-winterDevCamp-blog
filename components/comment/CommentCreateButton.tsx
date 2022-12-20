import styled from "styled-components";
import DefaultButton from "../common/DefaultButton";

const CommentCreateButton = ({ onClick }) => {
  return (
    <BtnWrapper>
      <DefaultButton text="댓글 작성" onClick={onClick} />
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default CommentCreateButton;
