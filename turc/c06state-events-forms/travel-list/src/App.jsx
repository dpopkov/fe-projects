import { useState } from 'react';
import './App.css';

function Logo() {
  return <h1>Travel List</h1>;
}

function AddForm({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { quantity, description, packed: false, id: Date.now() };
    onAddItems(newItem);

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

function PackingList({ items, onDeleteItem, onUpdatePacked, onClearList }) {
  const [sortBy, setSortBy] = useState('packed');

  let sortedItems;
  if (sortBy === 'input') {
    sortedItems = items;
  } else if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'packed') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onUpdatePacked={onUpdatePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onUpdatePacked }) {
  function handlePacked(e) {
    onUpdatePacked(item.id, e.target.checked);
  }

  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={handlePacked} />
      <span className={item.packed ? 'packed' : ''}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  function handleDelete(itemId) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  }

  function handleUpdateItemPacked(itemId, isPacked) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, packed: isPacked } : item
      )
    );
  }

  function handleClearList() {
    if (confirm('Are you sure to delete all items?')) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <AddForm onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onUpdatePacked={handleUpdateItemPacked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Stats({ items }) {
  const numTotal = items.length;
  if (numTotal === 0) {
    return (
      <footer className="stats">
        Your list is emtpy. Start adding some items!
      </footer>
    );
  }
  const numPacked = items.reduce((acc, item) => acc + (item.packed ? 1 : 0), 0);
  const percentage = ((numPacked / numTotal) * 100).toFixed(1);

  return (
    <footer className="stats">
      {numTotal !== numPacked
        ? `You have ${numTotal} items on your list. You already packed ${numPacked} (${percentage}%)`
        : 'You got everything! Ready to go!'}
    </footer>
  );
}
