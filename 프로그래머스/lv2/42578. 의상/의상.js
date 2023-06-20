function solution(clothes) {
    let kind = {};
    clothes.map(d=>{
        if(kind[d[1]]){
            kind[d[1]] += 1
        }else{
            kind[d[1]] = 1
        }
    })
    kind = Object.values(kind)
    return kind.reduce((a,b) => a*(b+1), 1) - 1
}
