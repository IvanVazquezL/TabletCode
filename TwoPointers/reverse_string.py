def reverse_string(s: str) -> str:
    chars = list(s)
    left, right = 0, len(s) - 1

    while left < right:
        temp = chars[right]
        chars[right] = chars[left]
        chars[left] = temp

        left += 1
        right -= 1

    return "".join(chars)

print(reverse_string("abc"))
