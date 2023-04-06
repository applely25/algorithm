function solution(my_string) {
    return my_string.replace(/[a-z]/g,"")
        .split("").map(v=>Number(v))
        .sort((a,b)=>a-b);
}