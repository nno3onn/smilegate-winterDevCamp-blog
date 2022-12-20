import styled from "styled-components";

const NavSignLeftBlock = () => (
  <LeftContainer>
    <Image src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg" />
    <Text>환영합니다!</Text>
  </LeftContainer>
);

const LeftContainer = styled.div`
  width: 216px;
  height: 100%;
  padding: 24px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Text = styled.p`
  font-size: 1.75rem;
  text-align: center;
  font-weight: 600;
  color: #495057;
  margin-top: 1.5rem;
`;

export default NavSignLeftBlock;
