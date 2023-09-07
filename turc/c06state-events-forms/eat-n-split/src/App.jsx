import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { SplitBillForm } from './components/SplitBillForm';
import { AddFriendForm } from './components/AddFriendForm';
import { FriendsList } from './components/FriendsList';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    balance: 0,
  },
];

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function toggleShowAddFriend() {
    setShowAddFriend((s) => !s);
  }

  function handleAddFriendToList(newFriend) {
    setFriendsList((list) => [...list, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((currentSelected) =>
      currentSelected?.id === friend.id ? null : friend
    );
    // setShowAddFriend(false);
  }

  function handleChangeBalance(balanceDiff) {
    setFriendsList((list) =>
      list.map((el) =>
        el.id === selectedFriend?.id
          ? { ...el, balance: el.balance + balanceDiff }
          : el
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="friends">
        <FriendsList
          data={friendsList}
          selectedFriend={selectedFriend}
          onSelection={handleSelectFriend}
        />
        {showAddFriend && <AddFriendForm onAddFriend={handleAddFriendToList} />}
        <Button onClick={toggleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      <div>
        {selectedFriend && (
          <SplitBillForm
            friend={selectedFriend}
            onChangeBalance={handleChangeBalance}
          />
        )}
      </div>
    </div>
  );
}
