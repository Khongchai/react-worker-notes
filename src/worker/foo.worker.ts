let count = 0;

onmessage = (message) => {
  console.log(message.data);

  if (message.data.operation === "ADD") {
    postMessage(++count);
  } else if (message.data.operation === "SUBTRACT") {
    postMessage(--count);
  } else if (message.data.operation === "SET_CANVAS") {
    const { canvas, width, height } = message.data;
    draw(canvas, width, height);
  }
};

function draw(canvas: HTMLCanvasElement, width: number, height: number) {
  //draw a line with the canvas
  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = "#61dafb";

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();

  for (let i = 0; i < count; i++) {
    const x = 0 + i * 20;

    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  requestAnimationFrame(() => draw(canvas, width, height));
}
