import { Children, useState } from 'react';
import './App.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((v) => v - 1);
    }
  }

  function handleNext() {
    if (step < messages.length) {
      setStep((v) => v + 1);
    }
  }

  function toggleClose() {
    setIsOpen((v) => !v);
  }

  return (
    <div className="container">
      {isOpen && (
        <div className="app">
          <Steps step={step} />
          <Message step={step}>{messages[step - 1]}</Message>
          <Buttons handlePrevious={handlePrevious} handleNext={handleNext} />
        </div>
      )}
      <button className="close" onClick={toggleClose}>
        {isOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
}

function Steps({ step }) {
  return (
    <div className="steps">
      {messages.map((_, index) => (
        <Step stepNumber={index + 1} isActive={step > index} key={index} />
      ))}
    </div>
  );
}

function Step({ stepNumber, isActive }) {
  return <div className={isActive ? 'step active' : 'step'}>{stepNumber}</div>;
}

function Message({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      <p>{children}</p>
    </div>
  );
}

function Buttons({ handlePrevious, handleNext }) {
  return (
    <div className="buttons">
      <Button handleClick={handlePrevious}>
        <span>&lt;&lt;</span>
        <span>Previous</span>
        <span>Step</span>
      </Button>
      <Button handleClick={handleNext}>
        <span>Next</span>
        <span>Step</span>
        <span>&gt;&gt;</span>
      </Button>
    </div>
  );
}

function Button({ handleClick, children }) {
  return <button onClick={handleClick}>{children}</button>;
}
