import {
  useState

}
from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

    const [cordefundo, setcordefundo] = useState(true);


  return (
    <div className="App"  >
      <header className="App-header" style={{ backgroundColor: cordefundo ? "grey" : "white" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          aryelly <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button  onClick={() => setcordefundo(  cordefundo ? false : true )}> trocar fundo</button>
      </header>
    </div>
  );
}

export default App;
