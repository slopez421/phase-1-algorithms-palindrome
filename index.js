function isPalindrome(word) {
  // Write your algorithm here
  const input = word.toString()
  const array = Array.from(input)
  const map = array.map(x => x)
  const reversed = map.reverse()

  if (array[0] === reversed[0]) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  
  word goes into the function
  if the characters reversed are the same as the characters in the word
  it should return as true

  string goes into the input

*/

/*
  Add written explanation of your solution here
  When a string is passed as an argument, isPalindrome() will
  then store the string as a const and stringify it (in the case of numbers)

  Then, that const is turned into an array of indivdual letters.
  In order to check if that array is the exact same backwards, I have to
  map the array exactly as it is, and then reverse it. 

  I take the mapped array and store it to a variable, map, which then gets reversed and stored
  to a new variable. 
  then we check if the first value at index of the original array
  matches the first value of index at 0 for reversed

  if they match, returns true
  else, returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
