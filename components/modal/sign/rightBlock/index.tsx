import { useRouter } from "next/router";
import { useState, useRef } from "react";
import styled from "styled-components";
import signIn from "../../../../util/api/signIn";
import signUp from "../../../../util/api/signUp";
import validateId from "../../../../util/validateId";
import SignInput from "./Inputs";
import SignButton from "./signButton";

const RightBlock = ({ handleCloseModal }: any) => {
  const router = useRouter();
  const [text, setText] = useState("로그인");
  const nameRef = useRef();
  const idRef = useRef();
  const passwordRef = useRef();

  const handleSign = async () => {
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;

    if (!id || !password) {
      return alert("아이디와 비밀번호를 입력해주세요.");
    }
    if (text === "회원가입" && !name) {
      return alert("닉네임을 입력해주세요.");
    }
    if (!validateId(id)) {
      return alert("아이디는 영문자로 시작하는 영문자 또는 숫자 6~20자리로 입력해주세요.");
    }

    if (text === "로그인") {
      const res = await signIn({ id, password });
      if (res) {
        localStorage.setItem("userInfo", JSON.stringify(res));
        handleCloseModal();
        router.reload();
      }
    } else {
      const res = await signUp({ id, password, name });
      if (res) {
        alert("회원가입이 완료되었습니다.");
        setText("로그인");
        idRef.current.value = "";
        passwordRef.current.value = "";
      }
    }
  };

  return (
    <RightContainer>
      <ExitWrapper onClick={handleCloseModal}>
        <div>X</div>
      </ExitWrapper>
      <BlockContent>
        <UpperWrapper>
          <HeadText>{text}</HeadText>
          <SideText>아이디로 {text}</SideText>
          <InputWrapper>
            <SignInput myRef={idRef} placeholder="아이디을 입력하세요." />
          </InputWrapper>
          <InputWrapper>
            <SignInput myRef={passwordRef} type="password" placeholder="비밀번호를 입력하세요." />
          </InputWrapper>
          {text === "회원가입" && (
            <InputWrapper>
              <SignInput myRef={nameRef} placeholder="닉네임을 입력하세요." />
            </InputWrapper>
          )}
          <ButtonWrapper>
            <SignButton text={text} onClick={handleSign} />
          </ButtonWrapper>
        </UpperWrapper>
        <Foot onClick={() => setText(text === "로그인" ? "회원가입" : "로그인")}>
          {text === "로그인" ? "아직 회원이 아니신가요?" : "계정이 이미 있으신가요?"}
          <span> {text === "로그인" ? "회원가입" : "로그인"}</span>
        </Foot>
      </BlockContent>
    </RightContainer>
  );
};

const RightContainer = styled.div`
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
const InputWrapper = styled.div`
  height: 48px;
  margin-bottom: 10px;
`;
const ButtonWrapper = styled.div`
  height: 48px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
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
