import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <ModalContainer>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(249, 249, 249, 0.85);
  animation: 0.25s ease 0s 1 normal forwards running cJoqxJ;
`;
const ModalWrapper = styled.div`
  width: 606px;
  height: 400px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running cptskd;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  display: flex;
`;

export default Modal;
