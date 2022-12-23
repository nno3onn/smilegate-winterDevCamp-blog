import styled from "styled-components";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

import { QUIL_MODULES } from "../../constant/quill";

const WriteContent = ({ content, setContent }) => {
  return (
    <EditorContainer>
      <ReactQuill theme="snow" value={content} onChange={setContent} modules={QUIL_MODULES} />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .ql-editor {
    height: calc(100vh - 280px);
    overflow: auto;
  }
`;

export default WriteContent;
