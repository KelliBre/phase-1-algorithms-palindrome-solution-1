
// Palindrome Attempt One

// function reverseString(word){
//   const wordArray =word.split("");
//   const reversedWordArray = wordArray.reverse();
//   const reversedWord = reversedWordArray.join('');
//   return reversedWord;
// }

// function isPalindrome(word) {
//   const reversedWord = reverseString(word);
//   if (word === reversedWord) {
//     return true;
//   }else{
//     return false;
//   }
// }

// Palindrome Attempt One but Refactored//
function reverseString(str){
  const reversedWord = str.split('').reverse().join('');
  return reversedWord;
}
function isPalindrome(str){
  const reversedWord = reverseString(str);
  if(str === reversedWord) {
    return true;
  }else return false;
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
