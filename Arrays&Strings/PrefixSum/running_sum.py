def running_sum(nums: list[int]) -> list[int]:
    arr, curr = [], 0

    for num in nums:
        curr += num
        arr.append(curr)

    return arr

print(running_sum([1,2,3,4]))