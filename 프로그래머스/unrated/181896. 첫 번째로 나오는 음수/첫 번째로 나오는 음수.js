function solution(num_list) {
    let answer = []
    for(let i in num_list){
        if(num_list[i] < 0) answer.push(i)
    }
    return answer.length ? Number(answer[0]) : -1
}