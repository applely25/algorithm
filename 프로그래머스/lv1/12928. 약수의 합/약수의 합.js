function solution(n) {
    let add = 0
    for(let i = 1; i<=n; i++){
        if(n%i === 0) add+=i
    }
    return add
}