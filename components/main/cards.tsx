import styled from "styled-components";
import { v4 } from "uuid";
import Card from "./card";

const Cards = () => {
  const data = {
    image:
      "https://img.freepik.com/premium-photo/astronaut-in-outer-open-space-over-the-planet-earth-stars-provide-the-background-erforming-a-space-above-planet-earth-sunrise-sunset-our-home-iss-elements-of-this-image-furnished-by-nasa_150455-16829.jpg?w=2000",
    title: "2023년 프론트엔드 공부 로드맵(feat. 어쩌고 저쩌고)",
    content:
      "Spring을 처음 배우는 모든 학생 분들이 가장 많이하는 질문이 그냥 Controller에서 전부 구현하면 안되나요? Service를 왜 만들어야하죠? 라는 질문입니다.Controller에 다 구현해도 똑같이 동작하기 떄문에 이런 질문을 가질 수 있습니다. 또한 생각",
    date: Date.now(),
  };

  return (
    <CardsContainer>
      {new Array(20).fill(0).map((v) => (
        <Card data={data} key={v4()} />
      ))}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Cards;
