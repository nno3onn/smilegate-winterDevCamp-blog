import { useState } from "react";
import styled from "styled-components";
import { FaBlackTie, FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { UserState } from "../../store/modules/userSlice";
import getPostLike from "../../util/api/getPostLike";
import getIsLike from "../../util/api/getIsLike";
import cancelPostLike from "../../util/api/cancelPostLike";
import addPostLike from "../../util/api/addPostLike";

const PostLike = () => {
  const router = useRouter();
  const { user } = useSelector(({ user }: { user: UserState }) => user);
  const post_id = Number(router.query.post_id);
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const handleClick = async () => {
    if (!user) {
      return alert("로그인을 해주세요.");
    }
    setIsLike(!isLike);
    setLike(like + (isLike ? -1 : 1));

    if (isLike) {
      await cancelPostLike({ post_id, user_id: user.user_id });
    } else {
      await addPostLike({ post_id, user_id: user.user_id });
    }
  };

  const getLikeNum = async () => {
    const res = await getPostLike(post_id);
    setLike(res);
  };

  const getIsLikePost = async () => {
    const res = await getIsLike({ post_id, user_id: user.user_id });
    setIsLike(res);
  };

  useEffect(() => {
    getLikeNum();
    if (user) {
      getIsLikePost();
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <LikeButton onClick={handleClick} isLike={isLike}>
          {isLike ? <FaHeart /> : <FaRegHeart />}
        </LikeButton>
        <Counter>{like}</Counter>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 112px;
`;
const Wrapper = styled.div`
  position: relative;
  left: -120px;
  width: 4rem;
  background: #f8f9fa;
  border: 1px solid #f1f3f5;
  border-radius: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LikeButton = styled.div<{ isLike: boolean }>`
  height: 3rem;
  width: 3rem;
  border: 1px solid #dee2e6;
  background-color: ${({ isLike }) => (isLike ? "#20c997" : "white")};
  color: ${({ isLike }) => (isLike ? "white" : "#868e96")};
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    border-color: black;
    color: black;
  }
`;
const Counter = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #495057;
  line-height: 1;
  font-size: 0.75rem;
  font-weight: bold;
`;

export default PostLike;
