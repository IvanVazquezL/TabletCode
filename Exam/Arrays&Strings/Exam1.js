/*
Problema 1

Dado un array de números positivos nums y un entero target, encuentra el mínimo 
tamaño de un subarray contiguo cuya suma sea mayor o igual a target. Si no existe, 
devuelve 0.

Ejemplo:

nums = [2,3,1,2,4,3]
target = 7
# Output: 2
*/

function problem1(nums, target) {
    let left = 0;
    let curr = 0;
    let answer = Infinity;

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        while (curr >= target) {
            answer = Math.min(answer, right - left + 1);
            curr -= nums[left];
            left += 1;
        }
    }

    return answer === Infinity ? 0 : answer;
}

console.log(problem1([2,3,1,2,4,3], 7))

/*
Problema 2

Tienes dos strings s y t de igual longitud y un entero max_cost. Cambiar un 
carácter s[i] a t[i] cuesta abs(ord(s[i]) - ord(t[i])). Encuentra la máxima longitud 
de una subsecuencia contigua de s que puedas cambiar a t sin exceder max_cost.

Ejemplo:

s = "abcd"
t = "bcdf"
max_cost = 3
# Output: 3
*/

/**
 * @param {string} s 
 * @param {string} t 
 * @param {number} max_cost 
 */
function problem2(s, t, max_cost) {
    let curr = 0;
    let left = 0;
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        curr += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (curr > max_cost) {
            curr -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left += 1;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}

console.log(problem2("abcd", "bcdf", 3))

/*
Problema 3

Dado un string s y un entero k, encuentra el número máximo de vocales (a, e, i, o, u)
que pueden aparecer en cualquier substring contiguo de longitud k.

Ejemplo:

s = "abciiidef"
k = 3
# Output: 3
*/

function problem3(s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let curr = 0;
    let answer = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            curr++;
        }
    }

    answer = curr;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) curr += 1;
        if (vowels.has(s[i - k])) curr -= 1;
        answer = Math.max(answer, curr);
    }

    return answer;
}

console.log(problem3("abciiidef", 3));

/*
Problema 4

Dado un array nums, encuentra el índice i tal que la suma de los elementos a la 
izquierda de i sea igual a la suma de los elementos a la derecha. Si no existe, 
devuelve -1.

Ejemplo:

nums = [1,7,3,6,5,6]
# Output: 3
*/

function problem4(nums) {
    const total = nums.reduce((prev, acc) => prev + acc, 0);
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        const left = curr - nums[i];
        const right = total - nums[i] - left;

        if (left === right) return i;
    }

    return -1;
}

console.log(problem4([1,7,3,6,5,6]));

/*
Problema 5

Dado un string word y un carácter ch, invierte la subcadena desde el inicio hasta la 
primera aparición de ch. Devuelve el string resultante. Si ch no aparece, devuelve 
word sin cambios.

Ejemplo:

word = "abcdefd"
ch = "d"
# Output: "dcbaefd"
*/

/**
 * 
 * @param {string} word 
 * @param {string} ch 
 */
function problem5(word, ch) {
    const chars = word.split('');
    const right = word.indexOf(ch);
    let left = 0;

    if (right === -1) return word;

    while (left < right) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left += 1;
        right -= 1;
    }

    return chars.join('');
}

console.log(problem5("abcdefd", "d"));