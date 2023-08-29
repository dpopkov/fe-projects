import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const startDate = new Date();
  const today = updateDate(startDate, count);

  function handleRange(e) {
    const newStep = parseInt(e.target.value);
    if (newStep > 0) {
      setStep(newStep);
    }
  }

  function updateDate(current, diffDays) {
    const oldMs = current.getTime();
    const diffMs = diffDays * 86400000; // days * 24 * 60 * 60 * 1000
    return new Date(oldMs + diffMs);
  }

  function minusCount() {
    const newCount = count - step;
    setCount(newCount);
  }

  function plusCount() {
    const newCount = count + step;
    setCount(newCount);
  }

  function handleOnChangeCount(e) {
    const newCount = parseInt(e.target.value);
    if (!isNaN(newCount)) {
      setCount(newCount);
    }
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  function startOfMessage() {
    if (count < 0) return `${-count} days ago was `;
    else if (count === 0) return 'Today is ';
    else return `${count} days from today is `;
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleRange}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={minusCount}>-</button>
        <input type="text" value={count} onChange={handleOnChangeCount} />
        <button onClick={plusCount}>+</button>
      </div>
      <div>{`${startOfMessage()} ${today.toDateString()}`}</div>
      {(step !== 1 || count !== 0) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
  );
}
