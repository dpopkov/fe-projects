import { Button } from './Button';

export function FriendsList({ data, onSelection, selectedFriend }) {
  return (
    <div>
      {data.map((el, index) => (
        <Friend
          friend={el}
          key={index}
          onSelection={onSelection}
          isSelected={el.id === selectedFriend?.id}
        />
      ))}
    </div>
  );
}
function Friend({ friend, onSelection, isSelected }) {
  return (
    <div className={`friend ${isSelected ? 'selected' : ''}`}>
      <div className="friend-info">
        <h3>{friend.name}</h3>
        <FriendStatus friend={friend} />
      </div>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </div>
  );
}
function FriendStatus({ friend }) {
  if (friend.balance < 0) {
    return (
      <p className="negative-balance">
        You owe {friend.name} ${Math.abs(friend.balance)}
      </p>
    );
  } else if (friend.balance > 0) {
    return (
      <p className="positive-balance">
        {' '}
        {friend.name} owes you ${friend.balance}
      </p>
    );
  } else {
    return <p>You and {friend.name} are even</p>;
  }
}
