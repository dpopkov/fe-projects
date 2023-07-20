const library = [
    {
        title: 'Coree Java',
        author: 'K.Horstmen',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'React Quicklie',
        author: 'J.Horst',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'CSS in Dapth',
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