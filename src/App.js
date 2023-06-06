import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Spheron Deployment
        </p>
        <a
          className="App-link"
          href="https://docs.spheron.network/framework-guide/deploy-react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spheron docs
        </a>
      </header>
    </div>
  );
}

export default App;
