import styled from "styled-components";

const CommentTextArea = ({ placeholder, value }) => <Input value={value} placeholder={placeholder} />;

const Input = styled.textarea`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid #f1f3f5;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: #212529;
  line-height: 1.75;
`;

export default CommentTextArea;
