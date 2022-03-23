import React, { useState } from 'react'

import './App.css';
import Button from './components/Button/Button';
import ButtonClear from './components/ButtonClear/ButtonClear';
import Screen from './components/Screen/Screen';

import { evaluate } from 'mathjs';
function App() {
  const [input, setInput] = useState('')

  const addValueToInput = value => {
    setInput(input + value)
  }

  const calcular = (input) => {
    if (input) {
      setInput(evaluate(input))
    }
  }
  return (
    <div className="app">
      <div className="calculator">
        <Screen>{input}</Screen>
        <div className="calculator-keys">

          <div className='fila'>
            <Button manageClick={addValueToInput}>7</Button>
            <Button manageClick={addValueToInput}>8</Button>
            <Button manageClick={addValueToInput}>9</Button>
            <Button manageClick={addValueToInput}>/</Button>

          </div>
          <div className="fila">
            <Button manageClick={addValueToInput}>4</Button>
            <Button manageClick={addValueToInput}>5</Button>
            <Button manageClick={addValueToInput}>6</Button>
            <Button manageClick={addValueToInput}>*</Button>
          </div>
          <div className="fila">
            <Button manageClick={addValueToInput}>1</Button>
            <Button manageClick={addValueToInput}>2</Button>
            <Button manageClick={addValueToInput}>3</Button>
            <Button manageClick={addValueToInput}>+</Button>

          </div>
          <div className="fila">
            <Button manageClick={addValueToInput}>0</Button>
            <Button manageClick={addValueToInput}>.</Button>
            <Button manageClick={addValueToInput}>-</Button>
            <button className="btn-container" onClick={() => calcular(input)}>=</button>
          </div>

          <ButtonClear clearInput={() => setInput('')}>AC</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
