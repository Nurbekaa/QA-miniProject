import { useState } from 'react';
import './App.css';
// import {Count} from "./counter"
import { Acc } from "./Accardion"


function App(){

  const [hide, setHide] = useState(true);
  function showHide(){
    setHide(!hide);
  }
  return(
    <div className='App'>
      <button onClick={showHide}>{hide ? "Hide" : "Show"}</button>
      {hide && <h1>Hello World!!!</h1>}
    </div>
  )
}
export default Acc;

