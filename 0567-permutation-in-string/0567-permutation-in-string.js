/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const s1Len = s1.length;
  const s2Len = s2.length;

  if (s1Len > s2Len) return false;

  const s1Freq = Array(26).fill(0);
  const windowFreq = Array(26).fill(0);

  for (let i = 0; i < s1Len; i++) {
    s1Freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    windowFreq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  const matches = () => {
    for (let i = 0; i < 26; i++) {
      if (s1Freq[i] !== windowFreq[i]) return false;
    }
    return true;
  };

  for (let i = s1Len; i < s2Len; i++) {
    if (matches()) return true;

    windowFreq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    windowFreq[s2.charCodeAt(i - s1Len) - 'a'.charCodeAt(0)]--;
  }

  return matches();
};