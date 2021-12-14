function convertToRoman(num) {
  let converted = "";
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let keys = Object.keys(roman);

  for (let i = 0; i < keys.length; i++) {
    while (roman[keys[i]] <= num) {
      converted += keys[i];
      num -= roman[keys[i]];
    }
  }

  return converted;
}

convertToRoman(36);
