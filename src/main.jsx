import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Defaultprops from "./lec3112/defaultprops";

// 1. ClassBased implementation
// 2. Function Based implementation

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Defaultprops />
    <br />
    <Defaultprops var1={true} />
    <br />
    <Defaultprops var2={"yellow"} />
    <br />
    <Defaultprops var3={"New Text"} />
    <br />
    <Defaultprops var1={true} var2={"red"} />
    <br />
    <Defaultprops var1={true} var2={"blue"} var3={"abc"} />
  </StrictMode>
);
