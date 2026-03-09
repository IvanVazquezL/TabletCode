function minStartValue(nums) {
    let minValue = 0;
    let curr = 0;

    for (let num of nums) {
        curr += num;
        minValue = Math.min(curr, minValue);
    }

    return 1 - minValue;
}

console.log(minStartValue([-3,2,-3,4,2]))