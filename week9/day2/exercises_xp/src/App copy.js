import Car from './Components/Car';
import Garage from './Components/Garage';
import './App.css';


function App() {

  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Car carInfo={carInfo} /> 
      
      </header>
    </div>
  );
}

export default App;
