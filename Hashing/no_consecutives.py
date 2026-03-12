def no_consecutives(nums: list[int]) -> list[int]:
    numbers, answer = set(nums), []

    for num in numbers:
        if num - 1 not in numbers and num + 1 not in numbers:
            answer.append(num)

    return answer