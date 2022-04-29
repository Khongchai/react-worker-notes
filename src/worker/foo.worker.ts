import { draw } from "./draw.ts";

const counter = {
  count: 0,
};

onmessage = (message) => {
  console.log(message.data);

  if (message.data.operation === "ADD") {
    postMessage(++counter.count);
  } else if (message.data.operation === "SUBTRACT") {
    postMessage(--counter.count);
  } else if (message.data.operation === "SET_CANVAS") {
    const { canvas, width, height } = message.data;
    draw(canvas, width, height, counter);
  }
};
