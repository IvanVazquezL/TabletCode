/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
    const map = new Map();
    // suma:indice
    // antes de empezar en la nada (posicion -1) la suma es 0
    map.set(0, -1);
    let prefixSum = 0;
    let answer = 0;

    for (let i = 0; i <nums.length; i++) {
        prefixSum += nums[i] === 1 ? 1 : -1;

        if (map.has(prefixSum)) {
            answer = Math.max(answer, i - map.get(prefixSum));
        } else {
            map.set(prefixSum, i);
        }
    }

    return answer;
}

console.log(findMaxLength([0,1,1,1,1,1,0,0,0]));