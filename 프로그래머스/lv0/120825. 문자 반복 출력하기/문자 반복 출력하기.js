function solution(my_string, n) {
    /*
    let answer = []
    my_string.split("").map(v => {
        for(let i = 1; i<=n; i++)
            answer.push(v)
    })
    return answer.join("")
    */
    return my_string.split("").map(v => v.repeat(n)).join("")
}