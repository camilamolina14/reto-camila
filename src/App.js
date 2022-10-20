import prototype from "./images/prototype.png";
import flyweight from "./images/flyweight.png";
import memento from "./images/memento.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={prototype} height={300} width={400} alt="prototype" />
        <p>
          CREATIONAL PATTERN: PROTOTYPE
        </p>
        <img src={flyweight} height={300} width={400} alt="flyweight" />
        <p>
          STRUCTURAL PATTERN: FLYWEIGHT
        </p>
        <img src={memento} height={300} width={400} alt="memento" />
        <p>
          BEHAVIORAL PATTERN: MEMENTO
        </p>
      </header>
    </div>
  );
}

export default App;
