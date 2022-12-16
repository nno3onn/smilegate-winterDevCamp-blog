import styled from "styled-components";

const SignButton = ({ text, onClick }) => <InputBtn onClick={onClick}>{text}</InputBtn>;

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
  height: 100%;
  word-break: keep-all;
  cursor: pointer;
`;

export default SignButton;
