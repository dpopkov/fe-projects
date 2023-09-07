import { useState } from 'react';
import { Button } from './Button';

export function SplitBillForm({ friend, onChangeBalance }) {
  const [bill, setBill] = useState('');
  const [yourExpense, setYourExpense] = useState('');
  const [pays, setPays] = useState('user');
  const friendExpense = bill ? bill - yourExpense : '';

  function handleBill(e) {
    const newBill = parseInt(e.target.value);
    if (!isNaN(newBill)) {
      setBill(newBill);
    }
  }

  function handleYourExpense(e) {
    const newExpense = parseInt(e.target.value);
    if (!isNaN(newExpense) && newExpense <= bill) {
      setYourExpense(newExpense);
    }
  }

  function handleSplit(e) {
    e.preventDefault();

    if (!bill || !yourExpense) return;

    const balanceDiff = pays == 'friend' ? -yourExpense : friendExpense;
    onChangeBalance(balanceDiff);
  }

  return (
    <form className="input-form split-form" onSubmit={handleSplit}>
      <h3>Split a bill with {friend.name}</h3>
      <div className="form-inputs">
        <label>Bill value</label>
        <input type="text" value={bill} onChange={handleBill} />

        <label>Your expense</label>
        <input type="text" value={yourExpense} onChange={handleYourExpense} />

        <label>{friend.name}&#39;s expense</label>
        <input type="text" disabled value={friendExpense} />

        <label>Who is paying the bill?</label>
        <select value={pays} onChange={(e) => setPays(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{friend.name}</option>
        </select>
        <div></div>
        <Button>Split bill</Button>
      </div>
    </form>
  );
}
