def repeated_character(s: str) -> str:
    seen = set()

    for char in s:
        if char in seen:
            return char
        seen.add(char)