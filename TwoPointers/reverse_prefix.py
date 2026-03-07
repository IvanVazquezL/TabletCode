def reverse_prefix(word: str, ch: str) -> str:
    right = word.find(ch)

    if right == -1:
        return word
    
    left = 0
    chars = list(word)

    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1

    return "".join(chars)



print(reverse_prefix("abcdefd", "d"))