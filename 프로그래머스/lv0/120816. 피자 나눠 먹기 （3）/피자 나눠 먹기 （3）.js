function solution(slice, n) {
    let count = ~~(n / slice);
    return n%slice ? count+1 : count;
}