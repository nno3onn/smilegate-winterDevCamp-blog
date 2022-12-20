import styled from "styled-components";

const TextButton = ({ text, onClick }) => {
  return <TextButtonContainer onClick={onClick}>{text}</TextButtonContainer>;
};

const TextButtonContainer = styled.span`
  color: #868e96;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export default TextButton;
