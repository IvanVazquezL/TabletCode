class NumArray {
    constructor(nums) {
        this.prefix = [0]

        for (const num of nums) {
            this.prefix.push(
                this.prefix.at(-1) + num
            )
        }
    }

    sumRange(left, right) {
        return this.prefix[right + 1] - this.prefix[left];
    }
}

function RangeSumQuery() {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    console.log(numArray.sumRange(0, 2));
    console.log(numArray.sumRange(2, 5));
    console.log(numArray.sumRange(0, 5));
}

RangeSumQuery()