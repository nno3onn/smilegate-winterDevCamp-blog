import styled from "styled-components";

const WriteTitle = ({ titleRef }) => <TitleInput ref={titleRef} placeholder="제목을 입력하세요" />;

const TitleInput = styled.input`
  height: 66px;
  background: transparent;
  display: block;
  padding: 0px;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
`;

export default WriteTitle;
