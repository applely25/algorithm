function solution(arr) {
    let min = arr.indexOf(Math.min(...arr))
    arr.splice(min,1)
    return arr.length ? arr : [-1]
}