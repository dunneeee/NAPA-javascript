/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Arrays smaller than 2 elements always satisfy the requirements.
  if (nums.length <= 2) return nums.length;
  let j = 2;

  for (let i = 2; i < nums.length; i++) {
    //Make sure no element appears more than twice
    if (nums[i] !== nums[j - 2]) {
      console.log("j: " + j, nums[j]);
      console.log("i: " + i, nums[i]);
      nums[j++] = nums[i];
      console.log("Nums: ", nums);
    }
  }

  console.log(nums);

  return j;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
