function palindrome(str) {
  let nonAlpha = new RegExp(/[^a-zA-Z0-9]/gi);
  str = str.replace(nonAlpha, "").toLowerCase().split("");
  let original = [...str];
  let reversed = [...str].reverse();

  function equal(org, rvrsd) {
    return (
      org.length === rvrsd.length &&
      org.every((value, index) => value === rvrsd[index])
    );
  }

  return equal(original, reversed);
}

palindrome("eye");
