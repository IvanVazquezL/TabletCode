def max_water(nums: list[int]) -> int:
    left, right = 0, len(nums) - 1
    answer = 0

    while left < right:
        size = right - left
        water = min(nums[left], nums[right]) * size
        answer = max(water, answer)

        if nums[left] < nums[right]:
            left += 1
        else:
            right -= 1

    return answer