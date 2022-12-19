import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import WriteTitle from "../components/write/title";
import WriteFoot from "../components/write/foot";
import WriteContent from "../components/write/content";
import { useRouter } from "next/router";
import getIsAdminByUserId from "../util/getIsAdminByUserId";

const WritePgae = () => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const titleRef = useRef(null);

  const getIsAdmin = async (user_id: number) => {
    const isAdmin = await getIsAdminByUserId(user_id);
    if (!isAdmin) {
      return router.push("/");
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      return router.push("/");
    }
    const { user_id } = JSON.parse(userInfo);
    getIsAdmin(user_id);
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
