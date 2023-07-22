function solution(array) {
    return array.reduce((a,b)=>a+String(b),"").split("").filter(v=> v==="7").length
}