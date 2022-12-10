import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

import { QUIL_MODULES } from "../../constant/quill";

const WriteContent = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <EditorContainer>
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={QUIL_MODULES} />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .ql-editor {
    height: calc(100vh - 260px);
    overflow: auto;
  }
`;

export default WriteContent;
