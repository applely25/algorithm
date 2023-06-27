function solution(t, p) {
    let num = [...t];
    let len = [...p].length;
    let result = [];
    
    for(let i = 0; i<=num.length - len; i++){
        let number = [];
        for(let j = 0; j<len; j++){
           number.push(num[i+j])
        }
        result.push(Number(number.join("")))
    }
    result = result.filter(n=> n<=Number(p)) 
    return result.length
}