const library = [
    {
        title: 'Core Java',
        author: 'K.Horstmann',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'React Quickly',
        author: 'J.Horst',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'CSS in Depth',
        author: 'C.Kormoon',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];
console.log(library);

library.forEach(book => book.status.read = true);
console.log(library);

const { title: firstBook } = library[0];
console.log(`firstBook = ${firstBook}`);

const str = JSON.stringify(library);
console.log(str);