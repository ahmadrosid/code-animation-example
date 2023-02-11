import { makeProject } from "@motion-canvas/core/lib";
import component from "./scenes/component?scene";

export default makeProject({
  scenes: [component],
  background: "#141414",
});
