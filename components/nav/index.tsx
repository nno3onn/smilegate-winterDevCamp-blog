import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import SignModal from "../modal/sign";

const Nav = () => {
  const router = useRouter();
  const backgroundColor = router.pathname === "/" ? "#f8f9fa" : "white";
  const [isSignModal, setIsSignModal] = useState(false);

  return (
    <NavContainer backgroundColor={backgroundColor}>
      {isSignModal && <SignModal handleCloseModal={() => setIsSignModal(false)} />}
      <div>nav</div>
      <LoginBtn onClick={() => setIsSignModal(true)}>로그인</LoginBtn>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const LoginBtn = styled.button`
  width: 80px;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  background-color: #212529;
  color: white;
  text-align: center;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  &:hover {
    background-color: #343a40;
  }
`;

export default Nav;
