import styled from "styled-components";
import { ButtonContainer } from ".";

const WhiteButton = ({ text, onClick }) => <WhiteButtonContainer onClick={onClick}>{text}</WhiteButtonContainer>;

const WhiteButtonContainer = styled(ButtonContainer)`
  background-color: white;
  color: #12b886;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export default WhiteButton;
