function solution(want, number, discount) {
    let count = 0;
    for(let i = 0; i<discount.length-9; i++){
        const dis = discount.slice(i,i+10)
        const result = want.map((w, i)=> dis.filter(v => v === w).length >= number[i])
        if(result.every(v=>v)){
            count++
        }
    }
    return count
}