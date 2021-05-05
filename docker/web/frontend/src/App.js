import './App.css';
import React, { useState } from 'react'
import { startVoice, stopVoice } from './service/kaldi.service';
import { handleOutput } from './service/out.service';

const App = () => {
  const [p, setP] = useState(null);
  const [dc, setDc] = useState(null);
  const [start, setStart] = useState(false);

  const [message, setMessage] = useState([])

  const startRecord = () => {
    startVoice(setP, setDc, setMessage)
    setStart(true)
  }
  const stopRecord = () => {
    stopVoice(p, dc)
    setStart(false)
    handleOutput(message)
  }

  return (
    <div className="App">
      <div>Kuy ASR</div>
      {!start && <button onClick={startRecord}>speak</button>}
      {start && <button onClick={stopRecord}>stop</button>}
      <div>{message}</div>
    </div>
  );
}

export default App;