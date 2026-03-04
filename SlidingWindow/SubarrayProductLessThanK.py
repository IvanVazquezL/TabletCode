def numSubarrayProductLessThanK(nums: list[int], k: int) -> int:
    left, curr, answer = 0, 1, 0
    
    for right in range(len(nums)):
        curr *= nums[right]

        while curr >= k:
            curr //= nums[left]
            left += 1

        answer += right - left + 1

    return answer

print(numSubarrayProductLessThanK([10, 5, 2, 6], 100))