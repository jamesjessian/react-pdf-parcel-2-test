import React from "react";

import SinglePage from "./SinglePage";

import { sampleBase64pdf } from "./samplePdfBase64";

export default function App() {
  return <SinglePage pdf={sampleBase64pdf} />;
}
