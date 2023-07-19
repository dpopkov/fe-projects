const post = {
    id: 1,
    title: "Post One",
    body: "Body of post"
};

console.log(post, typeof post);
// Object { id: 1, title: "Post One", body: "Body of post" } object

// Convert Object to JSON string:
const str = JSON.stringify(post);

console.log(str, typeof str);
// {"id":1,"title":"Post One","body":"Body of post"} string

// Parse JSON string to Object:
const obj = JSON.parse(str);
console.log(obj, typeof obj);
// Object { id: 1, title: "Post One", body: "Body of post" } object

const posts = [
    {
        id: 1,
        title: "Post One",
        body: "Body of post"
    },
    {
        id: 2,
        title: "Post Two",
        body: "Body of post"
    }
];
const postsStr = JSON.stringify(posts);
console.log(postsStr);
// [{"id":1,"title":"Post One","body":"Body of post"},{"id":2,"title":"Post Two","body":"Body of post"}]