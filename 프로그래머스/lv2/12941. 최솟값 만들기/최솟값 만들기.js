function solution(A,B){
    let add = 0
    A = A.sort((a,b) => a-b)
    B = B.sort((a,b) => b-a)
    
    A.map((n,i) => add += n * B[i])
    return add
}