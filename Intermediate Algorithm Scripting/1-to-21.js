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
  let spRegex = /\s|_|(?=[A-Z])/;
  return str.split(spRegex).join("-").toLowerCase();
}

spinalCase("This Is Spinal Tap");

// ----------------------
// Spinal Tap Case
// ----------------------

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
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
    if (
      String.fromCharCode(str.charCodeAt(j)) != String.fromCharCode(strCodes[j])
    ) {
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
  return [...new Set(arr.flat())];
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
    "'": "&apos;",
  };

  return str.replace(/([<>"'&])/g, (htmlelem) => {
    return html[htmlelem];
  });
}

convertHTML("Dolce & Gabbana");

// ----------------------
// Sum All Odd Fibonacci Numbers
// ----------------------

function sumFibs(num) {
  let arr = [1, 1];
  let odd = 2;
  let i = 1;

  while (arr[i] + arr[i - 1] <= num) {
    arr.push(arr[i] + arr[i - 1]);
    if (arr[i + 1] % 2 !== 0) {
      odd += arr[i + 1];
    }
    i++;
  }
  return odd;
}

sumFibs(4);

// ----------------------
// Sum All Primes
// ----------------------

function sumPrimes(num) {
  let sum = 0;

  for (var i = 2; i <= num; i++) {
    let divider = 2;
    while (i % divider !== 0) {
      divider++;
    }
    if (i === divider) {
      sum += i;
    }
  }
  return sum;
}

// ----------------------
// Smallest Common Multiple
// ----------------------

function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiple = max;

  for (let i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max;
      i = max;
    }
  }

  return multiple;
}

smallestCommons([1, 5]);

// ----------------------
// Drop it
// ----------------------

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

// ----------------------
// Steamroller
// ----------------------

function steamrollArray(arr) {
  var flatArr = [];

  for (let elem of arr) {
    if (Array.isArray(elem)) flatArr = flatArr.concat(steamrollArray(elem));
    else flatArr.push(elem);
  }
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

// ----------------------
// Binary Agents
// ----------------------

function binaryAgent(str) {
  let binArr = str.split(" ");
  let eng = binArr.map((bin) => {
    return String.fromCharCode(parseInt(bin, 2));
  });
  return eng.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// ----------------------
// Everything Be True
// ----------------------

function truthCheck(collection, pre) {
  return collection.every((obj) => {
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  });
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

// ----------------------
// Arguments Optional
// ----------------------

function addTogether() {
  let firstElem = arguments[0];
  let secondElem = arguments[1];
  if (typeof firstElem !== "number") return undefined;
  if (secondElem === undefined)
    return (secondElem) => {
      return addTogether(firstElem, secondElem);
    };
  if (typeof secondElem !== "number") return undefined;
  return firstElem + secondElem;
}

addTogether(2, 3);

// ----------------------
// Make a Person
// ----------------------

const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.setFirstName = (name) => {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = (name) => {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = (name) => {
    fullName = name;
  };

  this.getFirstName = () => {
    return fullName.split(" ")[0];
  };

  this.getLastName = () => {
    return fullName.split(" ")[1];
  };

  this.getFullName = () => {
    return fullName;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();

// ----------------------
// Map the Debris
// ----------------------

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  arr.forEach((obj) => {
    obj.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));;
    delete obj.avgAlt;
  });
  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
