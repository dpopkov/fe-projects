// function toggle(e) {
//   e.target.classList.toggle('danger');
// }
// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: 'Post One', body: 'This is post One' },
  { title: 'Post Two', body: 'This is post Two' },
  { title: 'Post Three', body: 'This is post Three' },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').insertAdjacentElement('beforeend', div);
    });
  }, 1000);
}

createPost({ title: 'Post Four', body: 'This is post Four' }, getPosts);
