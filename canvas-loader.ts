export function isCanvas(
  htmlElement: HTMLElement
): htmlElement is HTMLCanvasElement {
  return htmlElement.tagName === "CANVAS";
}

export const ctx: CanvasRenderingContext2D = document
  .createElement("canvas")
  .getContext("2d");
