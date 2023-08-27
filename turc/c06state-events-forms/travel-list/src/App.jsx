import { useState } from 'react';
import './App.css';

function Logo() {
  return <h1>Travel List</h1>;
}

function AddForm() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log('submit form, new item:', newItem);

    resetControls();
  }

  function resetControls() {
    setQuantity(1);
    setDescription('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <span>What do you need for your trip?</span>
      <select
        name="amount"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Book', quantity: 1, packed: true },
];

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <div className="actions">
        <select name="sortby" id="">
          <option value="byinput">Sort by input order</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span className={item.packed ? 'packed' : ''}>
        {item.quantity} {item.description}
      </span>
      <button>&times;</button>
    </li>
  );
}

export default function App() {
  return (
    <div className="app">
      <Logo />
      <AddForm />
      <PackingList />
      <Stats />
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list. You already packed 0 (0%)
    </footer>
  );
}
