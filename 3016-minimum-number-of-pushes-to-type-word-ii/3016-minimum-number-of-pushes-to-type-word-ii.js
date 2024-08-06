/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  const charFreq = {};
    for (let char of word) {
      charFreq[char] = (charFreq[char] || 0) + 1;
    }

    const sortedFreq = Object.values(charFreq).sort((a, b) => b - a);

    let totalPushes = 0;
    let keysPushed = 0;

    for (let i = 0; i < sortedFreq.length; i++) {
      const pushesPerChar = Math.floor(i / 8) + 1;
      totalPushes += sortedFreq[i] * pushesPerChar;
      keysPushed++;
    }

    return totalPushes;
};