import React from "react";

// import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.parcel2";

export default function SinglePage(props) {
  const { pdf } = props;

  return (
    <>
      <Document file={pdf}>
        <Page pageNumber={1} />
      </Document>
    </>
  );
}
