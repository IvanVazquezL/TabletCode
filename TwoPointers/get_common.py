def get_common(nums1: list[int], nums2: list[int]) -> int:
    index1, index2 = 0, 0
    n1, n2 = len(nums1), len(nums2)

    while index1 < n1 and index2 < n2:
        if nums1[index1] == nums2[index2]:
            return nums1[index1]
        elif nums1[index1] < nums2[index2]:
            index1 += 1
        else:
            index2 += 1

    return -1


print(get_common([1,2,3], [2,4]))