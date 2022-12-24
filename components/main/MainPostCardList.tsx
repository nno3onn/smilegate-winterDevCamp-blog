import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { v4 } from "uuid";
import { getPostsThunk } from "../../store/modules/postSlice";
import MainPostCard from "./MainPostCard";
import "react-loading-skeleton/dist/skeleton.css";

const MainPostCardList = () => {
  const dispatch = useDispatch();
  const { posts, error } = useSelector(({ post }): PostListState => post);
  const isLoading = true;
  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  return (
    <CardsContainer>
      {isLoading && (
        <SkeletonWrapper>
          <Skeleton width="100%" height="100%" />
        </SkeletonWrapper>
      )}
      {/* {posts && posts.map((v) => <MainPostCard data={v} key={v4()} />)} */}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SkeletonWrapper = styled.div`
  width: 20rem;
  height: 12rem;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

export default MainPostCardList;
