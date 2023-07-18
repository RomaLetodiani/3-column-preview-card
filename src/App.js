import './App.css';
import { CarObject } from './components/design/CarObject';

function App() {
  return (
    <div className="App">
      <div className="card-div">
        {CarObject.map((car) => (
          <div
            className="card"
            style={{ backgroundColor: car.bg }}
            key={car.bg}
          >
            <img src={car.url} alt={car.car}></img>
            <h1>{car.car}</h1>
            <p>{car.desc}</p>
            <button style={{ color: car.bg }}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
