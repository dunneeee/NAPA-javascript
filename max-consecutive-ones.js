/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let r = 0;
  let ml = 0;
  for (let i = 0; i < nums.length; i++) {
    // If the element is equal to 1, increase the remaining counter variable and compare it with the result. If the counter variable is larger, the result will be reassigned.
    if (nums[i] === 1) {
      ml++;
    } else {
      if (ml > r) r = ml;
      ml = 0;
    }
  }

  if (ml > r) r = ml;

  return r;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
