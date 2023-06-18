function solution(n, k) {
    let result = []
    for(let i = 1; i<= n/k; i++){
        result.push(k*i)
    }
    return result
}