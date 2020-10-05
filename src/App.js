import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
        <span id="error-message" className={`error ${error ? '': 'hidden'}`} data-test="error-message">Counter cannot be less than zero</span>

      </h1>
      <button 
        onClick={() => {
          if(error) { setError(false);}
          setCount(count + 1)
        }
          }
        data-test="increment-button">Increment counter</button>
        <button
          onClick={() => {
            if(count > 0){
              setCount(count - 1);
              
            } else {
              setError(true);
            }
          }
        } data-test="decrement-button">Decrement counter</button>
    </div>
  );
}

export default App;
