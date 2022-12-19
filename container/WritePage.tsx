import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import WriteTitle from "../components/write/title";
import WriteFoot from "../components/write/foot";
import WriteContent from "../components/write/content";
import { useRouter } from "next/router";

const WritePgae = () => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const titleRef = useRef(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      router.push("/");
    }
  }, []);

  // useEffect(() => {
  //   console.log(content, titleRef.current?.value);
  // }, [content]);

  return (
    <>
      <WriteContainer>
        <WriteTitle titleRef={titleRef} />
        <Border />
        <WriteContent content={content} setContent={setContent} />
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
