def reverse_only_letters(s: str) -> str:
    left, right = 0, len(s) - 1
    chars = list(s)

    while left < right:
        is_alpha_left = chars[left].isalpha()
        is_alpha_right = chars[right].isalpha()

        if is_alpha_left and is_alpha_right:
            chars[left], chars[right] = chars[right], chars[left]

            left += 1
            right -= 1
        elif not is_alpha_left:
            left += 1
        else:
            right -= 1

    return "".join(chars)
        
print(reverse_only_letters("a-bC-dEf-ghIj"))