const services = ["Login", "Mail", "Weather", "News"];

// console.log(services.__proto__);

// services.forEach(function (item) {
//   console.log(item);
// });

// ---------------------------
// forEach with arrow function
// ---------------------------
// services.forEach((item) => console.log(item));
// services.forEach((item, index) => console.log(`${item} at index ${index}`));
services.forEach((item, index, arr) =>
  console.log(`${item} at index ${index} in ${arr}`)
);

// ---------------------
// forEach with function
// ---------------------
function logService(service) {
  console.log(`Logging into ${service}...`);
}
services.forEach(logService);

// --------------------
// forEach with objects
// --------------------
const serviceObjs = [
  { name: "Login", url: "https://login.test" },
  { name: "Mail", url: "https://mail.test" },
  { name: "Weather", url: "https://weather.test" },
  { name: "News", url: "https://news.test" },
];
serviceObjs.forEach((item) => console.log(item.url));
