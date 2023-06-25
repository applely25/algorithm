function solution(arr1, arr2) {
    return arr1.map((arr, index)=>{
        return arr.map((n,i)=> n + arr2[index][i])
    })
}