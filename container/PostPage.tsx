import styled from "styled-components";
import getYYYYMMDD from "../util/getYYYYMMDD";

const PostPage = () => {
  return (
    <PostContainer>
      <Title>월드컵 생중계 보면서 개발자 모드 켜기</Title>
      <p>{getYYYYMMDD(Date.now())}</p>
      contents
    </PostContainer>
  );
};

const PostContainer = styled.div`
  margin-top: 5.5rem;
  max-width: 768px;
`;
const Title = styled.div`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: var(--text1);
  margin-bottom: 2rem;
  word-break: keep-all;
  transition: color 0.125s ease-in 0s;
`;
export default PostPage;
