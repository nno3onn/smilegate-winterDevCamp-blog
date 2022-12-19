import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import SignModal from "../modal/sign";
import isAdmin from "../../util/api/isAdmin";
import getIsAdminByUserId from "../../util/getIsAdminByUserId";

const Nav = () => {
  const router = useRouter();
  const bgColor = router.pathname === "/" ? "#f8f9fa" : "white";
  const [isSignModal, setIsSignModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    router.reload();
  };

  const getIsAdmin = async (user_id: number) => {
    const res = await getIsAdminByUserId(user_id);
    if (res === 1) setAdmin(true);
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setIsLogin(true);

      const { user_id } = JSON.parse(userInfo);
      getIsAdmin(user_id);
    }
  }, []);

  return (
    <NavContainer bgColor={bgColor}>
      {isSignModal && <SignModal handleCloseModal={() => setIsSignModal(false)} />}
      <Link href="/">nav</Link>
      <div>
        {admin && (
          <PostBtn>
            <Link href="/write">새 글 작성</Link>
          </PostBtn>
        )}
        {isLogin ? <LoginBtn onClick={() => handleLogout()}>로그아웃</LoginBtn> : <LoginBtn onClick={() => setIsSignModal(true)}>로그인</LoginBtn>}
      </div>
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
  background-color: ${({ bgColor }) => bgColor};
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
  /* width: 80px; */
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
