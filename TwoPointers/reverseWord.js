/**
 * @param {string} s 
 */
function reverseWord(s) {
    const words = s.split(' ');
    const answer = [];

    for (const word of words) {
        let left = 0;
        let right = word.length - 1;

        while (left < right) {
            const temp = word[left];
            word[left] = word[right];
            word[right] = temp; 
        }

        answer.push(word.join(''));
    }

    return answer.join(' ');
}

console.log(reverseWord("Let's take LeetCode contest"))