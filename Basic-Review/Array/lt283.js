/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    var left = 0;
    var right = nums.length;
    while (left < right - 1) {
        if (nums[left] === 0) {
            nums.splice(left, 1);
            nums.push(0);
        }
        left++;
        console.log(left);
    }
}
var arr = [0, 0, 1];
moveZeroes(arr);
console.log(arr);
