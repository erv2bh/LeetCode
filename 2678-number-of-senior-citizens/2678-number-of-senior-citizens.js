/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  let count = 0;
    
  details.forEach(detail => {
    let age = parseInt(detail.substring(11, 13), 10);

    if (age > 60) {
      count++;
    }
  });

  return count;
};
