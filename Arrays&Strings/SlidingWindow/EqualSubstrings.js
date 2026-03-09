/**
 * @param {string} s 
 * @param {string} t 
 * @param {number} maxCost 
 */
function EqualSubstrings(s, t, maxCost) {
    let left = 0;
    let curr = 0;
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        curr += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (curr > maxCost) {
            curr -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}

console.log(EqualSubstrings("abcd", "bcdf", 3));