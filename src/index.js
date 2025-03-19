// Creating Objects
console.log('----------------------------');

// An object literal that is not assigned to a variable or
// placed inside of a function call.
// Uncomment the lines below to see the SyntaxError raised
// {
//   breakfast: 'Cereal',
//   lunch: 'Sandwich',
//   dinner: 'Japchae'
// };

// An object literal assigned to a variable
const myMealsObj = {
  breakfast: 'Cereal',
  lunch: 'Sandwich',
  dinner: 'Japchae'
};

// An object literal passed as an argument to a function
console.log('Object literal as a function argument:', {
  breakfast: 'Cereal',
  lunch: 'Sandwich',
  dinner: 'Japchae'
});

let result;

const testObj = {
  someNum: 5,
  someStr: 'this is a test string',
  someNestedObj: {
    someOtherNum: 4,
  }
};

// Dot notation
console.log('----------------------------');

result = testObj.someStr;
console.log('Dot notation:', result);

// Square bracket notation
console.log('----------------------------');

result = testObj['someStr'];
console.log('Square bracket notation:', result);

const keyToGetSomeValue = 'someStr';
result = testObj[keyToGetSomeValue];
console.log('Square bracket notation with a variable:', result);

// Nested Objects
console.log('----------------------------');

const resultA = testObj.someNestedObj.someOtherNum;
const resultB = testObj['someNestedObj']['someOtherNum'];
const resultC = testObj.someNestedObj['someOtherNum'];
const resultD = testObj['someNestedObj'].someOtherNum;

console.log('Various ways of accessing nested objects:', resultA, resultB, resultC, resultD);

// Functions Are Objects
console.log('----------------------------');

const sayHelloWorld = function sayHelloWorld() {
  console.log('yeah let\'s goooooooooo!');
};

console.log('Function\'s name property:', sayHelloWorld.name);

console.log('The function itself:', sayHelloWorld);

// Objects Can Hold Functions
console.log('----------------------------');

const shoutMyName = function shoutMyName() {
  console.log('Kiki!!!');
};

const employee = {
  name: 'Kiki',
  pronouns: 'they/she',
  greeting: shoutMyName
};

console.log('The value of the greeting property is the function shoutMyName:', employee.greeting);
console.log('We invoke the function in the greeting property by using parentheses ()!!!!');
employee.greeting();