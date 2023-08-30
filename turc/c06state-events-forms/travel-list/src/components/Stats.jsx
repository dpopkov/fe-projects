export default function Stats({ items }) {
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
