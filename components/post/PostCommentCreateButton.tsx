import { MouseEventHandler } from "react";
import styled from "styled-components";
import DefaultButton from "../common/DefaultButton";

const CommentCreateButton = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <BtnWrapper>
      <DefaultButton text="λκΈ μμ±" onClick={onClick} />
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default CommentCreateButton;
