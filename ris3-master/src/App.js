import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions/counter';

import logo from './logo.svg';
import './App.css';

function App() {
  const number = useSelector(state => state.counter.number);

  const dispatch = useDispatch();
  const dispatchIncrement = () => dispatch(increment());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={dispatchIncrement}
        >
          Learn React {number}
        </button>
      </header>
    </div>
  );
}

export default App;
