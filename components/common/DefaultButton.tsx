import styled from "styled-components";

const DefaultButton = ({ text, onClick }) => <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;

export const ButtonContainer = styled.button`
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
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #20c997;
  }
`;

export default DefaultButton;
