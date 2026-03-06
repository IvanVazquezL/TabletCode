def min_start_value(nums: list[int]) -> int:
    min_value, curr = 0, 0

    for num in nums:
        curr += num
        min_value = min(min_value, curr)
    
    return 1 - min_value

print(min_start_value([-3,2,-3,4,2]))