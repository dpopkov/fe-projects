import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [youLike, setYouLike] = useState(0);
  const [friendLikes, setFriendLikes] = useState(0);
  const tip = (bill * (youLike + friendLikes)) / 2 / 100;

  function handleYouLike(selectedValue) {
    setYouLike(selectedValue);
  }

  function handleFriendLikes(selectedValue) {
    setFriendLikes(selectedValue);
  }

  const options = [
    { percent: 0, descr: 'Dissatisfied (0%)' },
    { percent: 5, descr: 'It was okay (5%)' },
    { percent: 10, descr: 'It was good (10%)' },
    { percent: 20, descr: 'Absolutely amazing! (20%)' },
  ];

  function resetState(e) {
    e.preventDefault();

    setBill(0);
    setYouLike(0);
    setFriendLikes(0);
  }

  return (
    <form>
      <InputBill value={bill} onValueChange={setBill} />
      <SelectInteger
        options={options}
        selectedOption={youLike}
        onChangeSelected={handleYouLike}
      >
        How did you like the service?
      </SelectInteger>
      <SelectInteger
        options={options}
        selectedOption={friendLikes}
        onChangeSelected={handleFriendLikes}
      >
        How did your friend like the service?
      </SelectInteger>
      {bill !== 0 && (
        <>
          <Result bill={bill} tip={tip} />
          <button onClick={resetState}>Reset</button>
        </>
      )}
    </form>
  );
}

function InputBill({ value, onValueChange }) {
  return (
    <div>
      <label>
        How much was the bill?&nbsp;
        <input
          type="text"
          value={value}
          onChange={(e) => onValueChange(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
}

function SelectInteger({
  options,
  selectedOption,
  onChangeSelected,
  children,
}) {
  return (
    <p>
      {children}
      &nbsp;
      <select
        value={selectedOption}
        onChange={(e) => onChangeSelected(parseInt(e.target.value))}
      >
        {options.map((el, index) => (
          <option key={index} value={el.percent}>
            {el.descr}
          </option>
        ))}
      </select>
    </p>
  );
}

function Result({ bill, tip }) {
  const totalPay = bill + tip;
  return (
    <p className="result">
      You pay ${totalPay} (${bill} + ${tip} tip)
    </p>
  );
}
