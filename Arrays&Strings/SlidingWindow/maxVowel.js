/**
 * @param {string} s 
 * @param {number} k 
 * @returns 
 */
function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let left = 0;
    let answer = 0;
    let vowelCount = 0;

    for (let right = 0; right < s.length; right++) {
        if (vowels.has(s[right])) {
            vowelCount++;
        }

        while (right - left + 1 > k) {
            if (vowels.has(s[left])) {
                vowelCount--;
            }
            left++;
        }

        answer = Math.max(answer, vowelCount);
    }

    return answer;
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));