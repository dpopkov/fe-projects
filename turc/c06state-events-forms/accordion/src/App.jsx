import { useState } from 'react';
import './App.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export default function App() {
  return (
    <div className="container">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <Item key={index} num={index + 1} item={item} />
      ))}
    </div>
  );
}

function Item({ num, item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen((v) => !v)}
    >
      <div className="number">{num < 10 ? `0${num}` : num}</div>
      <div className="title">{item.title}</div>
      <div className="icon">{isOpen ? '-' : '+'}</div>

      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
}
