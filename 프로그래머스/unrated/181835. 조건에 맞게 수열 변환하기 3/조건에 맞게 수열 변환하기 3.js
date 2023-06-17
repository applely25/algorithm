function solution(arr, k) {
    if(k%2){
        return arr.map(d=>d*k)
    }else{
        return arr.map(d=>d+k)
    }
}