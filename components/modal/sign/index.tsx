import styled from "styled-components";
import Modal from "../../common/DefaultModal";
import LeftBlock from "./leftBlock";
import RightBlock from "./rightBlock";

const SignModal = ({ handleCloseModal }) => {
  return (
    <Modal width="606px" height="500px">
      <SignContainer>
        <LeftBlock />
        <RightBlock handleCloseModal={handleCloseModal} />
      </SignContainer>
    </Modal>
  );
};

const SignContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export default SignModal;
