def find_length(s: str) -> int:
    left, curr, answer = 0, 0, 0

    for right in range(len(s)):
        if s[right] == "0":
            curr += 1

        while curr > 1:
            if s[left] == "0":
                curr -= 1
            left += 1

        answer = max(answer, right - left + 1)

    return answer


print(find_length("1101100111"))