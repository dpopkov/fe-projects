const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// Using forEach
// const evenNumbers2 = [];
// numbers.forEach((item) => {
//   if (item % 2 === 0) {
//     evenNumbers2.push(item);
//   }
// });
// console.log(evenNumbers2);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Auto', start: 1982, end: 2005 },
  { name: 'Company Three', category: 'Retail', start: 1991, end: 2006 },
  { name: 'Company Five', category: 'Technology', start: 1971, end: 2007 },
];
// Filter technology companies:
const techCompanies = companies.filter((c) => c.category == 'Technology');
console.log(techCompanies);

// Filter companies that lasted 22 years or more:
const longCompanies = companies.filter((c) => c.end - c.start >= 22);
console.log(longCompanies);
