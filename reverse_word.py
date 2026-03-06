def reverse_word(s: str) -> str:
    words = s.split(" ")
    answer = []

    for word in words:
        chars = list(word)
        left, right = 0, len(chars) - 1

        while left < right:
            temp = chars[left]
            chars[left] = chars[right]
            chars[right] = temp

            left += 1
            right -=1

        answer.append("".join(chars))

    return " ".join(answer)



print(reverse_word("Let's take LeetCode contest"))