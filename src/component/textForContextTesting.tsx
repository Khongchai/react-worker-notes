import { useContext } from "react";
import { Worker as WorkerContext } from "../context/workerContext.ts";

export default function TextForContextTesting() {
  const worker: Worker = useContext(WorkerContext);

  return (
    <p
      style={{ cursor: "pointer", userSelect: "none" }}
      onClick={() => worker.postMessage({ operation: "ADD" })}
    >
      Click to increment counter.
    </p>
  );
}
