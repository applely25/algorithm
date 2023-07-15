function solution(n) {
    let answer = [n];
    while(n !== 1){
        if(n%2) n = 3*n+1
        else n = n/2
        answer.push(n);
    }
    return answer
}