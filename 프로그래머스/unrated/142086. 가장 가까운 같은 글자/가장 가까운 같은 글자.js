function solution(s) {
    let result = [];
    let letter = {};
    [...s].map((d, i) => {
        result.push(d in letter ? i-letter[d] : -1)
        letter[d] = i;
    })
    return result
}