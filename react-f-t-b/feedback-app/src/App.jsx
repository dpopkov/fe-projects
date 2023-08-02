// import './App.css'

function App() {
  const title = 'Blog Post';
  const body = 'This is blog post about Dynamic Values and Lists in JSX';
  const comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
  ];

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            // Each child in a list should have a unique "key" prop:
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
