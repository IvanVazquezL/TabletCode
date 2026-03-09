/**
 * @param {number[]} nums 
 */
function moveZeroes(nums) {
    let insertPosition = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[insertPosition], nums[i]] = [nums[i], nums[insertPosition]];
            insertPosition += 1;
        }
    }

    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));