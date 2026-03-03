def sorted_squares(nums: list[int]) -> list[int]:
    n = lens(nums)
    left, right = 0, n - 1
    result = [0] * n

    for i in range(n, 0, -1):
        if abs(nums[left]) > abs(nums[right]):
            result[i] = nums[left] ** 2
            left += 1
        else:
            result[i] = nums[right] ** 2
            right -=1

    return result


print(sorted_squares([-4,-1,0,3,10]))