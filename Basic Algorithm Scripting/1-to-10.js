// ----------------------
// Convert Celsius to Fahrenheit
// ----------------------

function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);

// ----------------------
// Reverse a String
// ----------------------

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

// ----------------------
// Factorialize a Number
// ----------------------

function factorialize(num) {
  if (num === 0) {
    return 1
  } else {
    return num * factorialize(num - 1);
  }
}
factorialize(5);

// ----------------------
// Find the Longest Word in a String
// ----------------------

function findLongestWordLength(str) {
  const longest = Math.max(...str.split(" ").map(word => word.length));
  return longest;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// ----------------------
// Return Largest Numbers in Arrays
// ----------------------

function largestOfFour(arr) {
  const maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    maxArr.push(Math.max(...arr[i]));
  }
  return maxArr;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// ----------------------
// Confirm the Ending
// ----------------------

function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");

// ----------------------
// Repeat a String Repeat a String
// ----------------------

function repeatStringNumTimes(str, num) {
  let repeated = "";
  for (let i = 0; i < num; i++) {
    repeated += str;
  }
  return repeated;
}
repeatStringNumTimes("abc", 3);

// ----------------------
// Truncate a String
// ----------------------

function truncateString(str, num) {
  return str.length > num ? str.substring(0, num) + '...' : str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ----------------------
// Finders Keepers
// ----------------------

function findElement(arr, func) {
  return arr.find(func);
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// ----------------------
// Boo who
// ----------------------

function booWho(bool) {
  return typeof bool === 'boolean';
}
booWho(null);