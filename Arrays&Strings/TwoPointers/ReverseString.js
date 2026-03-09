/**
 * @param {string[]} s 
 */
function ReverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        
        left++;
        right--;
    }

    return s;
}

console.log(ReverseString(["h","e","l","l","o"]));