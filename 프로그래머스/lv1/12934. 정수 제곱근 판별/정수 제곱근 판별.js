function solution(n) {
    let sqrt = Math.sqrt(n)
    if(sqrt === ~~sqrt) return (sqrt+1)**2
    return -1
}