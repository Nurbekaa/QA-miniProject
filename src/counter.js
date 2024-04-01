import {useState} from  'react'
import './Acc.css';

export function Count(){

const[counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
    setCounter(counter-1)
  }

  function reset(){
    setCounter(0)
  }

  return(
    <div className="App">

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      {counter}
      <button onClick={reset}>RESET</button>
    </div>
  );
}

