/**
 * @param {string} s 
 */
function reverseOnlyLetters(s) {
    let left = 0;
    let right = s.length - 1;
    const chars = s.split('');

    while (left < right) {
        const isLeftAlpha = isAlpha(chars[left]);
        const isRightAlpha =isAlpha(chars[right]);

        if (isLeftAlpha && isRightAlpha) {
            [chars[left], chars[right]] = [chars[right], chars[left]]
            left++;
            right--; 
        } else if (!isLeftAlpha) {
            left++;
        } else {
            right--;
        }
    }

    return chars.join('');

    /**
     * @param {string} char 
     */
    function isAlpha(char) {
        return /[a-zA-Z]/.test(char);
    }
}

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))