function solution(number) {
    return number.split("").reduce((a,b)=> a+Number(b), 0) % 9
}