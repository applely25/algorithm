function solution(arr, n) {
    const check = arr.length % 2;
    return arr.map((d, i)=> i%2 === check ? d : d+n)
}