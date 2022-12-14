import Link from "next/link";
import styled from "styled-components";
import { PostState } from "../../store/modules/postSlice";
import getYYYYMMDD from "../../util/getYYYYMMDD";
import Parser from "html-react-parser";

const MainPostCard = ({ data }: { data: PostState }) => {
  const { post_id, thumbnail, title, content, created_at } = data;

  return (
    <Container>
      <Link href={`/${post_id}`}>
        <ImageWrapper img={thumbnail} />
        <ContentWrapper>
          <Title>{title}</Title>
          <Content>{Parser(content)}</Content>
          <Date>{getYYYYMMDD(created_at)}</Date>
        </ContentWrapper>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 20rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgb(0 0 0 / 8%) 10px 16px 16px 0px;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #eee;
  background-image: url(${({ img }: { img: string }) => img});
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
  margin-bottom: 0;
`;

export default MainPostCard;
