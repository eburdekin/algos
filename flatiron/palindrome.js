function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedArray = wordArray.reverse();
  // create a string for the reversed array
  const reversedWord = reversedArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  const drow = reverseString(word);
  return drow === word;
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("racecar");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("eileen");
  console.log("=>", isPalindrome("eileen"));
}
