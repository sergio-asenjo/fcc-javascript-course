// Basic JavaScript.

// ----------------------
// Comment Your JavaScript Code
// ----------------------

// Short comment.

/* Multi
*  line
*  comment
*/

// ----------------------
// Declare JavaScript Variables
// ----------------------

// JS has 8 data types.
/*
   undefined,
   null,
   boolean,
   string,
   symbol,
   bigint,
   number,
   object.
 */

// A variable can be defined by using the keyword var.

var myName;

// Variables can be made of numbers, letters, and $ or _.
// Semicolons are needed to make clear the end of a statement.

// ----------------------
// Storing Values with the Assignment Operator
// ----------------------

/* Assignment can be done with the = operator.
   JS uses type inference to determine the type of a variable.
   var myVar = 5;
   If there are any calculations to the right of the = operator,
   those are performed before the value is assigned to the variable on the left of the operator.
 */

// Setup
var a;

// Only change code below this line
a = 7;

// ----------------------
// Assigning the Value of One Variable to Another
// ----------------------

/* There's the possibility to assign to a variable
   the value of a different variable.
 */

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

/* If it's a value type, assigning a variable to other variable
   makes the second one to hold a copy and no a reference to
   the other variable, unless you're using objects.
*/

// ^ https://stackoverflow.com/questions/50840293/setting-a-variable-equal-to-another-variable

// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

// ----------------------
// Initializing Variables with the Assignment Operator
// ----------------------

// Variables can be initialized in the same line of defining them.

var a = 9;

// ----------------------
// Declare String Variables
// ----------------------

// JS supports string literals by using double or single quotes.

var myFirstName = "Sergio";
var myLastName = 'Asenjo';

// JS supports backticks too, which allows string interpolation and
// template literals.

// https://blog.bitsrc.io/double-quotes-vs-single-quotes-vs-backticks-in-javascript-3cab5aaea55
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// ----------------------
// Understanding Uninitialized Variables
// ----------------------

/*
   Initial values for declared variables is undefined, unless
   you initialize them with a value in the same line.
   Performing a mathematical operation in an undefined var
   results in NaN (Not a Number).
   Performing concatenation in an undefined var results
   in a literal string of undefined.
*/

// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = 5;
b = 10;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// ----------------------
// Understanding Case Sensitivity in Variables
// ----------------------

// Variables and function names are case sensitive.
// It is recommended to write JS var names in camelCase.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// ----------------------
// Explore Differences Between the var and let Keywords
// ----------------------

// var allows to override by declaring twice.
// let raises an error by declaring twice.
// Both have different scope too.

let catName = "Oliver";
let catSound = "Meow!";

// ----------------------
// Declare a Read-Only Variable with the const Keyword
// ----------------------

// const can be use to declare a constant, read-only variable.
// Uppercase it's preferred for naming conventions.

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// ----------------------
// Add Two Numbers with JavaScript
// ----------------------

const sum = 10 + 10;

// ----------------------
// Subtract One Number from Another with JavaScript
// ----------------------

const difference = 45 - 33;

// ----------------------
// Subtract One Number from Another with JavaScript
// ----------------------

const product = 8 * 10;

// ----------------------
// Divide One Number by Another with JavaScript
// ----------------------

const quotient = 66 / 33;

// ----------------------
// Increment a Number with JavaScript
// ----------------------

// The ++ operator can be used as a replacement for
// using i = i + 1;

let myVar = 87;

// Only change code below this line
myVar++;

// ----------------------
// Decrement a Number with JavaScript
// ----------------------

let myVar = 11;

// Only change code below this line
myVar--;

// ----------------------
// Create Decimal Numbers with JavaScript
// ----------------------

// number type supports decimals too,
// also called floats.

const ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 2.30;

// ----------------------
// Multiply Two Decimals with JavaScript
// ----------------------

const product = 2.0 * 2.5;

// ----------------------
// Divide One Decimal by Another with JavaScript
// ----------------------

const quotient = 4.4 / 2.0; // Change this line

// ----------------------
// Finding a Remainder in JavaScript
// ----------------------

// The % operator is used for remainder.
// The modulus operator works different for negative numbers.

const remainder = 11 % 3;

// ----------------------
// Compound Assignment With Augmented Addition
// ----------------------

// The += operator can be use as shorthanded version
// of myVar = myVar + 5. This would be equal to
// myVar += 5;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// ----------------------
// Compound Assignment With Augmented Subtraction
// ----------------------

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// ----------------------
// Compound Assignment With Augmented Multiplication
// ----------------------

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// ----------------------
// Compound Assignment With Augmented Division
// ----------------------

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// ----------------------
// Escaping Literal Quotes in Strings
// ----------------------

// A \ can be used for escaping.

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// ----------------------
// Quoting Strings with Single Quotes
// ----------------------

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// ----------------------
// Escape Sequences in Strings
// ----------------------

// There's the possibility to escape other characters, like \n, \t, \r.

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// ----------------------
// Concatenating Strings with Plus Operator
// ----------------------

