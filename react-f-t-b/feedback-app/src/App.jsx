// import './App.css'

function App() {
  const title = 'Blog Post';
  const body = 'This is blog post about Conditionals in JSX';
  const comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
  ];
  const loading = false;
  const showComments = true;
  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          // Each child in a list should have a unique "key" prop:
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {/* 
      ------------
      No condition 
      ------------
      */}
      {commentBlock}

      {/* 
      ----------------------
      Using ternary operator
      ----------------------
      */}
      {
        showComments
          ? commentBlock
          : null /* Or you can use another output instead of null */
      }

      {/* 
      -----------------
      Using && operator
      ----------------- 
      */}
      {showComments && commentBlock}
    </div>
  );
}

export default App;
