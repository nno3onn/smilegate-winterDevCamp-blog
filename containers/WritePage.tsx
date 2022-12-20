import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import WriteTitle from "../components/write/WriteTitle";
import WriteFooter from "../components/write/WriteFooter";
import WriteContent from "../components/write/WriteContent";
import { useRouter } from "next/router";
// import getIsAdminByUserId from "../util/getIsAdminByUserId";
import createPost from "../util/api/createPost";
import getPost from "../util/api/getPost";
import updatePost from "../util/api/updatePost";

const WritePgae = () => {
  const router = useRouter();
  const { post_id } = router.query;
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef(null);

  // const getIsAdmin = async (user_id: number) => {
  //   const isAdmin = await getIsAdminByUserId(user_id);
  //   if (!isAdmin) {
  //     return router.push("/");
  //   }
  //   setUserId(user_id);
  // };

  const handlePublish = () => {
    if (post_id) {
      return handleUpdate();
    }
    return handleCreate();
  };

  const handleUpdate = async () => {
    const title = titleRef.current.value;
    const res = await updatePost({ post_id, title, content });
    if (res) {
      titleRef.current.value = "";
      alert("게시글이 수정되었습니다.");
      return router.push(`/${post_id}`);
    }
  };

  const handleCreate = async () => {
    const title = titleRef.current.value;
    const res = await createPost({ title, content });
    if (res) {
      titleRef.current.value = "";
      alert("게시글이 등록되었습니다.");
      return router.push(`/${res.post_id}`);
    }
  };

  // const checkIsAdmin = () => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (!userInfo) {
  //     return router.push("/");
  //   }
  //   const { user_id } = JSON.parse(userInfo);
  //   // getIsAdmin(user_id);
  // };

  const getPostInfo = async () => {
    const res = await getPost(post_id);
    console.log(res);
    titleRef.current.value = res.title;
    setContent(res.content);
  };

  useEffect(() => {
    // checkIsAdmin();

    if (post_id) {
      getPostInfo();
    }
  }, []);

  return (
    <>
      <WriteContainer>
        <WriteTitle titleRef={titleRef} />
        <Border />
        <WriteContent content={content} setContent={setContent} />
      </WriteContainer>
      <WriteFooter handlePublish={handlePublish} />
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
