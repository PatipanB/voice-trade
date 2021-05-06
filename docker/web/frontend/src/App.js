import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Recorder from './components/recorder'
import {Price,AllPrice} from './price/price';
import {Different, TopdiffUp, TopdiffDown, TopTenDiffUp, TopTenDiffDown} from './different/different'
import ChangePrice from './changeprice/changeprice'
import Account from './account/account'
import Trade from './account/trade'


function App() {

  const [listInput, setListInput] = useState("");

  return (
    <div className="App">
      <Navbar />
      <div className="Background">
      <Recorder sendInput={setListInput}/>
      {console.log(listInput)}
      {/* <Price/> */}
      {/* <AllPrice/> */}
      {/* < TopTenDiffDown/> */}
      {/* <ChangePrice/> */}
      {/* <Account/> */}
      {/* <Trade/> */}
      </div>
    </div>
  );
}

export default App;
