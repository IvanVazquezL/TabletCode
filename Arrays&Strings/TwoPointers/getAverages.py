def get_averages(nums: list[int], k: int) -> list[int]:
    n = len(nums)
    size = 2 * k + 1
    answer = [-1] * n

    if size > n:
        return answer
    
    window_sum = sum(nums[:size])
    answer[k] = window_sum // size

    for i in range(size, n):
        window_sum += nums[i]
        window_sum -= nums[i - size]
        answer[i - k] = window_sum // size

    return answer

print(get_averages([7,4,3,9,1,8,5,2,6], 3))