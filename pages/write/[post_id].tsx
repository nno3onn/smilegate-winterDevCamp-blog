import Helmet from "../../components/Helmet";
import titleConfigs from "../../configs/title";
import WritePgae from "../../containers/WritePage";

const Write = () => (
  <>
    <Helmet title={titleConfigs.editTitle} />
    <WritePgae />
  </>
);

export default Write;
