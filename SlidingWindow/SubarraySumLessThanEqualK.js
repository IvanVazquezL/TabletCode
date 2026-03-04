/**
 * @param {number[]} nums
 * @param {number} k
 */
function findLength(nums, k) {
    let left = 0;
    let curr = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        while (curr > k) {
            curr -= nums[left];
            left++;
        }

        answer = Math.max(answer, curr);
    }

    return answer;
}

findLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8);