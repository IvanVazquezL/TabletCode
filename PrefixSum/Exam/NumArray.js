class NumArray {
    /**
     * @param {number[]} nums
    */
    constructor(nums) {
        this.nums = nums;
        this.prefixSum = [nums[0]];

        for (let i = 1;i < nums.length; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
        }
    }

    /**
     * @param {number} i
     * @param {number} j
    */
    sumRange(i, j) {
        return this.prefixSum[j] - this.prefixSum[i] + this.nums[i];
    }
}

function main() {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
    console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
    console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
}

main();