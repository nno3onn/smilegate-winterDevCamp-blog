import styled from "styled-components";

const NavSignModalInput = ({ myRef, onKeyUp, placeholder, type = "text" }: { myRef: any; onKeyUp: any; placeholder: string; type: string }) => (
  <Input type={type} ref={myRef} onKeyUp={onKeyUp} placeholder={placeholder} />
);

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  flex: 1;
  border: 1px solid #dee2e6;
  font-size: 1rem;
  &:focus-visible {
    border: 1px solid #12b886;
    outline: none;
  }
`;

export default NavSignModalInput;
