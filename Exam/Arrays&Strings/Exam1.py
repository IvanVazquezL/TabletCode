'''
Problema 3

Dado un string s y un entero k, encuentra el número máximo de vocales (a, e, i, o, u)
que pueden aparecer en cualquier substring contiguo de longitud k.

Ejemplo:

s = "abciiidef"
k = 3
# Output: 3


---

Problema 4

Dado un array nums, encuentra el índice i tal que la suma de los elementos a la 
izquierda de i sea igual a la suma de los elementos a la derecha. Si no existe, 
devuelve -1.

Ejemplo:

nums = [1,7,3,6,5,6]
# Output: 3


---

Problema 5

Dado un string word y un carácter ch, invierte la subcadena desde el inicio hasta la 
primera aparición de ch. Devuelve el string resultante. Si ch no aparece, devuelve 
word sin cambios.

Ejemplo:

word = "abcdefd"
ch = "d"
# Output: "dcbaefd"
'''

'''
Problema 1

Dado un array de números positivos nums y un entero target, encuentra el mínimo 
tamaño de un subarray contiguo cuya suma sea mayor o igual a target. Si no existe, 
devuelve 0.

Ejemplo:

nums = [2,3,1,2,4,3]
target = 7
# Output: 2
'''
def problem1(nums: list[int], target: int) -> int:
    curr, left, answer = 0, 0, float('inf')

    for right in range(len(nums)):
        curr += nums[right]

        while curr >= target:
            answer = min(answer, right - left + 1)
            curr -= nums[left]
            left += 1

    return answer if answer != float('inf') else 0

print(problem1([2,3,1,2,4,3], 7))

'''
Problema 2

Tienes dos strings s y t de igual longitud y un entero max_cost. Cambiar un 
carácter s[i] a t[i] cuesta abs(ord(s[i]) - ord(t[i])). Encuentra la máxima longitud 
de una subsecuencia contigua de s que puedas cambiar a t sin exceder max_cost.

Ejemplo:

s = "abcd"
t = "bcdf"
max_cost = 3
# Output: 3
'''

def problem2(s: str, t: str, max_cost: int) -> int:
    left, curr, answer = 0, 0, 0

    for right in range(len(s)):
        curr += abs(ord(s[right]) - ord(t[right]))

        while curr > max_cost:
            curr -= abs(ord(s[left]) - ord(t[left]))
            left += 1

        answer = max(answer, right - left + 1)

    return answer


print(problem2("abcd", "bcdf", 3))