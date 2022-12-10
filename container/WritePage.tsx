import styled from "styled-components";
import { useRef } from "react";
import WriteTitle from "../components/write/title";
import WriteFoot from "../components/write/foot";
import WriteContent from "../components/write/content";

const WritePgae = () => {
  const titleRef = useRef(null);

  return (
    <>
      <WriteContainer>
        <WriteTitle titleRef={titleRef} />
        <Border />
        <WriteContent />
      </WriteContainer>
      <WriteFoot />
    </>
  );
};

const WriteContainer = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  width: 1024px;
  margin: 0 auto;
`;
const Border = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

export default WritePgae;
