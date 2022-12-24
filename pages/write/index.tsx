import Helmet from "../../components/Helmet";
import titleConfigs from "../../configs/title";
import WritePgae from "../../containers/WritePage";

const Write = () => (
  <>
    <Helmet title={titleConfigs.writeTitle} />
    <WritePgae />
  </>
);

export default Write;
