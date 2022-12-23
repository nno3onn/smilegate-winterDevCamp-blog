import styled from "styled-components";
import DefaultModal from "../common/DefaultModal";
import NavSignLeftBlock from "./NavSignLeftBlock";
import NavSignRightBlock from "./NavSignRightBlock";

const NavSignModal = ({ handleCloseModal }) => {
  return (
    <DefaultModal width="600px" height="500px">
      <SignContainer>
        <NavSignLeftBlock />
        <NavSignRightBlock handleCloseModal={handleCloseModal} />
      </SignContainer>
    </DefaultModal>
  );
};

const SignContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default NavSignModal;
