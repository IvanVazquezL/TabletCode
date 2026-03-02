def is_palindrome(s: str) -> bool:
    left = 0
    right = len(s) - 1

    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1

    return True

def is_palindrome_two(s: str) -> bool:
    return s == s[::-1]
