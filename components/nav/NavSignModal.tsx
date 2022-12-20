import styled from "styled-components";
import Modal from "../common/DefaultModal";
import NavSignLeftBlock from "./NavSignLeftBlock";
import NavSignRightBlock from "./NavSignRightBlock";

const NavSignModal = ({ handleCloseModal }) => {
  return (
    <Modal width="606px" height="500px">
      <SignContainer>
        <NavSignLeftBlock />
        <NavSignRightBlock handleCloseModal={handleCloseModal} />
      </SignContainer>
    </Modal>
  );
};

const SignContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default NavSignModal;
