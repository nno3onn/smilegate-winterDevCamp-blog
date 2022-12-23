import styled from "styled-components";
import { CiImageOn } from "react-icons/ci";
import UploadFileButton from "../common/UploadFileButton";
import TextButton from "../common/TextButton";

const WriteUploadThumbnail = ({ thumbnail, setThumbnail }) => {
  const handleUpload = async ({ target: { files } }) => {
    setThumbnail(files[0]);
  };

  return (
    <div>
      {thumbnail && (
        <Header>
          <TextButton text="삭제" onClick={() => setThumbnail(null)} />
        </Header>
      )}
      <ThumbnailContainer>
        {thumbnail && <ThumbnailWrapper backgroundImage={`url(${typeof thumbnail === "object" ? URL.createObjectURL(thumbnail) : thumbnail})`} />}
        {!thumbnail && (
          <ThumbnailWrapper>
            <CiImageOn />
            <UploadFileButton onChange={handleUpload} />
          </ThumbnailWrapper>
        )}
      </ThumbnailContainer>
    </div>
  );
};
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
const ThumbnailContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e9ecef;
  position: relative;
`;
const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-position: center;
  background-size: cover;
  svg {
    font-size: 100px;
    color: #868e96;
  }
`;

export default WriteUploadThumbnail;
