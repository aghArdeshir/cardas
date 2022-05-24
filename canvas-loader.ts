export function isCanvas(
  htmlElement: HTMLElement
): htmlElement is HTMLCanvasElement {
  return htmlElement.tagName === "CANVAS";
}
