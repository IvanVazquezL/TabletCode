def pivot_index(nums: list[int]) -> int:
    total = sum(nums)
    left = 0

    for i, num in enumerate(nums):
        right = total - left - num

        if left == right:
            return i
        
        left += num

    return -1


print(pivot_index([1,7,3,6,5,6]))