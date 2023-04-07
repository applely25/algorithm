function solution(my_string) {
    let answer = []
    my_string.split("").map(v=>{
        let a = true
        answer.map(i=>{
            if(i == v) a = false
        })
        if(a) answer.push(v)
    })
    return answer.join("");
}