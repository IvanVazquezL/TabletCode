/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @param {number} limit 
 */
function QueriesSum(nums, queries, limit) {
    const prefix = [0];
    const answers = [];

    for (const num of nums) {
        prefix.push(
            prefix.at(-1) + num
        );
    }

    for (const [left, right] of queries) {
        const rangeSum = prefix[right + 1] - prefix[left];
        answers.push(rangeSum < limit);
    }

    return answers;
}

console.log(QueriesSum([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13))