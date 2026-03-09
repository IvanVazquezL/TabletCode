function runningSum(nums) {
    let curr = 0;
    const answer = []

    for (const num of nums) {
        curr += num;
        answer.push(curr);
    }

    return answer;
}

console.log(runningSum([1,2,3,4]));