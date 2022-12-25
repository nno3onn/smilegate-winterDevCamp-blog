import { FormEventHandler } from "react";
import styled from "styled-components";

const UploadFileButton = ({ onChange }: { onChange: FormEventHandler }) => {
  return (
    <UploadButtonContainer>
      <LabelContainer for="file">파일찾기</LabelContainer>
      <input type="file" id="file" accept="image/gif, image/jpeg, image/png" onChange={onChange} />
    </UploadButtonContainer>
  );
};

const UploadButtonContainer = styled.div`
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;
const LabelContainer = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  outline: none;
  border: none;
  background: white;
  color: #12b886;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export default UploadFileButton;
