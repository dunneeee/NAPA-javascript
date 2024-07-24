/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    // Checks if the character begins with the opening parentheses to be added to the stack
    if (c == "(" || c == "[" || c == "{") {
      stack.push(c);
      continue;
    }
    // Checks if a parenthesized character matches the last character in the stack
    const l = stack[stack.length - 1];

    if (
      (l == "(" && c == ")") ||
      (l == "[" && c == "]") ||
      (l == "{" && c == "}")
    ) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
