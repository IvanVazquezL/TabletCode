/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
    const map = new Map();
    // suma: frequencia
    map.set(0, 1);
    let answer = 0;
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (map.has(prefixSum - k)) {
            answer += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return answer;
}

console.log(subarraySum([1,2,3], 3));