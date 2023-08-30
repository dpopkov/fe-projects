export default function Item({ item, onDeleteItem, onUpdatePacked }) {
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
