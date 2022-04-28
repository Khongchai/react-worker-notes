import logo from "./logo.svg";
import "./App.css";

/**
 *  TODO list
 *  - get worker running with React
 * -  get worker running with TypeScript
 * - load worker with context,
 * -  use worker with canvas
 * - try worker with react context
 */

function App() {
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
