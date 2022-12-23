import styled from "styled-components";

const CommentTextArea = ({ myRef, defaultValue }) => <TextArea ref={myRef} defaultValue={defaultValue} placeholder="댓글을 작성하세요" />;

const TextArea = styled.textarea`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid #f1f3f5;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  line-height: 1.75;
`;

export default CommentTextArea;
