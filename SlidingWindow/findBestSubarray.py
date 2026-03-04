def find_best_subarray(nums: list[int], k: int) -> int:
    curr, answer = 0, 0

    for i in range(k):
        curr += nums[i]

    answer = curr

    for i in range(k, len(nums)):
        curr += nums[i]
        curr -= nums[i - k]
        answer = max(answer, curr)

    return answer

print(find_best_subarray([3, -1, 4, 12, -8, 5, 6], 4))