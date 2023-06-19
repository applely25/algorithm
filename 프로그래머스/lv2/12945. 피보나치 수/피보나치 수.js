function solution(n) {
    let fibo = new Array(n+1).fill(0)
    fibo[1] = 1
    for(let i = 2; i<=n; i++){
        if(fibo[i] === 0){
            fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567
        }
    }
    return fibo[n]
    
}