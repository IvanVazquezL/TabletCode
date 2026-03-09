function HighestAltitude(gains) {
    let curr = 0;
    let answer = 0;

    for (const gain of gains) {
        curr += gain;
        answer = Math.max(answer, curr);
    }

    return answer;
}

console.log(HighestAltitude([-5,1,5,0,-7]))