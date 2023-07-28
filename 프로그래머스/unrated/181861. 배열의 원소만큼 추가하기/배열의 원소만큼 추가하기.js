function solution(arr) {
    let result = []
    arr.map(n=>{
        for(i=1;i<=n; i++)
            result=result.concat(n)
    })
    return result
}