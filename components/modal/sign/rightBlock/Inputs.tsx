import styled from "styled-components";

const SignInput = ({ myRef, placeholder, type = "text" }) => <Input type={type} ref={myRef} placeholder={placeholder} />;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  flex: 1;
  border: 1px solid #dee2e6;
  font-size: 1rem;
  color: #212529;
  &:focus-visible {
    border: 1px solid #12b886;
    outline: none;
  }
`;

export default SignInput;
