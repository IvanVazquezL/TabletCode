def min_sub_array_len(target: int, nums: list[int]) -> int:
    curr, answer, left = 0, float('inf'), 0

    for right in range(len(nums)):
        curr += nums[right]

        while curr >= target:
            answer = min(answer, right - left + 1)
            curr -= nums[left]
            left += 1
        
    return answer if answer != float('inf') else 0

print(min_sub_array_len(7, [2,3,1,2,4,3]))
