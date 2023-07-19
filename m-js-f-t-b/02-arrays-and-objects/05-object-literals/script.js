const person = {
    name: 'Jane Doe',
    age: 30,
    isAdmin: false,
    address: {
        street: '123 Warm st',
        city: 'Macapadrid',
        state: 'AB'
    },
    hobbies: [
        'eating', 'sleeping'
    ]
};

console.log(person);
console.log(person.name);
console.log(person['age']);
console.log(person.isAdmin);
console.log(person['address']);
console.log(person.hobbies);

// Mofify Properties
person.name = 'Jack Doe';
person['isAdmin'] = true;
console.log(person);

// Add Properties
person.hasShildren = true;
console.log(person);

// Delete Properties
delete person.isAdmin;
console.log(person);

// Add Function
person.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
}
person.greet();