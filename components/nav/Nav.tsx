import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import NavSignModal from "./NavSignModal";
import { useSelector, useDispatch } from "react-redux";
import { setInitialState, UserState } from "../../store/modules/userSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }: { user: UserState }) => user);
  const router = useRouter();
  const bgColor: string = router.pathname === "/" ? "#f8f9fa" : "white";
  const [isSignModal, setIsSignModal] = useState(false);

  const handleLogout = () => {
    dispatch(setInitialState());
  };

  return (
    <Container bgColor={bgColor}>
      {isSignModal && <NavSignModal handleCloseModal={() => setIsSignModal(false)} />}
      <Link href="/">blog Logo</Link>
      <div>
        {user?.isAdmin === 1 && (
          <PostBtn>
            <Link href="/write">새 글 작성</Link>
          </PostBtn>
        )}
        {user ? <LoginBtn onClick={() => handleLogout()}>로그아웃</LoginBtn> : <LoginBtn onClick={() => setIsSignModal(true)}>로그인</LoginBtn>}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
  position: sticky;
  width: 100%;
  height: 4rem;
  padding: 0 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  margin-left: 20px;
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
