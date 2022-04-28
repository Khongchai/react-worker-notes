import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

/**
 *  TODO list
 *  - get worker running with React
 * -  get worker running with TypeScript
 * - load worker with context,
 * -  use worker with canvas
 * - try worker with react context
 */

function App() {
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    setWorker(new Worker("worker/workerEntryPoint.js"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
