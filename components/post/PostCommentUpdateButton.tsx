import styled from "styled-components";
import DefaultButton from "../common/DefaultButton";
import WhiteButton from "../common/WhiteButton";

const PostCommentUpdateButton = ({ handleCancel, handleUpdate }) => {
  return (
    <BtnWrapper>
      <WhiteButton text="취소" onClick={handleCancel} />
      <DefaultButton text="댓글 수정" onClick={handleUpdate} />
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export default PostCommentUpdateButton;
