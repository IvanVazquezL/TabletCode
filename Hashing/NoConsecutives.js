function NoConsecutives(nums) {
    const numbers = new Set(nums);
    const answer = [];

    for (const num of numbers) {
        if (!(numbers.has(num - 1)) && !(numbers.has(num + 1))) {
            answer.push(num);
        }
    }

    return answer;
}