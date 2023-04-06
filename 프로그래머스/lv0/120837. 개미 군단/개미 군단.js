function solution(hp) {
    let answer = ~~(hp/5);
    hp%=5;
    answer += ~~(hp/3);
    hp%=3;
    return answer + hp;
}