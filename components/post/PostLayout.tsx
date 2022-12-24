import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import PostLike from "./PostLike";
import TextButton from "../common/TextButton";
import getPost from "../../util/api/getPost";
import deletePost from "../../util/api/deletePost";
import getYYYYMMDD from "../../util/getYYYYMMDD";
import { UserState } from "../../store/modules/userSlice";
import "react-quill/dist/quill.bubble.css";
import "react-loading-skeleton/dist/skeleton.css";

const PostLayout = () => {
  const { user } = useSelector(({ user }: { user: UserState }) => user);
  const router = useRouter();
  const { post_id } = router.query;
  const [postInfo, setPostInfo] = useState(null);

  const getPostInfo = async () => {
    const res = await getPost(post_id);
    setPostInfo(res);
  };

  const handleDeletePost = async () => {
    const res = await deletePost(post_id);
    if (res) {
      alert("게시글이 삭제되었습니다.");
      return router.push("/");
    }
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      getPostInfo();
    }
  }, [router]);

  return (
    <>
      {!postInfo && (
        <>
          <Skeleton width="100%" height="4rem" style={{ marginBottom: "2rem" }} />
          <Skeleton width={125} height={20} style={{ marginTop: 16, marginBottom: 16 }} />
          <Skeleton width="100%" height="30rem" style={{ margin: "2rem auto 0 auto" }} />
        </>
      )}
      {postInfo && (
        <>
          <Header>
            <PostLike />
            <Title>{postInfo.title}</Title>
            {user?.isAdmin === 1 && (
              <RightWrapper>
                <TextButton text="수정" onClick={() => router.push(`/write/${post_id}`)} />
                <TextButton text="삭제" onClick={() => handleDeletePost()} />
              </RightWrapper>
            )}
          </Header>
          <p>{getYYYYMMDD(postInfo["created_at"])}</p>
          {postInfo.thumbnail && postInfo.thumbnail !== "null" && <Thumbnail src={postInfo.thumbnail} />}
          <ReactQuill value={postInfo.content} readOnly={true} theme="bubble" />
        </>
      )}
    </>
  );
};
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const Title = styled.div`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  margin-bottom: 2rem;
  word-break: keep-all;
  transition: color 0.125s ease-in 0s;
`;
const Thumbnail = styled.img`
  margin: 2rem auto 0 auto;
  width: 80%;
`;

export default PostLayout;
