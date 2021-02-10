/**
 *  两数之和
 *  输入：nums = [2,7,11,15], target = 9
 */
function twoSum(nums, target) {
    for (var i = 0; i <= nums.length; ++i) {
        for (var j = 1; j <= nums.length; ++j) {
            if (nums[i] + nums[j] === target) {
                console.log([i, j]);
                return [i, j];
            }
        }
    }
    return [];
}
twoSum([3, 2, 4], 6);
