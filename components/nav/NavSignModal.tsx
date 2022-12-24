import styled from "styled-components";
import DefaultModal from "../common/DefaultModal";
import NavSignModalLeftBlock from "./NavSignModalLeftBlock";
import NavSignModalRightBlock from "./NavSignModalRightBlock";

const NavSignModal = ({ handleCloseModal }: any) => {
  return (
    <DefaultModal width="600px" height="500px">
      <SignContainer>
        <NavSignModalLeftBlock />
        <NavSignModalRightBlock handleCloseModal={handleCloseModal} />
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
