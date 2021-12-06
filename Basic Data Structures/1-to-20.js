// ----------------------
// Use an Array to Store a Collection of Data
// ----------------------

let yourArray = ['Hello', 4, true, false, 'Bye'];

// ----------------------
// Access an Array's Contents Using Bracket Notation
// ----------------------

let myArray = ["a", "b", "c", "d"];
myArray[1] = "v"
console.log(myArray);

// ----------------------
// Add Items to an Array with push() and unshift()
// ----------------------

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// ----------------------
// Remove Items from an Array with pop() and shift()
// ----------------------

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// ----------------------
// Remove Items Using splice()
// ----------------------

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

// ----------------------
// Add Items Using splice()
// ----------------------

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// ----------------------
// Copy Array Items Using slice()
// ----------------------

function forecast(arr) {
  const weather = arr.slice(1, 2);
  return weather;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// ----------------------
// Copy an Array with the Spread Operator
// ----------------------

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// ----------------------
// Combine Arrays with the Spread Operator
// ----------------------

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());

// ----------------------
// Check For The Presence of an Element With indexOf()
// ----------------------

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) > -1) {
    return true;
  } else {
    return false;
  }
}

function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// ----------------------
// Iterate Through All an Array's Items Using For Loops
// ----------------------

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(elem)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// ----------------------
// Create complex multi-dimensional arrays
// ----------------------

let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  [["loop", "shift", 6, 7, 1000, "method", "deep"]],
  [[["concat", false, true, "spread", "array", "deeper"]]],
  [[[["mutate", 1327.98, "splice", "slice", "push", "deepest"]]]],
];

// ----------------------
// Add Key-Value Pairs to JavaScript Objects
// ----------------------

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods['grapes'] = 35;
const strawberries = 'strawberries'
foods[strawberries] = 27;

console.log(foods);

// ----------------------
// Modify an Object Nested Within an Object
// ----------------------

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

console.log(userActivity);

// ----------------------
// Access Property Names with Bracket Notation
// ----------------------

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));

// ----------------------
// Use the delete Keyword to Remove Object Properties
// ----------------------

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

// ----------------------
// Check if an Object has a Property
// ----------------------

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  return (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  );
}

console.log(isEveryoneHere(users));

// ----------------------
// Iterate Through the Keys of an Object with a for...in Statement
// ----------------------

function countOnline(usersObj) {
  let amount = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      amount += 1;
    }
  }
  return amount;
}

// ----------------------
// Generate an Array of All Object Keys with Object.keys()
// ----------------------

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  let arr;
  arr = Object.keys(obj);
  return arr;
}

console.log(getArrayOfUsers(users));

// ----------------------
// Modify an Array Stored in an Object
// ----------------------

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  userObj["data"]["friends"].push(friend);
  return userObj["data"]["friends"];
}

console.log(addFriend(user, "Pete"));