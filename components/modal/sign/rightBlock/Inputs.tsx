import styled from "styled-components";

const Inputs = ({ text }) => {
  return (
    <InputWrapper>
      <Input placeholder="이메일을 입력하세요." />
      <InputBtn>{text}</InputBtn>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  padding: 1rem;
  flex: 1;
  border: 1px solid #dee2e6;
  font-size: 1rem;
  color: #212529;
  &:focus-visible {
    border: 1px solid #12b886;
    outline: none;
  }
`;
const InputBtn = styled.button`
  background: #12b886;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 6rem;
  word-break: keep-all;
  cursor: pointer;
`;

export default Inputs;
