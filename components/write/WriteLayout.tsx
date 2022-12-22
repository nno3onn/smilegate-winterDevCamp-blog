import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createPostThunk, updatePostThunk } from "../../store/modules/postSlice";
import getPost from "../../util/api/getPost";
import WriteTitle from "./WriteTitle";
import WriteContent from "./WriteContent";
import WriteFooter from "./WriteFooter";
import { useSelector } from "react-redux";
import { UserState } from "../../store/modules/userSlice";
import { useDispatch } from "react-redux";
import updatePost from "../../util/api/updatePost";
import createPost from "../../util/api/createPost";

const WriteLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }: { user: UserState }) => user);
  const { post_id } = router.query;
  const [content, setContent] = useState("");
  const titleRef = useRef(null);

  const handlePublish = () => {
    if (post_id) {
      return handleUpdate();
    }
    return handleCreate();
  };

  const handleUpdate = async () => {
    const title = titleRef.current.value;
    const res = await updatePost({ post_id, title, content, thumbnail: null });
    // const res = dispatch(updatePostThunk({ post_id, title, content, thumbnail: null }));
    if (res) {
      titleRef.current.value = "";
      alert("게시글이 수정되었습니다.");
      return router.push(`/${post_id}`);
    }
  };

  const handleCreate = async () => {
    const title = titleRef.current.value;
    const res = await createPost({ title, content, thumbnail: null });
    // const res = dispatch(createPostThunk({ title, content }));
    if (res) {
      titleRef.current.value = "";
      alert("게시글이 등록되었습니다.");
      return router.push(`/${res.post_id}`);
    }
  };

  const checkIsAdmin = () => {
    if (user?.isAdmin === 0) {
      return router.push("/");
    }
  };

  const getPostInfo = async () => {
    const res = await getPost(post_id);
    console.log(res);
    titleRef.current.value = res.title;
    setContent(res.content);
  };

  useEffect(() => {
    checkIsAdmin();
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

export default WriteLayout;
