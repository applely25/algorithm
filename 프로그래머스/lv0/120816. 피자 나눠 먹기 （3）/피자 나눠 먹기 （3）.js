function solution(slice, n) {
    let count = ~~(n / slice);
    let answer = n%slice ? count+1 : count;
    return answer;
}