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
  const [currentOpen, setCurrentOpen] = useState(null);

  function toggleOpen(num) {
    setCurrentOpen(num === currentOpen ? null : num);
  }

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <Item
          key={index}
          num={index + 1}
          title={item.title}
          currentOpen={currentOpen}
          onClick={toggleOpen}
        >
          {item.text}
        </Item>
      ))}
      <Item
        num={101}
        title="Do not start here"
        currentOpen={currentOpen}
        onClick={toggleOpen}
      >
        <h4>This item is not in array</h4>
        <ul>
          <li>It can contain any html</li>
          <li>It is used for testing purposes</li>
        </ul>
      </Item>
    </div>
  );
}

function Item({ num, title, currentOpen, onClick: handleClick, children }) {
  const isOpen = num === currentOpen;

  return (
    <div
      className={`item ${isOpen ? 'open' : ''}`}
      onClick={() => handleClick(num)}
    >
      <div className="number">{num < 10 ? `0${num}` : num}</div>
      <div className="title">{title}</div>
      <div className="icon">{isOpen ? '-' : '+'}</div>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
