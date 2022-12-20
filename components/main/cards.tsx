import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import getPostList from "../../util/api/getPostList";
import Card from "./Card";

const Cards = () => {
  const [postList, setPostList] = useState([]);

  const getPosts = async () => {
    const res = await getPostList();
    if (res) {
      setPostList(res);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <CardsContainer>
      {postList.map((v) => (
        <Card data={v} key={v4()} />
      ))}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Cards;
