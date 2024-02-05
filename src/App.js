import './App.css';
import Ball from './components/ball';
import { useState } from 'react';

function App() {
  let [ballImgNum, setBallImgNum] = useState(1)

  function checkClick(){
    setBallImgNum(Math.floor(Math.random() * 5) + 1)
  }

  return (
    <div className="App">
        <Ball imgNum={ballImgNum} handleFunc={checkClick}/>
    </div>
  );
}

export default App;
