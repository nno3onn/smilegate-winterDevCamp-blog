import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 } from "uuid";
import { deleteError, getPostsThunk } from "../../store/modules/postSlice";
import MainPostCard from "./MainPostCard";
import { PostState } from "../../store/modules/postSlice";
import "react-loading-skeleton/dist/skeleton.css";
import MainLoadingSkeleton from "./MainLoadingSkeleton";

const MainPostCardList = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector(({ post }): PostListState => post);
  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  if (error) {
    dispatch(deleteError());
    alert("다시 시도해주세요.");
  }

  return (
    <CardsContainer>
      {isLoading && <MainLoadingSkeleton />}
      {!isLoading && posts.map((v: PostState) => <MainPostCard data={v} key={v4()} />)}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default MainPostCardList;
