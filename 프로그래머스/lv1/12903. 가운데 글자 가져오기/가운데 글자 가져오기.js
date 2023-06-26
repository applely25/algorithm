function solution(s) {
    return s.length%2 ? [...s][~~(s.length/2)] : [...s].splice(s.length/2-1,2).join("")
}