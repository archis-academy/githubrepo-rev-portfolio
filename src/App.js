import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the learning hub <br></br>Join Archi's to have a new learning experience.
        </p>
        <a
          className="App-link"
          href="https://www.archisacademy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Info
        </a>
      </header>
    </div>
  );
}

export default App;
