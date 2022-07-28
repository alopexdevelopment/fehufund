// OBJECT DESTRUCTURING

const person = {
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
}

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);




// ARRAY DESTRUCTURING
const address = ['1234 thow it back lane', 'chicago', 'illinois', '19147'];

const [street, city, state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffeeName, , price] = item;
console.log(`A medium ${coffeeName} costs ${price}`)

