import styled from "styled-components";
import DefaultButton from "../common/DefaultButton";
import DefaultModal from "../common/DefaultModal";
import WhiteButton from "../common/WhiteButton";
import WriteUploadThumbnail from "./WriteUploadThumbnail";

const WritePublishModal = ({ thumbnail, setThumbnail, handleCancel, handlePublish }) => {
  return (
    <DefaultModal width="750px" height="450px">
      <PublishModalContainer>
        <PublishModalBody>
          <Title>포스트 썸네일 등록</Title>
          <WriteUploadThumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />
        </PublishModalBody>
        <ButtonWrapper>
          <WhiteButton text="취소" onClick={handleCancel} backgroundColor="#f8f9fa" />
          <DefaultButton text="출간하기" onClick={handlePublish} />
        </ButtonWrapper>
      </PublishModalContainer>
    </DefaultModal>
  );
};

const PublishModalContainer = styled.div`
  padding: 50px 180px;
  width: 100%;
  height: 100%;
  /* width: 50rem; */
  /* height: 30rem; */
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
`;
const PublishModalBody = styled.div`
  flex: 1;
`;
const Title = styled.h3`
  font-size: 1.3rem;
  line-height: 1.5;
  margin-top: 0px;
  margin-bottom: 0.5rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;

export default WritePublishModal;
