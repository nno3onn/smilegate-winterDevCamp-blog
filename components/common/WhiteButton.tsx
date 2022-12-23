import styled from "styled-components";
import { ButtonContainer } from "./DefaultButton";

const WhiteButton = ({ text, onClick, backgroundColor = "white" }: { text: string; onClick: any; backgroundColor?: string }) => (
  <WhiteButtonContainer onClick={onClick} backgroundColor={backgroundColor}>
    {text}
  </WhiteButtonContainer>
);

const WhiteButtonContainer = styled(ButtonContainer)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #12b886;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export default WhiteButton;
