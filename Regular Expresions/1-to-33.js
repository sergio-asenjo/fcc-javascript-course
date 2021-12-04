// ----------------------
// Using the Test Method
// ----------------------

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// ----------------------
// Match Literal Strings
// ----------------------

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

// ----------------------
// Match a Literal String with Different Possibilities
// ----------------------

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// ----------------------
// Ignore Case While Matching
// ----------------------

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

// ----------------------
// Extract Matches
// ----------------------

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// ----------------------
// Find More Than the First Match
// ----------------------

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex);

// ----------------------
// Match Anything with Wildcard Period
// ----------------------

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// ----------------------
// Match Single Character with Multiple Possibilities
// ----------------------

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

// ----------------------
// Match Letters of the Alphabet
// ----------------------

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

// ----------------------
// Match Numbers and Letters of the Alphabet
// ----------------------

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);

// ----------------------
// Match Single Characters Not Specified
// ----------------------

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

// ----------------------
// Match Characters that Occur One or More Times
// ----------------------

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

// ----------------------
// Match Characters that Occur Zero or More Times
// ----------------------

let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

// ----------------------
// Find Characters with Lazy Matching
// ----------------------

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[0-9]*?>/;
let result = text.match(myRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

// ----------------------
// Find One or More Criminals in a Hunt
// ----------------------

let reCriminals = /C+/g;

// ----------------------
// Match Beginning String Patterns
// ----------------------

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// ----------------------
// Match Ending String Patterns
// ----------------------

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// ----------------------
// Match All Letters and Numbers
// ----------------------

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

// ----------------------
// Match Everything But Letters and Numbers
// ----------------------

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

// ----------------------
// Match All Numbers
// ----------------------

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;