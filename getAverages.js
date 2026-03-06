function getAverages(nums, k) {
    const n = nums.length;
    const size = k * 2 + 1;
    let windowSum = 0;
    const answer = new Array(n).fill(-1);

    if (size > n) {
        return answer;
    }
    
    for (let i = 0; i < size; i++) {
        windowSum += nums[i];
    }

    answer[k] = Math.floor(windowSum/size);

    for (let i = size; i < n; i++) {
        windowSum += nums[i];
        windowSum -= nums[i - size];
        answer[i - k] = Math.floor(windowSum/size);
    }

    return answer;
}

console.log(getAverages([7,4,3,9,1,8,5,2,6], 3));