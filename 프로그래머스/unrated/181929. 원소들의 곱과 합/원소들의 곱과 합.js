function solution(num_list) {
    let add = num_list.reduce((a,b)=>a+b,0)
    let mul = num_list.reduce((a,b)=>a*b,1)
    return add*add > mul ? 1 : 0
}