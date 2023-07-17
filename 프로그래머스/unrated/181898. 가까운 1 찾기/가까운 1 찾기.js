function solution(arr, idx) {
    for(let i in arr){
        if(arr[i] === 1 && i >= idx)
            return Number(i)
    }
    return -1
}