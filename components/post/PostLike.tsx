import styled from "styled-components";

const PostLike = () => {
  return (
    <Container>
      <Wrapper>
        <LikeButton>like</LikeButton>
        <Counter>0</Counter>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 112px;
  /* left: 20px; */
  /* position: absolute;
  left: -7rem; */
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
  -webkit-box-align: center;
  align-items: center;
`;
const LikeButton = styled.div`
  height: 3rem;
  width: 3rem;
  border: 1px solid #dee2e6;
  background-color: white;
  border-radius: 1.5rem;
  cursor: pointer;
  &:hover {
    border-color: black;
  }
`;
const Counter = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default PostLike;
