import './App.css';
import React, { useState } from 'react'
import { startVoice, stopVoice } from './service/kaldi.service';

const App = () => {
  const [p, setP] = useState(null);
  const [dc, setDc] = useState(null);

  const [message, setMessage] = useState([])

  return (
    <div className="App">
      <div>Kuy ASR</div>
      <button onClick={() => startVoice(setP, setDc, setMessage)}>speak</button>
      <button onClick={() => stopVoice(p, dc)}>stop</button>
      <div>{message}</div>
    </div>
  );
}

export default App;