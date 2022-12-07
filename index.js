function isPalindrome(word) {
  if (word.length <= 1) {
    return true;
  } else {
    if (word[0] === word[word.length - 1]) {
      isPalindrome(word.slice(1, -1));
      return true;
    } else {
      return false;
    }
  }
}
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
