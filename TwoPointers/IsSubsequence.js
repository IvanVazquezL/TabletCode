function IsSubsequence(s, t) {
    let indexS = 0;
    let indexT = 0;

    while (indexS < s.length && indexT < t.length) {
        if (s[indexS] === t[indexT]) {
            indexS++;
        }

        indexT++;
    }

    return indexS === s.length;
}

console.log(IsSubsequence('ace', 'abcde'));
console.log(IsSubsequence('aec', 'abcde'));