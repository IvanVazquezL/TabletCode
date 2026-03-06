/**
 * @param {number[]} nums 
 */
function findMaxLength(nums) {
    const map = new Map();
    // suma:indice
    map.set(0, -1);
    let answer = 0;
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i] === 1 ? 1 : -1;

        if (map.has(prefixSum)) {
            answer = Math.max(answer, i - map.get(prefixSum));
        } else {
            map.set(prefixSum, i);
        }

    }

    return answer;
}