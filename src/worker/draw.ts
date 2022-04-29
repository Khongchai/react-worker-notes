export function draw(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  counter: { count: number }
) {
  //draw a line with the canvas
  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = "#61dafb";

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();

  for (let i = 0; i < counter.count; i++) {
    const x = 0 + i * 20;

    //verletLine({from: {x, y: 0}, to: {x, y: height}, ctx}); <<< desired result
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  requestAnimationFrame(() => draw(canvas, width, height, counter));
}

/**
 *  1. Draw points between from and to.
 *  2. Connect sticks
 *  2.1 (handle interaction)
 *  3. Update points
 *  4. Update sticks
 *  5. Draw points
 *  6. Draw Sticks
 *
 *
 */
function verletLine({
  from,
  to,
  ctx,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
}) {}
