function solution(d, budget) {
    let count = 0
    d.sort((a,b)=>a-b).map(v=>{
        if(budget - v < 0) return false;
        count++;
        budget -= v;
    })
    return count   
}