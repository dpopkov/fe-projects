import { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 2,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 3,
    question:
      'What is the name of the syntax we use to describe a UI in React?',
    answer: 'JSX',
  },
  {
    id: 4,
    question: 'How to pass data from parent to child components?',
    answer: 'Using props',
  },
  {
    id: 5,
    question: 'How to give components memory',
    answer: 'useState hook',
  },
  {
    id: 6,
    question:
      'What do we call an input element that is completely synchronized with state?',
    answer: 'Controlled',
  },
];

export default function App() {
  return (
    <div className="app">
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelect(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <ul className="flashcards">
      {questions.map((item) => (
        <li
          key={item.id}
          className={item.id === selectedId ? 'selected' : ''}
          onClick={() => handleSelect(item.id)}
        >
          {item.id !== selectedId ? item.question : item.answer}
        </li>
      ))}
    </ul>
  );
}
