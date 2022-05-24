import { ctx, isCanvas } from "./canvas-loader";

test("isCanvas detects canvas", () => {
  expect(isCanvas(document.createElement("canvas"))).toBe(true);
});

test("isCanvas rejects non-canvas", () => {
  expect(isCanvas(document.createElement("div"))).toBe(false);
});

test("ctx must be a canvas context", () => {
  expect(ctx).toBeTruthy();
});
