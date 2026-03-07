/**
 * @param {number} target 
 * @param {number[]} nums 
 */
function MinSubArrayLen(target, nums) {
    let left = 0;
    let curr = 0;
    let answer = Infinity;

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        while (curr >= target) {
            answer = Math.min(answer, right - left + 1);
            curr -= nums[left];
            left++;
        }
    }

    return answer === Infinity ?
        0 :
        answer;
}

console.log(MinSubArrayLen(7, [2,3,1,2,4,3]))
