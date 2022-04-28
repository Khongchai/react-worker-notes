import { useEffect, useState } from "react";
import "./App.css";
import TextForContextTesting from "./component/textForContextTesting.tsx";
import logo from "./logo.svg";
//@ts-ignore
import Worker from "./worker/foo.worker.ts";

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
 * - load worker with context, <<<< in progress
 * -  use worker with canvas
 * - try worker with react context
 * - update worker with react context from different files
 */

function App() {
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    setWorker(new Worker());
  }, []);

  useEffect(() => {
    if (worker) {
      worker.postMessage("Hello");
    }
  }, [worker]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextForContextTesting />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
