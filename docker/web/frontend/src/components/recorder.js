import React,{useState} from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import "./recorder.css"
import { handleOutput } from '../service/out.service'

import mic1 from './mic1.png'
import mic2 from './mic2.png'
import { startVoice, stopVoice } from '../service/kaldi.service';

const Recorder = (props) => {
    
    const [record, setRecord] = useState(RecordState.STOP)

    const [p, setP] = useState(null);
    const [dc, setDc] = useState(null);

    const [message, setMessage] = useState("")
    
    const startRecord = () => {
      startVoice(setP, setDc, setMessage)
      setRecord(RecordState.START)
    }
    const stopRecord = () => {
      stopVoice(p, dc)
      setRecord(RecordState.STOP)
      props.sendInput(handleOutput(message))
    }
     
    //audioData contains blob and blobUrl
    const onStop = (audioData) => {
        console.log('audioData', audioData)
      }
     
    return (
        <div>
            <div className="Recorder">
              {record===RecordState.STOP && <button className="Start" onClick={startRecord}><img src={mic1}/></button>}
              {record===RecordState.START && <button className="Stop" onClick={stopRecord}><img src={mic2}/></button>}  
              <AudioReactRecorder state={record} onStop={onStop} />
            </div>
            <div className="Voicetext">
            <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Recorder;