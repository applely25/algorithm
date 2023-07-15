function solution(strArr) {
    let len = {};
    strArr.map(v=>{
        if(len[v.length]) len[v.length]++;
        else len[v.length] = 1
    })
    return Math.max(...Object.values(len))
}