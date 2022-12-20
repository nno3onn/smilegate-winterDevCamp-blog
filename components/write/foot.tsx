import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const WriteFoot = ({ handlePublish }) => {
  const router = useRouter();

  return (
    <FootContainer>
      <FootWrapper>
        <BackBtn onClick={() => router.back()}>
          <Image src="/back-arrow.png" width="18" height="18" alt="back-arrow" style={{ marginRight: 10 }} />
          나가기
        </BackBtn>
        <RightSide>
          {/* <SaveBtn>임시저장</SaveBtn> */}
          <CreateBtn onClick={() => handlePublish()}>출간하기</CreateBtn>
        </RightSide>
      </FootWrapper>
    </FootContainer>
  );
};

const FootContainer = styled.div`
  position: fixed;
  bottom: 0px;
  height: 4rem;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: white;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;
const FootWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: var(--editor-footer);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.button`
  font-size: 18px;
  height: 40px;
  outline: none;
  border: none;
  background: none;
  border-radius: 4px;
  padding: 0px 1.25rem;
  cursor: pointer;
`;
const BackBtn = styled(Btn)``;
const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const SaveBtn = styled(Btn)`
  color: #12b886;
  font-weight: bold;
`;
const CreateBtn = styled(Btn)`
  background-color: #12b886;
  color: white;
  font-weight: bold;
`;

export default WriteFoot;
