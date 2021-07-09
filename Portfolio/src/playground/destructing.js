//
//  OBJECT DESTRUCTING
//  

const person = {
    name : 'Siddharth',
    age : 24,
    location : {
        city : 'Jabalpur',
        State : 'MP',
        temp : 92
    }
}

console.log(person)

const {name, age} = person;

// console.log(`${person.name} is ${person.age} year old.`);

console.log(`My name is ${name} and I am ${age} year old.`);

// temperature will be a local variable created using temp property of person.location object
const { temp : temperature = 10, city = 'Nagpur'} = person.location;

console.log(`It is ${temperature} degrees in ${city}`)

const book = {
    title : 'Ego is the enemy',
    author : 'Ryan Holiday',
    publisher : {
        // name : 'Penguin'
    }
};

const { name : publisherName = 'Self Published' } = book.publisher;

console.log(publisherName);

//
//  ARRAY DESTRUCTING
//  

const address = ['1229 S Juniper Street', 'Philadelphia', 'Pennsylvania', '12141'];

const [street, City, state, zip] = address;

const [, , state1 = 'New York', zip1] = address;

console.log(`You are in ${City} ${state}`)

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , price] = item;
console.log(`A medium ${itemName} cost ${price}`);