'''
Given an integer array nums, find the number of ways to split the array into 
two parts so that the first section has a sum greater than or equal to the sum 
of the second section. The second section should have at least one number.
'''

def split_ways(nums: list[int]) -> int:
    total, left, ways = sum(nums), 0, 0

    for i in range(len(nums) - 1):
        left += nums[i]
        right = total - left

        if left >= right:
            ways += 1

    return ways


print(split_ways([10, 4, -8, 7]))