import { v4 } from "uuid";
import styled from "styled-components";
import CommentBox from "./commentBox";

const CommentList = () => {
  const data = {
    profileImg: "https://velog.velcdn.com/profiles/ckdwns9121/thumbnails/1571020697.101.png",
    userId: "nno3onn",
    date: Date.now(),
    content: "잘 보고 갑니다.",
  };

  return (
    <CommentContainer>
      {new Array(10).fill(0).map((v) => (
        <CommentBox data={data} key={v4()} />
      ))}
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export default CommentList;
