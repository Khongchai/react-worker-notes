import { useEffect, useRef, useState } from "react";
import "./App.css";
import TextForContextTesting from "./component/textForContextTesting.tsx";
//@ts-ignore
import Worker from "./worker/foo.worker.ts";
import { Worker as WorkerContext } from "./context/workerContext.ts";
import Count from "./component/count.tsx";
import logo from "./logo.svg";
import "./index.css";

/**
 *  TODO list
 *  - get worker running with React => done
 *      => use worker-loader
 *      => Make sure the file name of the worker matches the regex format in the config.
 *      => Also....npm run eject
 * -  get worker running with TypeScript => done.
 *      => Zum Ersten, natürlich Typescript installieren.
 *      => declaration files, or just @ts-ignore
 *      => Change the file name of the worker to foo.worker.ts and update the config regex.
 * - load worker with context => done
 *      => Do it normally.
 * - Try worker with react ref=> in progress
 *      = Do it normally.
 * -  use worker with canvas
 */

/**
 * What is attepts to do:
 *
 * A simple counter with a worker.
 *
 * Tell the worker to increment a value from textForCokntextTesting.tsx file.
 *
 * Listen to the worker message and update the counter from this file.
 *
 * Update the state accordingly and pass it to count.tsx.
 *
 * The worker also draws the same number of lines as the count in the background canvas.
 *
 * TODO
 * Add react spinning logo in the main thread
 *
 * Do some verlet curtain thing with worker.
 *
 */

function App() {
  const [worker, setWorker] = useState<Worker>(null);
  const [count, setCount] = useState(0);

  const canvasRef = useRef(null);

  // just to test if ref works with worker (spoiler, it does)
  const counter2Ref = useRef(0);

  useEffect(() => {
    setWorker(new Worker());
  }, []);

  useEffect(() => {
    if (worker && canvasRef.current) {
      worker.postMessage("Worker up and running");
      const canvas = canvasRef.current.transferControlToOffscreen();

      worker.postMessage(
        {
          operation: "SET_CANVAS",
          width: 500,
          height: 500,
          canvas,
          counter2Ref,
        },
        [canvas]
      );

      worker.onmessage = (e: any) => {
        setCount(parseInt(e.data));
      };
    }
  }, [worker]);

  return (
    <WorkerContext.Provider value={worker}>
      <div className="App" style={{ position: "relative" }}>
        <header className="App-header">
          <Count count={count} />
          <canvas
            ref={canvasRef}
            width="500"
            height="500"
            style={{ padding: "16px 0" }}
          ></canvas>
          <TextForContextTesting />
        </header>
      </div>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
        }}
      />
      ;
    </WorkerContext.Provider>
  );
}

export default App;
