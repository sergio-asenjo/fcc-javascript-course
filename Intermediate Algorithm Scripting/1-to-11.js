// ----------------------
// Sum All Numbers in a Range
// ----------------------

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// ----------------------
// Diff Two Arrays
// ----------------------

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((item) => {
    return !arr1.includes(item) || !arr2.includes(item);
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// ----------------------
// Seek and Destroy
// ----------------------

function destroyer(arr, ...toRemove) {
  return arr.filter((value) => {
    return !toRemove.includes(value);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// ----------------------
// Wherefore art thou
// ----------------------

function whatIsInAName(collection, source) {
  let arr = collection.filter((item) => {
    for (let elem in source) {
      if (source[elem] != item[elem]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

// ----------------------
// Spinal Tap Case
// ----------------------

function spinalCase(str) {
  let spRegex = /\s|_|(?=[A-Z])/
  return str.split(spRegex).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');

// ----------------------
// Spinal Tap Case
// ----------------------

function translatePigLatin(str) {
  return str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");

// ----------------------
// Spinal Tap Case
// ----------------------

function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
  } else if (before.charAt(0) === before.charAt(0).toLowerCase()) {
    after = after.replace(after.charAt(0), after.charAt(0).toLowerCase());
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// ----------------------
// DNA Pairing
// ----------------------

function pairElement(str) {
  return str.split("").map((char) => {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
      case "T":
        return ["T", "A"];
    }
  });
}

pairElement("GCG");

// ----------------------
// Missing letters
// ----------------------

function fearNotLetter(str) {
  let start = str.charCodeAt(0);
  let end = str.charCodeAt(str.length - 1);
  let strCodes = [];

  for (let i = start; i < end; i++) {
    strCodes.push(i);
  }

  for (let j = 0; j < strCodes.length; j++) {
    if (String.fromCharCode(str.charCodeAt(j)) != String.fromCharCode(strCodes[j])) {
      return String.fromCharCode(strCodes[j]);
    }
  }

  return undefined;
}

fearNotLetter("abce");

// ----------------------
// Sorted Union
// ----------------------

function uniteUnique(...arr) {
  return [...new Set(arr.flat())]
}

// ----------------------
// Convert HTML Entities
// ----------------------

function convertHTML(str) {
  const html = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str.replace(/([<>"'&])/g, (htmlelem) => { return html[htmlelem] });
}

convertHTML("Dolce & Gabbana");