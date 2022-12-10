import { useState } from "react";
import styled from "styled-components";
import Modal from "..";
import LeftBlock from "./leftBlock";
import RightBlock from "./rightBlock";

const SignModal = ({ handleCloseModal }) => {
  return (
    <Modal>
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
