def find_length(nums: list[int], k: int) -> int:
    left, curr, answer = 0, 0, 0

    for right in range(len(nums)):
        curr += nums[right]

        while curr > k:
            curr -= nums[left]
            left += 1
        
        answer = max(answer, right - left + 1)

    return answer


print(find_length([3, 1, 2, 7, 4, 2, 1, 1, 5], 8))