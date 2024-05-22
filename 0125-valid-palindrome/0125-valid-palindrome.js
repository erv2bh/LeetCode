/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const filteredStr = Array.from(s)
        .filter(char => /[a-zA-Z0-9]/.test(char))
        .map(char => char.toLowerCase())
        .join("");

  const reversedStr = filteredStr.split("").reverse().join("");

  return filteredStr === reversedStr;
};
