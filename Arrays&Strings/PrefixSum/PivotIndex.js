/**
 * @param {number[]} nums 
 */
function PivotIndex(nums) {
    const total = nums.reduce((prev, acc) => prev + acc, 0);
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        const right = total - left - nums[i];

        if (left === right) return i;

        left += nums[i];
    }

    return -1;
}

console.log(PivotIndex([1,7,3,6,5,6]))