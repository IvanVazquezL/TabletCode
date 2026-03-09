def highest_altitude(gains: list[int]) -> int:
    curr, answer = 0, 0

    for gain in gains:
        curr += gain
        answer = max(answer, curr)

    return answer

print(highest_altitude([-5,1,5,0,-7]))