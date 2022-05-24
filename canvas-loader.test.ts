import { attachCanvasToElement, ctx, isCanvas } from "./canvas-loader";

test("isCanvas detects canvas", () => {
  expect(isCanvas(document.createElement("canvas"))).toBe(true);
});

test("isCanvas rejects non-canvas", () => {
  expect(isCanvas(document.createElement("div"))).toBe(false);
});

test("ctx must be a canvas context", () => {
  expect(ctx).toBeTruthy();
});

test("attachCanvasToElement attaches canvas to element", () => {
  const element = document.createElement("div");
  attachCanvasToElement(element);

  // toEqual in line below works, because jest compares objects by their values
  // (and not by their references)
  expect(element.firstChild).toEqual(document.createElement("canvas"));
});
