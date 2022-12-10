import { useState } from "react";
import styled from "styled-components";
import Inputs from "./Inputs";

const RightBlock = ({ handleCloseModal }) => {
  const [text, setText] = useState("로그인");

  return (
    <Container>
      <ExitWrapper onClick={handleCloseModal}>
        <div>X</div>
      </ExitWrapper>
      <BlockContent>
        <UpperWrapper>
          <HeadText>{text}</HeadText>
          <SideText>이메일로 {text}</SideText>
          <Inputs text={text} />
        </UpperWrapper>
        <Foot onClick={() => setText(text === "로그인" ? "회원가입" : "로그인")}>
          {text === "로그인" ? "아직 회원이 아니신가요?" : "계정이 이미 있으신가요?"}
          <span> {text === "로그인" ? "회원가입" : "로그인"}</span>
        </Foot>
      </BlockContent>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
const ExitWrapper = styled.div`
  margin-bottom: 2.25rem;
  display: flex;
  justify-content: flex-end;
  div {
    cursor: pointer;
  }
`;
const BlockContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UpperWrapper = styled.div``;
const HeadText = styled.h2`
  color: #212529;
  font-size: 1.3125rem;
`;
const SideText = styled.h4`
  color: #868e96;
  margin: 16px 0;
`;
const Foot = styled.div`
  display: flex;
  justify-content: flex-end;
  span {
    margin-left: 10px;
    color: #12b886;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default RightBlock;
