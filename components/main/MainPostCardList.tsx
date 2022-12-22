import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 } from "uuid";
import { getPostsThunk } from "../../store/modules/postSlice";
import MainPostCard from "./MainPostCard";

const MainPostCardList = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector(({ post }): PostListState => post);

  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  return (
    <CardsContainer>
      {isLoading && <>loading...</>}
      {posts && posts.map((v) => <MainPostCard data={v} key={v4()} />)}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default MainPostCardList;
