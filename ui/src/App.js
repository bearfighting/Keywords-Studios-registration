import RegistrationForm from './Form';
import './App.css';
import Registred from './Registred';
import Statistics from './Statistics';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {REGISTRATION_URL} from './url';

function App() {
  const [number, setNumber] = useState(0);
  const [display, setDisplay] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    async function init() {
      let response = await axios.get(REGISTRATION_URL);
      setNumber(response.data.length);
      setRegistrations(response.data);
    }
    init();
  })

  const handleNumberRegistred = (numResult) => {
    setNumber(numResult);
  }

  const handleDisplay = async () => {
    setDisplay(!display);
    let response = await axios.get(REGISTRATION_URL);
    setNumber(response.data.length);
    setRegistrations(response.data);
  }

  return (
    <div className="App">
      <div className="App-top">
        <RegistrationForm class="App-form" handleNumberRegistred={handleNumberRegistred}/>
        <Registred number={number} handleDisplay={handleDisplay} display={display}/>
      </div>
      <div className="App-bottom">
        <Statistics display={display} registrations={registrations}/>
      </div>
    </div>
  );
}

export default App;
