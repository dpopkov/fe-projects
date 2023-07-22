// -------------------
// Loop through arrays
// -------------------
const items = ["book", "table", "chair", "kite"];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

for (const item of items) {
  console.log(item);
}

const users = [{ name: "Jack" }, { name: "Kate" }, { name: "Linus" }];
for (const user of users) {
  console.log(user.name);
}

// --------------------
// Loop through strings
// --------------------
const str = "Hello JavaScript";
for (const letter of str) {
  console.log(letter);
}

// --------------
// Loop over Maps
// --------------
const map = new Map();
map.set("name", "Jack");
map.set("age", 30);
for (const [key, value] of map) {
  console.log(key, value);
}
