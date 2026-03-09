function SortedSquares(nums) {
    let left = 0;
    let right = nums.length - 1;
    const result = new Array(nums.length);

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = Math.pow(nums[left], 2);
            left++;
        } else {
            result[i] = Math.pow(nums[right], 2);
            right--;
        }
    }

    return result;
}

console.log(SortedSquares([-4,-1,0,3,10]));