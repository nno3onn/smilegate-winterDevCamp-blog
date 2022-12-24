import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const MainLoadingSkeleton = () => (
  <>
    {new Array(12).fill().map((v) => (
      <SkeletonWrapper>
        <Skeleton width="100%" height="100%" />
      </SkeletonWrapper>
    ))}
  </>
);

const SkeletonWrapper = styled.div`
  width: 20rem;
  height: 389px;
  margin: 1rem;
`;

export default MainLoadingSkeleton;
