/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const string = s;
  const strArr = [];
  let strPop = [];
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {

      strArr.push(string[i]);
    }

    if (strArr.length == 0){
      return false;
    }

    if (string[i] === ")") {
      strPop = strArr.pop();

      if (strPop === "{" || strPop === "[") {
        return false;
      }
    } else if (string[i] === "}") {
      strPop = strArr.pop();

      if (strPop === "(" || strPop === "["){
        return false;
      }
    } else if (string[i] === "]") {
        strPop = strArr.pop();
        
        if (strPop === "(" || strPop === "{"){
        return false;
      }
    }
  }

  if (strArr.length === 0) {
    return true;
  }
  
  return false;
}
