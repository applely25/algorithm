function solution(s) {
    if (s.match(/[^0-9]/g)) return false
    if(s.length === 4 || s.length === 6) return true
    return false
}