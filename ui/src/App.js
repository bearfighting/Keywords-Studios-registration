import RegistrationForm from './Form';
import './App.css';
import Registred from './Registred';
import Statistics from './Statistics';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleNumberRegistred = () => {
    setNumber(number+1);
  }

  const handleDisplay = () => {
    setDisplay(!display);
    // sendRequest()
  }

  return (
    <div className="App">
      <div className="App-top">
        <RegistrationForm class="App-form" handleNumberRegistred={handleNumberRegistred}/>
        <Registred number={number} handleDisplay={handleDisplay} display={display}/>
      </div>
      <div className="App-bottom">
          <Statistics display={display}/>
      </div>
    </div>
  );
}

export default App;