const myStr = "This is the start. " + "This is the end.";

// ----------------------
// Concatenating Strings with the Plus Equals Operator
// ----------------------

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// ----------------------
// Constructing Strings with Variables
// ----------------------

const myName = "Sergio";
const myStr = "My name is " + myName + " and I am well!";

// ----------------------
// Appending Variables to Strings
// ----------------------

const someAdjective = "cool!";
let myStr = "Learning to code is ";

myStr += someAdjective;

// ----------------------
// Find the Length of a String
// ----------------------

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// ----------------------
// Use Bracket Notation to Find the First Character in a String
// ----------------------

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

// ----------------------
// Understand String Immutability
// ----------------------

// In JS, strings are immutable, they can't be altered.
// let myStr = "Bob";
// myStr[0] = "J"; Won't work.

let myStr = "Jello World";

myStr = "Hello World";

// ----------------------
// Use Bracket Notation to Find the Nth Character in a String
// ----------------------

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2];

// ----------------------
// Use Bracket Notation to Find the Last Character in a String
// ----------------------

const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1]

// ----------------------
// Use Bracket Notation to Find the Nth-to-Last Character in a String
// ----------------------

const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// ----------------------
// Word Blanks
// ----------------------

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " is very " + myAdjective + " and he " + myVerb + " very " + myAdverb;

// ----------------------
// Store Multiple Values in one Variable using JavaScript Arrays
// ----------------------

const myArray = ["String", 12];

// ----------------------
// Nest one Array within Another Array
// ----------------------

const myArray = [["Manzana", 1], ["Plátano", 2]];

// ----------------------
// Access Array Data with Indexes
// ----------------------

const myArray = [50, 60, 70];

const myData = myArray[0];

// ----------------------
// Modify Array Data With Indexes
// ----------------------

const myArray = [18, 64, 99];

myArray[0] = 45;

// ----------------------
// Access Multi-Dimensional Arrays With Indexes
// ----------------------

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// ----------------------
// Manipulate Arrays With push()
// ----------------------

const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3])

// ----------------------
// Manipulate Arrays With pop()
// ----------------------

const myArray = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray.pop();

// ----------------------
// Manipulate Arrays With shift()
// ----------------------

// Inverse of pop(), gets first element and then remove it.

const myArray = [["John", 23], ["dog", 3]];

const removedFromMyArray = myArray.shift();

// ----------------------
// Manipulate Arrays With unshift()
// ----------------------

// Inverse of push(), add an element to the beginning of an array.

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35])

// ----------------------
// Shopping List
// ----------------------

const myList = [["Banana", 5], ["Apple", 3], ["Bread", 3], ["Cookies", 500], ["Potato", 1]];

// ----------------------
// Write Reusable JavaScript with Functions
// ----------------------

function reusableFunction() {
  console.log("Hi World");
};

reusableFunction();

// ----------------------
// Passing Values to Functions with Arguments
// ----------------------

function functionWithArgs(number1, number2) {
  console.log(number1 + number2);
}

functionWithArgs(10, 15);

// ----------------------
// Return a Value from a Function with Return
// ----------------------

function timesFive(number) {
  return number * 5;
}

// ----------------------
// Global Scope and Functions
// ----------------------

const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// ----------------------
// Local Scope and Functions
// ----------------------

function myLocalScope() {
  const myVar = 2;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// ----------------------
// Global vs. Local Scope in Functions
// ----------------------

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

myOutfit();

// ----------------------
// Understanding Undefined Value returned from a Function
// ----------------------

// If a function doesn't include a return statement, it will
// default to return undefined.

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

addThree();
addFive();

// ----------------------
// Assignment with a Returned Value
// ----------------------

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// ----------------------
// Stand in Line
// ----------------------

function nextInLine(arr, item) {
  arr.push(item)
  item = arr.shift();
  return item;
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// ----------------------
// Understanding Boolean Values
// ----------------------

function welcomeToBooleans() {
  return true;
}

// ----------------------
// Use Conditional Logic with If Statements
// ----------------------

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// ----------------------
// Comparison with the Equality Operator
// ----------------------

// In order for JavaScript to compare two different data types,
// it makes type coercion.  https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// ----------------------
// Comparison with the Strict Equality Operator
// ----------------------

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// ----------------------
// Practice comparing different values
// ----------------------

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// ----------------------
// Comparison with the Inequality Operator
// ----------------------

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// ----------------------
// Comparison with the Strict Inequality Operator
// ----------------------

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// ----------------------
// Comparison with the Greater Than Operator
// ----------------------

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// ----------------------
// Comparison with the Greater Than Or Equal To Operator
// ----------------------

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// ----------------------
// Comparison with the Less Than Operator
// ----------------------

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// ----------------------
// Comparison with the Less Than Or Equal To Operator
// ----------------------

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

// ----------------------
// Comparisons with the Logical And Operator
// ----------------------

function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);

// ----------------------
// Comparisons with the Logical Or Operator
// ----------------------

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);

