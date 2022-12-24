import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostLoadingSkeleton = () => (
  <>
    <Skeleton width="100%" height="4rem" style={{ marginBottom: "2rem" }} />
    <Skeleton width={125} height={20} style={{ marginTop: 16, marginBottom: 16 }} />
    <Skeleton width="100%" height="30rem" style={{ margin: "2rem auto 0 auto" }} />
  </>
);

export default PostLoadingSkeleton;
