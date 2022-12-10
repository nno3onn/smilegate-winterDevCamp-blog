import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import SignModal from "../modal/sign";

const Nav = () => {
  const router = useRouter();
  const backgroundColor = router.pathname === "/" ? "#f8f9fa" : "white";
  const [isSignModal, setIsSignModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavContainer backgroundColor={backgroundColor}>
      {isSignModal && <SignModal handleCloseModal={() => setIsSignModal(false)} />}
      <Link href="/">nav</Link>
      {isLogin ? (
        <PostBtn>
          <Link href="/write">새 글 작성</Link>
        </PostBtn>
      ) : (
        <LoginBtn onClick={() => setIsSignModal(true)}>로그인</LoginBtn>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 4rem;
  padding: 0 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Btn = styled.button`
  font-size: 1rem;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  text-align: center;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;
const LoginBtn = styled(Btn)`
  width: 80px;
  background-color: #212529;
  color: white;
  &:hover {
    background-color: #343a40;
  }
`;
const PostBtn = styled(Btn)`
  width: 110px;
  border: 1px solid #212529;
  background-color: transparent;
  color: #212529;
  &:hover {
    background-color: #212529;
    color: white;
  }
`;

export default Nav;
