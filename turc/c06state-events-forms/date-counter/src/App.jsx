import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [today, setToday] = useState(new Date());

  function updateDate(current, diffDays) {
    const oldMs = current.getTime();
    const diffMs = diffDays * 86400000; // days * 24 * 60 * 60 * 1000
    return new Date(oldMs + diffMs);
  }

  function minusCount() {
    setCount((c) => c - step);
    setToday(updateDate(today, -step));
  }

  function plusCount() {
    setCount((c) => c + step);
    setToday(updateDate(today, step));
  }

  function startOfMessage() {
    if (count < 0) return `${-count} days ago was `;
    else if (count === 0) return 'Today is ';
    else return `${count} days from today is `;
  }

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={minusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={plusCount}>+</button>
      </div>
      <div>{`${startOfMessage()} ${today.toDateString()}`}</div>
    </>
  );
}

export default App;
