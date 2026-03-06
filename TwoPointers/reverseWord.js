/**
 * @param {string} s 
 */
function reverseWord(s) {
    const words = s.split(' ');
    const answer = [];

    for (const word of words) {
        const newWord = word.split('');
        let left = 0;
        let right = newWord.length - 1;

        while (left < right) {
            const temp = newWord[left];
            newWord[left] = newWord[right];
            newWord[right] = temp; 
            left++;
            right--;
        }

        answer.push(newWord.join(''));
    }

    return answer.join(' ');
}

console.log(reverseWord("Let's take LeetCode contest"))