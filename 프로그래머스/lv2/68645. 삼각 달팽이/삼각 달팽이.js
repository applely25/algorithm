function solution(n) {
    const answer = new Array(n);
    for (var i = 1; i <= n; i++) {
        answer[i-1] = new Array(i);
    }
    
    let num = 1, row = -1, col = 0
    console.log(num, row, col)
    
    return answer;
}