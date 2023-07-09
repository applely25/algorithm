function solution(num_list) {
    num_list.sort((a,b)=>a-b)
    num_list.length = 5;
    return num_list
}