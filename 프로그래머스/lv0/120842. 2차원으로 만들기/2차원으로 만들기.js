function solution(num_list, n) {
    let answer = []
    for(let i = 0; i<num_list.length; i+=n){
        let list = []
        for(let j = 0; j<n; j++)
            list.push(num_list[i+j])
        answer.push(list)
    }
    return answer;
}