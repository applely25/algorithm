function solution(my_string) {
    return my_string.split("").map(v => {
        if(/[A-Z]/.test(v)) return v.toLowerCase()
        else return v.toUpperCase()
    }).join("")
}