function solution(age) {
    const pattern = ["a","b","c","d","e","f","g","h","i","j"]
    return age.toString().split("").map(v=> {
        let i = Number(v);
        return pattern[i]
    }).join("")
}