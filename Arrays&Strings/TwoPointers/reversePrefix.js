/**
 * @param {string} word 
 * @param {string} ch 
 */
function reversePrefix(word, ch) {
    let right = word.indexOf(ch);
    
    if (right === -1) {
        return word;
    }

    let left = 0;
    const chars = word.split('');

    while (left < right) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }

    return chars.join('');
}

console.log(reversePrefix("abcdefd", "d"))