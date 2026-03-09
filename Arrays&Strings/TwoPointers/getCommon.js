/**
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 */
function getCommon(nums1, nums2) {
    let index1 = 0;
    let index2 = 0;

    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] === nums2[index2]) return nums1[index1];
        if (nums1[index1] < nums2[index2]) index1++;
        else index2++;
    }

    return -1
}

console.log(getCommon([1,2,3], [2,4]))