/**
 * @param {string} s 
 */
function findLength(s) {
    let left = 0;
    let curr = 0;
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === "0") {
            curr++;
        }

        while (curr > 1) {
            if (s[left] === "0") {
                curr--;
            }

            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}

console.log(findLength("1101100111"))