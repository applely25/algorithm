function solution(start, end) {
    let result = []
    for(; start >= end; start--) result.push(start)
    return result
}