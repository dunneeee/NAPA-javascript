/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // The set will not contain duplicate elements
  const set = new Set(nums);
  // Delete the old array and convert it to a new array
  nums.splice(0, nums.length);
  nums.push(...set);
  return set.size;
};

const nums = [1, 1, 2];

console.log(removeDuplicates(nums), nums);
