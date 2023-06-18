function solution(my_string, index_list) {
    let answer = []
    my_string = my_string.split("")
    index_list.map(d=> answer.push(my_string[d]))
    return answer.join("")
}