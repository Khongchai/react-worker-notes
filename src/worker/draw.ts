export function draw(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  counter: { count: number }
) {
  //draw a line with the canvas
  const ctx = canvas.getContext("2d")!;

  ctx.strokeStyle = "#61dafb";

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();

  for (let i = 0; i < counter.count; i++) {
    const x = 0 + i * 20;

    verticalChain({ from: { x, y: 0 }, to: { x, y: height }, ctx }); //TODO not yet working, still returns {x: 0, y: 0};
    // ctx.moveTo(x, 0);
    // ctx.lineTo(x, height);
    // ctx.stroke();
  }

  requestAnimationFrame(() => draw(canvas, width, height, counter));
}

/**
 *  1. Draw points between from and to.
 *  2 Generate points
 *  3 Generate sticks <<
 *  4 draw sticks
 *  5 Connect sticks
 *  6 (handle interaction)
 *  3. Update points
 *  4. Update sticks
 *  5. Draw points
 *  6. Draw Sticks
 *
 *
 */
function verticalChain({
  from,
  to,
  ctx,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
}) {
  const points = generateVerticalPoints(from.y, to.y, 10, from.x);

  generateSticksFromPoints({ ctx, points });

  // Interpolate points between point1 and point2
  /**
   *
   * @param point1 first point
   * @param point2 second point
   * @param amount amount of points to interpolate between those points
   */
  function generateVerticalPoints(
    point1: number,
    point2: number,
    amount: number,
    x: number
  ): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];

    for (let i = 0; i < amount; i++) {
      const generatedPoint = point1 + ((point2 - point1) * i) / amount;

      points.push({ x, y: generatedPoint });
    }

    return points;
  }

  function generateSticksFromPoints({
    ctx,
    points,
  }: {
    ctx: CanvasRenderingContext2D;
    points: { x: number; y: number }[];
  }) {
    // Length - 1 because drawing lines between points will always take exactly n - 1 steps.
    for (let i = 0, length = points.length; i < length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  }
}
