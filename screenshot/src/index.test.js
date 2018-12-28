import html2canvas from "html2canvas";
import result from "./index.js";

test("it works", () => {
  expect(result).toBe(html2canvas);
});
