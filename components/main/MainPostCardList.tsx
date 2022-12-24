import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { v4 } from "uuid";
import { deleteError, getPostsThunk } from "../../store/modules/postSlice";
import MainPostCard from "./MainPostCard";
import { PostState } from "../../store/modules/postSlice";
import "react-loading-skeleton/dist/skeleton.css";

const MainPostCardList = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector(({ post }): PostListState => post);
  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  if (error) {
    dispatch(deleteError());
    return alert("다시 시도해주세요.");
  }

  return (
    <CardsContainer>
      {isLoading && (
        <>
          {new Array(12).fill().map((v) => (
            <SkeletonWrapper>
              <Skeleton width="100%" height="100%" />
            </SkeletonWrapper>
          ))}
        </>
      )}
      {!isLoading && posts.map((v: PostState) => <MainPostCard data={v} key={v4()} />)}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SkeletonWrapper = styled.div`
  width: 20rem;
  height: 389px;
  margin: 1rem;
`;

export default MainPostCardList;
