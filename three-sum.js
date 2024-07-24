/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const r = [];
  // Sort nums asc
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // Ignore elements that match i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let s = i + 1;
    let e = nums.length - 1;

    while (s < e) {
      const sum = nums[s] + nums[e] + nums[i];
      if (sum === 0) {
        r.push([nums[i], nums[s], nums[e]]);
        // Ignore elements that match s
        while (s < e && nums[s] === nums[s + 1]) s++;
        // Ignore elements that match e
        while (s < e && nums[e] === nums[e - 1]) e--;
        s++;
        e--;
      } else if (sum < 0) {
        s++;
      } else {
        e--;
      }
    }
  }
  return r;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// [-1,0,1,2,-1,-4]
// [-4, -1, -1, 0, 1, 2]
