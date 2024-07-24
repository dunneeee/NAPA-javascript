/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vs = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const m = s.length / 2;
  let v1 = 0;
  let v2 = 0;
  // Count the vowels of the 2 strings
  for (let i = 0; i < m; i++) {
    if (vs.includes(s.charAt(i))) v1++;
    if (vs.includes(s.charAt(m + i))) v2++;
  }

  return v1 === v2;
};

console.log(halvesAreAlike("textbook"));
