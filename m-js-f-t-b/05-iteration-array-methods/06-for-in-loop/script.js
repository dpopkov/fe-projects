// --------------------------
// For...in loop with objects
// --------------------------
const colorObj = {
  color1: "red",
  color2: "green",
  color3: "blue",
  color4: "orange",
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// -------------------------
// For...in loop with arrays
// -------------------------
const colorArray = ["red", "green", "blue", "orange"];
for (const index in colorArray) {
  console.log(index, colorArray[index]);
}
