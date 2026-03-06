/**
 * @param {number[]} nums 
 */
function splitWays(nums) {
    const total = nums.reduce((prev, curr) => prev + curr, 0);
    let ways = 0;
    let left = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        const right = total - left;

        if (left >= right) {
            ways += 1;
        }
    }

    return ways;
}

console.log(splitWays([10, 4, -8, 7]))