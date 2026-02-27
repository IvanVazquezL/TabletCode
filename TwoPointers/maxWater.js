/**
 * @param {number[]} nums 
 */
function MaxWater(nums) {
    let left = 0;
    let right = nums.length - 1;
    let answer = 0;

    while (left < right) {
        const length = right - left;
        const water = Math.min(nums[right], nums[left]) * length;
        answer = Math.max(water, answer);

        if (nums[left] < nums[right]) {
            left++;
        } else {
            right--;
        }
    }

    return answer;
}

console.log(MaxWater([0,1,0,2,1,0,1,3,2,1,2,1]));