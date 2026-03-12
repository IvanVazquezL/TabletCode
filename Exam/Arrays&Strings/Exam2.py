# Dado un array de enteros positivos y un número k,
# encuentra la longitud mínima de un subarray contiguo cuya suma sea exactamente k.
# Devuelve 0 si no existe tal subarray.
# Ejemplo: nums = [2,3,1,2,4,3], k = 7 -> Output esperado: 2 (subarray [4,3])
# Ejemplo: nums = [1,1,1,1,1], k = 11 -> Output esperado: 0
def problem1(nums: list[int], k: int) -> int:
    left, curr, answer = 0, 0, float('inf')

    for right in range(len(nums)):
        curr += nums[right]

        while curr > k:
            curr -= nums[left]
            left += 1

        if curr == k:
            answer = min(answer, right - left + 1)

    return 0 if answer == float('inf') else answer


print(problem1([2,3,1,2,4,3], 7))  # Esperado: 2

# Dado un string y un entero k,
# encuentra la longitud máxima de un substring que contenga a lo sumo k caracteres 
# distintos.
# Ejemplo: s = "eceba", k = 2 -> Output esperado: 3 (substring "ece")
# Ejemplo: s = "aa", k = 1 -> Output esperado: 2 (todo el string)
def problem2(s: str, k: int) -> int:
    chars = dict()
    left, curr, answer = 0, 0, 0

    for right in range(len(s)):
        if s[right] not in chars:
            chars[s[right]] = 1
            curr += 1

        while curr > k:
            if s[left] in chars:
                chars[s[left]] -= 1

                if chars[s[left]] == 0:
                    del chars[s[left]]
                    curr -= 1

            left += 1
        
        answer = max(answer, right - left + 1)

    return answer

print(problem2("eceba", 2))  # Esperado: 3

# Dado un array de enteros ordenado,
# encuentra dos números que sumen un objetivo dado y devuelve sus índices.
# Debe resolverse sin usar hashing.
# Ejemplo: nums = [1,2,3,4,6], target = 6 -> Output esperado: (1,2)
# Ejemplo: nums = [2,3,5,8,11], target = 13 -> Output esperado: (2,3)
def problem3(nums: list[int], target: int) -> tuple[int,int]:
    left, right = 0, len(nums) - 1

    while left < right:
        sum = nums[left] + nums[right]

        if sum == target:
            return [left, right]
        
        if sum > target:
            right -= 1
        else:
            left += 1

print(problem3([1,2,3,4,6], 6))  # Esperado: (1,2)

# Dado un array de enteros,
# devuelve un array donde cada elemento i es la suma de todos los elementos desde 0 
# hasta i.
# Ejemplo: nums = [1,2,3,4] -> Output esperado: [1,3,6,10]
# Ejemplo: nums = [2,1,5] -> Output esperado: [2,3,8]
def problem4(nums: list[int]) -> list[int]:
    for i in range(1, len(nums)):
        nums[i] = nums[i - 1] + nums[i]

    return nums


print(problem4([1,2,3,4]))  # Esperado: [1,3,6,10]

# Dado un string y un caracter ch,
# devuelve un array con la distancia más cercana a la izquierda y derecha de cada letra igual a ch.
# Ejemplo: s = "loveleetcode", ch = "e" -> Output esperado: [3,2,1,0,1,0,0,1,2,2,1,0]
# Ejemplo: s = "abcde", ch = "a" -> Output esperado: [0,1,2,3,4]
def problem5(s: str, ch: str) -> list[int]:
    n = len(s)
    answer = [0] * n
    prev = -float('inf')

    for i in range(n):
        if s[i] == ch:
            prev = i
        answer[i] = i - prev

    prev = float('inf')

    for i in range(n - 1, -1, -1):
        if s[i] == ch:
            prev = i
        answer[i] = min(answer[i], prev - i)

    return answer


print(problem5("loveleetcode", "e"))  # Esperado: [3,2,1,0,1,0,0,1,2,2,1,0]