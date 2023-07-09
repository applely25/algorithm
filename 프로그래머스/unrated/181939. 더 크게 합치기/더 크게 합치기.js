function solution(a, b) {
    let f = Number(String(a)+String(b));
    let s = Number(String(b)+String(a));
    return f >= s ? f:s
}