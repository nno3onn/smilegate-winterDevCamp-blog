import styled from "styled-components";

const SignButton = ({ text, onClick }: { text: string; onClick: any }) => <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;

const ButtonContainer = styled.button`
  background: #12b886;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 2px;
  width: 6rem;
  height: 100%;
  word-break: keep-all;
  cursor: pointer;
`;

export default SignButton;
