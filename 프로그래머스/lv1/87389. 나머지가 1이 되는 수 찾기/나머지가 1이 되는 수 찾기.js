function solution(n) {
    for(let i = 2; i<=n-1; i++){
        if(n%i ==1) return i
    }
}