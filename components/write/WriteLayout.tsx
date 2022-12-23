import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { uploadFile } from "../../configs/s3/config";
import { useRouter } from "next/router";
import WriteTitle from "./WriteTitle";
import WriteContent from "./WriteContent";
import WriteFooter from "./WriteFooter";
import WritePublishModal from "./WritePublishModal";
import getPost from "../../util/api/getPost";
import updatePost from "../../util/api/updatePost";
import createPost from "../../util/api/createPost";
import { UserState } from "../../store/modules/userSlice";

const WriteLayout = () => {
  const router = useRouter();
  const { user } = useSelector(({ user }: { user: UserState }) => user);
  const { post_id } = router.query;
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const titleRef = useRef(null);

  const handleUpload = ({ target: { files } }) => {
    setThumbnail(files[0]);
  };

  const handlePublish = async () => {
    const title = titleRef.current.value;
    if (!title || !content) {
      return alert("제목과 내용을 입력해주세요.");
    }
    let thumbnailUrl = null;
    if (thumbnail) {
      if (typeof thumbnail === "object") {
        thumbnailUrl = await uploadFile(thumbnail);
      }
    }
    if (post_id) {
      return handleUpdate(thumbnailUrl);
    }
    return handleCreate(thumbnailUrl);
  };

  const handleCancel = () => setIsModal(false);

  const handleUpdate = async (thumbnailUrl) => {
    const title = titleRef.current.value;
    const res = await updatePost({ post_id, title, content, thumbnail: thumbnailUrl });
    if (res) {
      titleRef.current.value = "";
      alert("게시글이 수정되었습니다.");
      return router.push(`/${post_id}`);
    }
  };

  const handleCreate = async (thumbnailUrl) => {
    const title = titleRef.current.value;
    const res = await createPost({ title, content, thumbnail: thumbnailUrl });
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
    titleRef.current.value = res.title;
    setContent(res.content);
    setThumbnail(res.thumbnail);
  };

  useEffect(() => {
    checkIsAdmin();
    if (post_id) {
      getPostInfo();
    }
  }, []);

  return (
    <>
      {isModal && <WritePublishModal thumbnail={thumbnail} setThumbnail={setThumbnail} handleCancel={handleCancel} handlePublish={handlePublish} />}
      <WriteContainer>
        <WriteTitle titleRef={titleRef} />
        <Border />
        <WriteContent content={content} setContent={setContent} />
      </WriteContainer>
      <WriteFooter onClick={() => setIsModal(true)} />
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
