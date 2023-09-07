import { useState } from 'react';
import { Button } from './Button';

export function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState('');

  function handleAddFriend(e) {
    e.preventDefault();

    const newName = name.trim();
    if (newName) {
      const newFriend = {
        id: crypto.randomUUID(),
        name: newName,
        balance: 0,
      };
      onAddFriend(newFriend);
      setName('');
    }
  }

  return (
    <div>
      <form className="input-form add-form" onSubmit={handleAddFriend}>
        <label>Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div></div>
        <Button>Add</Button>
      </form>
    </div>
  );
}
