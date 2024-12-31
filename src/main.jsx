import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Xyz from "./lec2412/component1";
import PropExmp from "./lec3112/propscomp3";

// 1. ClassBased implementation
// 2. Function Based implementation

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PropExmp />
  </StrictMode>
);
