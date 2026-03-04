def max_consecutives_ones(nums: list[int], k: int) -> int:
    left, curr, answer = 0, 0, 0

    for right in range(len(nums)):
        if nums[right] == 0:
            curr += 1

        while curr > k:
            if nums[left] == 0:
                curr -= 1
            left += 1

        answer = max(answer, right - left + 1)

    return answer


print(max_consecutives_ones([1,1,1,0,0,0,1,1,1,1,0], 2))