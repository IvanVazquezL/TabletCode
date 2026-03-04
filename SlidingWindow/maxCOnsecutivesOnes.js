function MaxConsecutivesOnes(nums, k) {
    let left = 0;
    let curr = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            curr += 1;
        }

        while (curr > k) {
            if (nums[left] === 0) {
                curr -= 1
            }
            left += 1
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer
}

console.log(MaxConsecutivesOnes([1,1,1,0,0,0,1,1,1,1,0], 2))