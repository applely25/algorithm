function solution(s){
    let sArr = s.split("");
    let count = 0;
    sArr.forEach(v => {
        if(count < 0) return false;
        if(v == "(") count++;
        else count--;
    })
    if(!count) return true;
    return false;
}