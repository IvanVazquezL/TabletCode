function findBestSubarray(nums, k) {
    let curr = 0;
    let answer = 0;

    for (let i = 0; i < k; i++) {
        curr += nums[i];
    }

    answer = curr;

    for (let i = k; i < nums.length; i++) {
        curr += nums[i];
        curr -= nums[i - k];
        answer = Math.max(answer, curr);
    }

    return answer;
}

console.log(findBestSubarray([3, -1, 4, 12, -8, 5, 6], 4))