// ----------------------
// Introducing Else Statements
// ----------------------

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);

// ----------------------
// Introducing Else If Statements
// ----------------------

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

// ----------------------
// Logical Order in If Else Statements
// ----------------------

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

// ----------------------
// Chaining If Else Statements
// ----------------------

function testSize(num) {
  if (num < 5) return "Tiny"
  else if (num < 10) return "Small"
  else if (num < 15) return "Medium"
  else if (num < 20) return "Large"
  else if (num >= 20) return "Huge";
}

testSize(7);

// ----------------------
// Golf Code
// ----------------------

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }

  return "Change Me";
}

golfScore(5, 4);

// ----------------------
// Selecting from Many Options with Switch Statements
// ----------------------

function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);

// ----------------------
// Adding a Default Option in Switch Statements
// ----------------------

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// ----------------------
// Multiple Identical Options in Switch Statements
// ----------------------

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// ----------------------
// Replacing If Else Chains with Switch
// ----------------------

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// ----------------------
// Returning Boolean Values from Functions
// ----------------------

function isLess(a, b) {
  return a < b;
}

isLess(10, 15);

// ----------------------
// Return Early Pattern for Functions
// ----------------------

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// ----------------------
// Counting Cards
// ----------------------

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  const cc = "";
  if (count > 0) {
    return `${count} Bet`;
  }
  else {
    return `${count} Hold`;
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// ----------------------
// Build JavaScript Objects
// ----------------------

const myDog = {
  "name": "Perro",
  "legs": 4,
  "tails": 1,
  "friends": ["Gato", "Vaca"]
};

// ----------------------
// Accessing Object Properties with Dot Notation
// ----------------------

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// ----------------------
// Accessing Object Properties with Bracket Notation
// ----------------------

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

// ----------------------
// Accessing Object Properties with Variables
// ----------------------

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];

// ----------------------
// Updating Object Properties
// ----------------------

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder"

// ----------------------
// Add New Properties to a JavaScript Object
// ----------------------

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

// ----------------------
// Delete Properties from a JavaScript Object
// ----------------------

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

// ----------------------
// Using Objects for Lookups
// ----------------------

function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }

  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

// ----------------------
// Testing Objects for Properties
// ----------------------

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return 'Not Found';
  }
}

// ----------------------
// Manipulating Complex Objects
// ----------------------

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Surfaces",
    "title": "Pacifico",
    "release_year": 2021,
    "formats": [
      "CD",
      "LP"
    ],
    "gold": false
  }
];

// ----------------------
// Accessing Nested Objects
// ----------------------

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

// ----------------------
// Accessing Nested Arrays
// ---------------------- 

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// ----------------------
// Record Collection
// ---------------------- 

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  } else if (prop === 'tracks' && records[id].hasOwnProperty(prop) === false) {
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value);
  } else if (value === '') {
    delete records[id][prop]
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// ----------------------
// Iterate with JavaScript While Loops
// ---------------------- 

const myArray = [];

let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// ----------------------
// Iterate with JavaScript For Loops
// ---------------------- 

const myArray = [2, 3, 4, 5, 6];

for (let total = 0; total <= 5; total++) {
  myArray.shift();
  myArray.push(total);
}

// ----------------------
// Iterate Odd Numbers With a For Loop
// ---------------------- 

const myArray = [];

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// ----------------------
// Count Backwards With a For Loop
// ---------------------- 

const myArray = [];

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// ----------------------
// Iterate Through an Array with a For Loop
// ---------------------- 

const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// ----------------------
// Iterate with JavaScript Do...While Loops
// ---------------------- 

const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 10);

// ----------------------
// Replace Loops using Recursion
// ---------------------- 

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1]
  }
}

// ----------------------
// Profile Lookup
// ---------------------- 

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}

lookUpProfile("Akira", "likes");

// ----------------------
// Generate Random Fractions with JavaScript
// ---------------------- 

function randomFraction() {
  return Math.random();
}

// ----------------------
// Generate Random Whole Numbers with JavaScript
// ---------------------- 

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// ----------------------
// Generate Random Whole Numbers within a Range
// ---------------------- 

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

// ----------------------
// Use the parseInt Function
// ---------------------- 

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// ----------------------
// Use the parseInt Function with a Radix
// ---------------------- 

function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011");

// ----------------------
// Use the Conditional (Ternary) Operator
// ---------------------- 

function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

// ----------------------
// Use Multiple Conditional (Ternary) Operators
// ---------------------- 

function checkSign(num) {
  return (num === 0) ? 'zero' : (num > 0) ? 'positive' : 'negative';
}

checkSign(10);

// ----------------------
// Use Recursion to Create a Countdown
// ---------------------- 

function countdown(n) {
  return (n < 1) ? [] : [n].concat(countdown(n - 1));
}

// ----------------------
// Use Recursion to Create a Range of Numbers
// ---------------------- 

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
};

// ----------------------
// Compare Scopes of the var and let Keywords
// ---------------------- 

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}