function solution(t, p) {
    let num = [...t];
    let len = p.length;
    let result = [];
    
    for(let i = 0; i<=num.length - len; i++){
        /* for문 반복하면서 숫자를 찾고 join해서 result 배열에 삽입
        let number = [];
        for(let j = 0; j<len; j++){
           number.push(num[i+j])
        }
        result.push(Number(number.join("")))
        */
        // slice해서 숫자 찾기
        result.push(num.slice(i, i+len).join(""))
    }
    result = result.filter(n=> n<=p) 
    return result.length
}