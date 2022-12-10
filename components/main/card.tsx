import styled from "styled-components";
import getYYYYMMDD from "../../util/getYYYYMMDD";

const Card = ({ data }) => {
  const { image, title, content, date } = data;

  return (
    <CardContainer>
      <ImageWrapper img={image} />
      <ContentWrapper>
        <Title> {title}</Title>
        <Content> {content}</Content>
        <Date>{getYYYYMMDD(date)}</Date>
      </ContentWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 20rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const ImageWrapper = styled.image`
  width: 100%;
  height: 200px;
  position: relative;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
`;
const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;
const Title = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #212529;
`;
const Content = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #495057;
`;
const Date = styled.p`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #868e96;
`;

export default Card;
