def findMaxAverage(nums: list[int], k: int) -> int:
    curr, answer = 0, 0

    for i in range(k):
        curr += nums[i]

    answer = curr / k

    for i in range(k, len(nums)):
        curr += nums[i]
        curr -= nums[i - k]
        answer = max(answer, curr / k)

    return answer

print(findMaxAverage([1,12,-5,-6,50,3], 4))