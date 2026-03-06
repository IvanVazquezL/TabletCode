function getSumRange(nums, i, j) {
    const prefixSum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    return prefixSum[j] - prefixSum[i] + nums[i];
}

console.log(getSumRange([1, 2, 3, 4, 5, 6], 1, 3));