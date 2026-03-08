def max_vowels(s: str, k: int) -> int:
    vowels = {"a", "e", "i", "o", "u"}
    left, answer, vowel_count = 0, 0, 0

    for right in range(len(s)):
        if s[right] in vowels:
            vowel_count += 1

        while right - left + 1 > k:
            if s[left] in vowels:
                vowel_count -= 1
            
            left += 1

        answer = max(answer, vowel_count)


    return answer


print(max_vowels("abciiidef", 3))
print(max_vowels("aeiou", 2))