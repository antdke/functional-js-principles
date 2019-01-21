// Anthony Dike
// FUNCTIONAL PROGRAMMING PRINCIPLES THAT TRANSLATE TO REACT

// CONST & LET

// ARROW FUNCTIONS
sayHello = name => console.log(`Hello ${name}`);

sayHello('Anthony :)');

const fruits = ['Apples', 'Oranges', 'Pears'];
// FOREACH
// a way to loop thru an array and do something in each iteration

fruits.forEach((fruit, index) => {
  console.log(fruit);
});

// MAP
// works like foreach but it returns an array and you can change each item in the array
// we use map in React to loop thru 'list items' (in JSX)

const singleFruit = fruits.map(fruit => fruit.slice(0, -1));

const firstLetterFruit = fruits.map(fruit => fruit.slice(0, 1));

const aBunchOfS = fruits.map(fruit => fruit.slice(-1).toUpperCase());

console.log(singleFruit);
console.log(firstLetterFruit);
console.log(aBunchOfS);

// FILTER
// similar to foreach and map (high order function)
// its used to return an array w things filtered out
// usually used in state management and context api (data) to filter out data
const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

const withoutBob = people.filter(person => person.id !== 2);
console.log(withoutBob);

// SPREAD
// allows us to 'spread values out' & 'copy' values whether they're array elements or object properties

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
// spread w filter
const arrNoEven = [...arr2.filter(num => num % 2 !== 0)];

console.log(arr2);
console.log(`This is an array w/o even numbers: ${arrNoEven}`);

const person = {
  name: 'Anthony',
  age: 19
};

const personWithEmail = {
  ...person,
  email: 'anthony@gmail.com'
};

console.log(personWithEmail);

// DESTRUCTURING
// pulling values out of objects and arrays

const profile = {
  myName: 'Anthony Dike',
  address: {
    street: '123 Seasame St',
    city: 'New York City'
  },
  hobbies: {
    sports: {
      favoritePlayer: 'Lebron James',
      favoriteSport: 'Basketball'
    },
    music: {
      favoriteArtist: 'Kendrick Lamar',
      favoriteGenre: 'Hip-Hop'
    }
  },
  favoriteColors: ['blue', 'white', 'pink'],
  favoriteNumbers: [2, 12, 21, 72],
  crush: 'Daviana'
};

const { favoriteColors, myName, favoriteNumbers } = profile;
const { favoriteSport, favoritePlayer } = profile.hobbies.sports;
const { favoriteArtist, favoriteGenre } = profile.hobbies.music;

console.log(`${myName}'s favorite colors are: ${favoriteColors}`);
console.log(
  `${myName}'s jersey number on his high school ${favoriteSport} team was ${
    favoriteNumbers[2]
  }.
  His favorite ${favoriteSport} player is ${favoritePlayer}.`
);
console.log(`${myName} loves ${favoriteGenre}.
His favorite artist is ${favoriteArtist}`);

// CLASSES
// 2 types of react components: functional and class-based
// React component class is an ES6 class
class Person {
  constructor(pName, age) {
    // class properties
    this.pName = pName;
    this.age = age;
  }

  // class method
  greet() {
    return `Hello, my name is ${this.pName} and I am ${this.age}`;
  }
}

// instantiating objects
const person1 = new Person('Anthony', 19);
const person2 = new Person('Erica', 21);

console.log(person1.greet());

// SUBCLASSES or CHILD CLASSES
// extending a class
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  myBalance() {
    return `${this.name}'s balance is $${this.balance}.00`;
  }
}

const customer1 = new Customer('Anthony', 19, 360000);

console.log(customer1.myBalance());

// MODULES
// importing and exporting components
// we can export and import any data types

//example
// file 1 (file.js)
// export const name = 'Jeff';
// export const nums = [1, 2, 3];
// export default Person;

// file 2 (file2.js)
// import { name, nums } from './file1';
// import Person from './file1'; // didnt have to use curly braces because it was exported as default
