import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import AddForm from './components/AddForm';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Book', quantity: 1, packed: true },
];

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
