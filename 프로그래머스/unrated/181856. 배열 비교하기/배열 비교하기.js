function solution(arr1, arr2) {
    if(arr1.length != arr2.length) return arr1.length > arr2.length ? 1 : -1
    else{
        let arr1Add = arr1.reduce((a,b)=>a+b,0)
        let arr2Add = arr2.reduce((a,b)=>a+b,0)
        if(arr1Add == arr2Add) return 0
        return arr1Add > arr2Add ? 1 : -1
    }
}