function solution(num, k) {
    let answer = num.toString().split("").indexOf(k.toString());
    if(answer == "-1") return -1
    return answer+1;
}